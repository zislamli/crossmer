const test = require('node:test');
const assert = require('node:assert/strict');
const { loadSite } = require('../scripts/build');

const { modules } = loadSite();
const { deliverInquiry, inquiryConfig, emptyInquiry } = modules.inquiry;
const valid = { ...emptyInquiry(), name: ' Test User ', company: 'Test Company', email: ' test@example.com ', type: 'product', product: 'Silikomanqan', message: 'Please provide specifications for the requested material.', language: 'az', consent: true };

test('Web3Forms request has the access key, reply address and inquiry fields', async () => {
  let calls = 0;
  const result = await deliverInquiry(valid, inquiryConfig, async (url, options) => {
    calls++;
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/json');
    assert.equal(options.headers.Accept, 'application/json');
    assert.ok(options.signal instanceof AbortSignal);
    const payload = JSON.parse(options.body);
    assert.equal(payload.access_key, inquiryConfig.accessKey);
    assert.match(payload.access_key, /^[a-f0-9-]{36}$/);
    assert.equal(payload.name, 'Test User');
    assert.equal(payload.email, 'test@example.com');
    assert.equal(payload.replyto, payload.email);
    assert.equal(payload.subject, 'CROSSMER — Product Inquiry');
    assert.equal(payload.inquiry_type, 'Product Inquiry');
    assert.equal(payload.product, 'Silikomanqan');
    assert.equal('language' in payload, false);
    assert.equal('consent' in payload, false);
    assert.equal(payload.botcheck, false);
    assert.equal('website' in payload, false);
    return { ok: true, json: async () => ({ success: true }) };
  });
  assert.equal(calls, 1);
  assert.equal(result.accepted, true);
});

test('Web3Forms rejects failed HTTP, false success, old response format and malformed responses', async () => {
  for (const response of [
    { ok: false, json: async () => ({ success: true }) },
    { ok: true, json: async () => ({ success: false }) },
    { ok: true, json: async () => ({ success: 'true' }) },
    { ok: true, json: async () => ({ accepted: true }) },
    { ok: true, json: async () => null },
    { ok: true, json: async () => { throw new Error('Invalid JSON'); } }
  ]) {
    assert.equal((await deliverInquiry(valid, inquiryConfig, async () => response)).accepted, false);
  }
  for (const failure of [new Error('Network failed'), new DOMException('Request timed out', 'AbortError')]) {
    assert.equal((await deliverInquiry(valid, inquiryConfig, async () => { throw failure; })).accepted, false);
  }
});

test('missing consent, honeypot content and missing configuration never reach Web3Forms', async () => {
  let calls = 0;
  const request = async () => { calls++; throw new Error('Unexpected request'); };
  assert.equal((await deliverInquiry({ ...valid, consent: false }, inquiryConfig, request)).accepted, false);
  assert.equal((await deliverInquiry({ ...valid, website: 'spam' }, inquiryConfig, request)).accepted, false);
  assert.equal((await deliverInquiry(valid, { endpoint: inquiryConfig.endpoint }, request)).unconfigured, true);
  assert.equal((await deliverInquiry(valid, { accessKey: inquiryConfig.accessKey }, request)).unconfigured, true);
  assert.equal(calls, 0);
});

test('all contact pages have send controls and updated privacy notices', () => {
  const renderer = modules['trade-render'];
  const { languages, copy } = modules['trade-content'];
  for (const language of languages) {
    const html = renderer.renderPage(language, 'contact');
    assert.ok(html.includes(copy[language].send));
    assert.ok(!html.includes('class="delivery-notice"'));
    assert.ok(!html.includes('crossmer-inquiry.txt'));
    const privacy = renderer.renderPage(language, 'privacy');
    assert.match(privacy, /href="https:\/\/web3forms.com\/privacy"/);
    assert.ok(privacy.includes('Web3Forms'));
  }
});
