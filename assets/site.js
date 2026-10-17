const modules={};
modules["trade-content"]=(()=>{
// Complete page dictionaries. Entries are keyed by language; no text lookup fallbacks.
const languages=['en','az','tr','ru'];
const locale={en:'en-GB',az:'az-AZ',tr:'tr-TR',ru:'ru-RU'};
const rows={
 meetingAlt:['Illustrative commercial meeting — not the CROSSMER team','Nümunə kommersiya görüşü — CROSSMER komandası deyil','Temsili Ticari Görüşme — CROSSMER Ekibi Değildir','Иллюстративная деловая встреча — не команда CROSSMER'],
 seaAlt:['Container ship at sea — illustrative international trade photography','Dənizdə konteyner gəmisi — beynəlxalq ticarəti təsvir edən foto','Denizde Konteyner Gemisi — Uluslararası Ticareti Temsil Eden Fotoğraf','Контейнеровоз в море — иллюстрация международной торговли'],
 rawAlt:['Metal raw materials — illustrative close-up of recyclable metal strips','Metal xammalı — təkrar emal edilə bilən metal lentlərin nümunə fotosu','Metal Hammaddeler — Geri Dönüştürülebilir Metal Şeritlerin Temsili Fotoğrafı','Металлическое сырьё — иллюстративное фото металлических полос для переработки'],
 photoLicense:['Pexels License','Pexels lisenziyası','Pexels Lisansı','Лицензия Pexels'],
 allMaterials:['Materials & Sourcing','Materiallar və təchizat','Malzemeler ve Tedarik','Материалы и поставки'],
 materialTitle:['Your requirements. The right material.','Tələbinizə uyğun material.','İhtiyacınıza Uygun Malzeme.','Материал под ваши требования.'],
 materialNote:['Material categories for sourcing enquiries, not a statement of available stock. Specifications, origin, quantity and commercial terms are confirmed for each enquiry.','Təchizat sorğuları üçün məhsul növləri; mövcud stok göstəricisi deyil. Spesifikasiya, mənşə, miqdar və kommersiya şərtləri hər sorğu üzrə təsdiqlənir.','Tedarik talepleri için malzeme türleri; mevcut stok beyanı değildir. Spesifikasyon, menşe, miktar ve ticari koşullar her talepte teyit edilir.','Категории продукции для запросов на поставку, а не сведения о наличии на складе. Спецификации, происхождение, объём и коммерческие условия подтверждаются по каждому запросу.'],
 variants:['Separate source variants matrix','Ayrıca mənbə variantları cədvəli','Ayrı Kaynak Varyant Tablosu','Отдельная таблица вариантов источника'],
 nav:[['Home','About Us','Our Expertise','Contact Us'],['Ana səhifə','Haqqımızda','Fəaliyyət istiqamətlərimiz','Əlaqə'],['Ana Sayfa','Hakkımızda','Uzmanlık Alanlarımız','İletişim'],['Главная','О нас','Направления работы','Контакты']],
 tagline:['INTERNATIONAL TRADE','BEYNƏLXALQ TİCARƏT','ULUSLARARASI TİCARET','МЕЖДУНАРОДНАЯ ТОРГОВЛЯ'],
 location:['Baku, Azerbaijan','Bakı, Azərbaycan','Bakü, Azerbaycan','Баку, Азербайджан'],
 heroTitle:[['Connecting Markets.','Building Global Partnerships.'],['Bazarları birləşdiririk.','Beynəlxalq tərəfdaşlıqlar qururuq.'],['Pazarları Birleştiriyoruz.','Küresel Ortaklıklar Kuruyoruz.'],['Соединяем рынки.','Создаём международные партнёрства.']],
 heroText:['An Azerbaijan-based international trading company connecting manufacturers, suppliers, and buyers across global markets.','Azərbaycanda fəaliyyət göstərən beynəlxalq ticarət şirkəti olaraq istehsalçıları, təchizatçıları və alıcıları qlobal bazarlarda birləşdiririk.','Azerbaycan merkezli uluslararası bir ticaret şirketi olarak üreticileri, tedarikçileri ve alıcıları küresel pazarlarda bir araya getiriyoruz.','Международная торговая компания из Азербайджана, объединяющая производителей, поставщиков и покупателей на мировых рынках.'],
 explore:['Explore Our Expertise','İstiqamətlərimizi kəşf edin','Uzmanlık Alanlarımızı Keşfedin','Наши направления работы'],
 contact:['Contact Our Team','Komandamızla əlaqə saxlayın','Ekibimizle İletişime Geçin','Связаться с командой'],
 scroll:['Discover CROSSMER','crossmer-i tanıyın','CROSSMER’i Tanıyın','Откройте CROSSMER'],
 baseLabel:['BASED IN AZERBAIJAN. CONNECTED BY TRADE.','AZƏRBAYCANDAN BEYNƏLXALQ TİCARƏTƏ.','AZERBAYCAN’DAN ULUSLARARASI TİCARETE.','ИЗ АЗЕРБАЙДЖАНА — К МЕЖДУНАРОДНОЙ ТОРГОВЛЕ.'],
 introLabel:['OUR COMPANY','ŞİRKƏTİMİZ','ŞİRKETİMİZ','НАША КОМПАНИЯ'],
 introTitle:['Your Trusted Partner in International Trade.','Beynəlxalq ticarətdə etibarlı iş tərəfdaşınız.','Uluslararası Ticarette Güvenilir İş Ortağınız.','Ваш надёжный партнёр в международной торговле.'],
 introText:['We bring manufacturers, suppliers and buyers together around a clear commercial purpose. From raw materials and industrial products to market cooperation, we shape each relationship around the needs of our partners.','İstehsalçıları, təchizatçıları və alıcıları aydın kommersiya məqsədi ətrafında birləşdiririk. Xammal və sənaye məhsullarından bazar əməkdaşlığına qədər hər əlaqəni tərəfdaşlarımızın ehtiyaclarına uyğun qururuq.','Üreticileri, tedarikçileri ve alıcıları ortak bir ticari amaç etrafında buluşturuyoruz. Hammaddeler ve sanayi ürünlerinden pazarlardaki iş birliklerine kadar her ilişkiyi ortaklarımızın ihtiyaçlarına göre şekillendiriyoruz.','Мы объединяем производителей, поставщиков и покупателей вокруг конкретных коммерческих задач. От сырья и промышленной продукции до сотрудничества на новых рынках — каждая связь строится с учётом потребностей партнёров.'],
 readAbout:['More About CROSSMER','CROSSMER haqqında daha çox','CROSSMER Hakkında Daha Fazla','Подробнее о CROSSMER'],
 expertiseTitle:['Expertise that connects opportunity with business.','İmkanları real əməkdaşlığa çevirən fəaliyyət.','Fırsatları İş Birliğine Dönüştüren Uzmanlık.','От возможностей — к деловому сотрудничеству.'],
 expertiseText:['Focused capabilities across trade, sourcing and commercial cooperation. Each enquiry begins with your product, market and business requirements.','Ticarət, təchizat və kommersiya əməkdaşlığı üzrə konkret istiqamətlər. Hər sorğu məhsul, bazar və biznes tələblərinizdən başlayır.','Ticaret, tedarik ve ticari iş birliğine odaklanan yetkinlikler. Her talep, ürün, pazar ve iş gereksinimlerinizle başlar.','Торговля, поиск поставщиков и коммерческое сотрудничество. Каждый запрос начинается с ваших требований к продукции, рынку и условиям работы.'],
 expertiseIntro:['WHAT WE DO','NƏ EDİRİK','NE YAPIYORUZ','ЧЕМ МЫ ЗАНИМАЕМСЯ'],
 allExpertise:['View Our Expertise','Bütün istiqamətlərə baxın','Tüm Uzmanlık Alanları','Все направления работы'],
 learn:['Explore this expertise','Bu istiqaməti araşdırın','Bu Alanı İnceleyin','Подробнее о направлении'],
 productInfo:['Request Product Information','Məhsul məlumatı istəyin','Ürün Bilgisi Talep Edin','Запросить сведения о продукции'],
 partnership:['Discuss Partnership','Tərəfdaşlığı müzakirə edin','Ortaklığı Görüşelim','Обсудить партнёрство'],
 globalLabel:['COMMERCIAL COOPERATION','KOMMERSİYA ƏMƏKDAŞLIĞI','TİCARİ İŞ BİRLİĞİ','КОММЕРЧЕСКОЕ СОТРУДНИЧЕСТВО'],
 globalTitle:['Local understanding.\nInternational perspective.','Yerli anlayış.\nBeynəlxalq baxış.','Yerel Bilgi.\nUluslararası Bakış.','Понимание местного рынка.\nМеждународный взгляд.'],
 globalText:['New markets begin with the right relationships. We support commercial introductions, supplier research and agreed negotiations, working within the authority and terms defined with each partner.','Yeni bazarlara doğru əlaqələrlə çıxılır. Hər tərəfdaşla müəyyənləşdirilən səlahiyyət və şərtlər çərçivəsində kommersiya əlaqələrinin qurulmasına, təchizatçıların araşdırılmasına və razılaşdırılmış danışıqlara dəstək göstəririk.','Yeni pazarlara doğru ilişkilerle açılınır. Her ortakla belirlenen yetki ve koşullar çerçevesinde ticari bağlantıların kurulmasını, tedarikçi araştırmasını ve mutabık kalınan görüşmeleri destekliyoruz.','Выход на новые рынки начинается с правильных связей. Мы содействуем установлению деловых контактов, поиску поставщиков и согласованным переговорам в рамках полномочий и условий, определённых с каждым партнёром.'],
 process:[['Understand your requirements','Identify the right opportunities','Coordinate the agreed process'],['Tələblərinizi aydınlaşdırırıq','Uyğun imkanları müəyyənləşdiririk','Razılaşdırılmış prosesi əlaqələndiririk'],['İhtiyaçlarınızı Anlıyoruz','Uygun Fırsatları Belirliyoruz','Mutabık Kalınan Süreci Koordine Ediyoruz'],['Уточняем ваши требования','Находим подходящие возможности','Координируем согласованный процесс']],
 ctaTitle:['Explore New Opportunities with CROSSMER.','CROSSMER ilə yeni imkanlar kəşf edin.','CROSSMER ile Yeni Fırsatları Keşfedin.','Откройте новые возможности с CROSSMER.'],
 ctaText:['A sourcing requirement, a new market or a potential partnership. Let’s start a conversation.','Təchizat ehtiyacı, yeni bazar və ya potensial tərəfdaşlıq. Gəlin əməkdaşlığı müzakirə edək.','Bir tedarik ihtiyacı, yeni bir pazar veya olası bir ortaklık. Birlikte değerlendirelim.','Потребность в продукции, новый рынок или возможное партнёрство. Давайте обсудим сотрудничество.'],
 footerText:['CROSSMER is an Azerbaijan-based international trading company focused on cross-border commercial cooperation, sourcing, import-activities, and industrial commodities.','CROSSMER Azərbaycanda fəaliyyət göstərən, beynəlxalq kommersiya əməkdaşlığı, təchizat, idxal-ixrac və sənaye məhsullarının ticarətinə fokuslanan şirkətdir.','CROSSMER, uluslararası ticari iş birliği, tedarik, ithalat-ihracat ve sanayi emtiaları ticaretine odaklanan Azerbaycan merkezli bir şirkettir.','CROSSMER — международная торговая компания из Азербайджана, специализирующаяся на коммерческом сотрудничестве, поиске поставщиков, импорте, экспорте и промышленной продукции.'],
 privacy:['Privacy','Məxfilik','Gizlilik','Конфиденциальность'],
 credits:['Photography','Foto mənbələri','Fotoğraf Kaynakları','Источники фотографий'],
 rights:['All rights reserved.','Bütün hüquqlar qorunur.','Tüm hakları saklıdır.','Все права защищены.'],
 menu:['Open menu','Menyunu aç','Menüyü Aç','Открыть меню'],
 close:['Close menu','Menyunu bağla','Menüyü Kapat','Закрыть меню'],
 language:['Select language','Dil seçin','Dil Seçin','Выберите язык'],
 skip:['Skip to content','Məzmuna keç','İçeriğe Geç','Перейти к содержимому'],
 backExpertise:['Back to Our Expertise','İstiqamətlərə qayıt','Uzmanlık Alanlarına Dön','К направлениям работы'],
 photoNote:['Sector photography; not crossmer-owned facilities.','Sahə üzrə foto; crossmer-ə məxsus obyekt deyil.','Sektörel fotoğraf; CROSSMER’e ait bir tesis değildir.','Отраслевая фотография; объект не принадлежит CROSSMER.'],
 contactTitle:["Let’s Build Business Across Borders.",'Birlikdə sərhədləri aşan biznes quraq.','Sınırları Aşan İş Birlikleri Kuralım.','Давайте развивать бизнес без границ.'],
 contactText:['Looking for a reliable trading partner, sourcing opportunities, or international commercial cooperation? Connect with CROSSMER to discuss your requirements.','Etibarlı ticarət tərəfdaşı, təchizat imkanları və ya beynəlxalq kommersiya əməkdaşlığı axtarırsınız? Tələblərinizi CROSSMER ilə müzakirə edin.','Güvenilir bir ticaret ortağı, tedarik fırsatları veya uluslararası ticari iş birliği mi arıyorsunuz? İhtiyaçlarınızı CROSSMER ile görüşün.','Ищете надёжного торгового партнёра, возможности поставок или международного коммерческого сотрудничества? Обсудите ваши задачи с CROSSMER.'],
 formTitle:['Tell us what you need.','Tələblərinizi bizə bildirin.','İhtiyacınızı Bize Bildirin.','Расскажите о вашей задаче.'],
 labels:[['Full Name','Company Name','Business Email','Country','Inquiry Type','Product / Material','Message / Requirements'],['Ad və soyad','Şirkət adı','İş e-poçtu','Ölkə','Müraciət növü','Məhsul / Material','Mesaj / Tələblər'],['Ad Soyad','Şirket Adı','İş E-postası','Ülke','Talep Türü','Ürün / Malzeme','Mesaj / Gereksinimler'],['Имя и фамилия','Название компании','Рабочая электронная почта','Страна','Тип обращения','Продукция / Материал','Сообщение / Требования']],
 types:[['Product Inquiry','Import / Export Cooperation','Supplier Partnership','Distribution / Representation','General Inquiry'],['Məhsul sorğusu','İdxal / İxrac əməkdaşlığı','Təchizatçı tərəfdaşlığı','Distribyutorluq / Nümayəndəlik','Ümumi müraciət'],['Ürün Talebi','İthalat / İhracat İş Birliği','Tedarikçi Ortaklığı','Distribütörlük / Temsilcilik','Genel Talep'],['Запрос продукции','Сотрудничество по импорту / экспорту','Партнёрство с поставщиком','Дистрибуция / Представительство','Общий вопрос']],
 placeholders:[['Your full name','Your company','name@company.com','Search for a country','Select inquiry type','For example, silicomanganese','Please describe your product, quantity, destination and any requirements.'],['Adınız və soyadınız','Şirkətinizin adı','ad@sirket.com','Ölkə axtarın','Müraciət növünü seçin','Məsələn, silikomanqan','Məhsulu, miqdarı, təyinatı və tələblərinizi təsvir edin.'],['Adınız ve soyadınız','Şirketinizin adı','ad@sirket.com','Ülke arayın','Talep türünü seçin','Örneğin, silikomangan','Ürün, miktar, varış noktası ve diğer gereksinimlerinizi açıklayın.'],['Ваше имя и фамилия','Ваша компания','name@company.com','Найти страну','Выберите тип обращения','Например, силикомарганец','Укажите продукцию, количество, пункт назначения и ваши требования.']],
 requiredNote:['* Required fields','* Məcburi sahələr','* Zorunlu alanlar','* Обязательные поля'],
 optional:['optional','istəyə bağlı','isteğe bağlı','необязательно'],
 consent:['I have read the privacy notice and agree to the processing of my inquiry.','Məxfilik bildirişini oxudum və müraciətimin emalına razıyam.','Gizlilik bildirimini okudum ve talebimin işlenmesini kabul ediyorum.','Я ознакомился(-ась) с уведомлением о конфиденциальности и согласен(-на) на обработку обращения.'],
 send:['Send Inquiry','Sorğunu göndər','Talebi Gönder','Отправить запрос'],
 sending:['Sending…','Göndərilir…','Gönderiliyor…','Отправка…'],
 sent:['Your inquiry has been received. Thank you for contacting CROSSMER.','Sorğunuz qəbul edildi. CROSSMER ilə əlaqə saxladığınız üçün təşəkkür edirik.','Talebiniz alındı. CROSSMER ile iletişime geçtiğiniz için teşekkür ederiz.','Ваш запрос принят. Благодарим за обращение в CROSSMER.'],
 unavailable:['Online inquiry delivery is not active yet. You can prepare and download your inquiry; it will not be sent to CROSSMER.','Onlayn sorğu göndərişi hələ aktiv deyil. Sorğunuzu hazırlayıb yükləyə bilərsiniz; crossmer-ə göndərilməyəcək.','Çevrim içi talep gönderimi henüz etkin değil. Talebinizi hazırlayıp indirebilirsiniz; CROSSMER’e gönderilmeyecektir.','Отправка запросов через сайт пока не подключена. Вы можете подготовить и скачать запрос; он не будет отправлен в CROSSMER.'],
 download:['Download Inquiry','Sorğunu yüklə','Talebi İndir','Скачать запрос'],
 downloaded:['Inquiry downloaded to your device. It has not been sent.','Sorğu cihazınıza yükləndi. Göndərilməyib.','Talep cihazınıza indirildi. Gönderilmedi.','Запрос скачан на ваше устройство. Он не отправлен.'],
 required:['Please complete this field.','Bu sahəni doldurun.','Lütfen bu alanı doldurun.','Заполните это поле.'],
 invalidEmail:['Enter a valid business email address.','Düzgün iş e-poçtu ünvanı daxil edin.','Geçerli bir iş e-postası adresi girin.','Введите корректный рабочий адрес электронной почты.'],
 invalidCountry:['Select a country from the suggestions, or leave the field empty.','Siyahıdan ölkə seçin və ya sahəni boş saxlayın.','Önerilerden bir ülke seçin veya alanı boş bırakın.','Выберите страну из списка или оставьте поле пустым.'],
 minMessage:['Please include at least 20 characters about your requirements.','Tələbləriniz haqqında ən azı 20 simvol yazın.','Gereksinimleriniz hakkında en az 20 karakter yazın.','Опишите ваши требования: не менее 20 символов.'],
 consentError:['Please confirm that you have read the privacy notice.','Məxfilik bildirişini oxuduğunuzu təsdiqləyin.','Gizlilik bildirimini okuduğunuzu onaylayın.','Подтвердите ознакомление с уведомлением о конфиденциальности.'],
 failure:['Your inquiry could not be delivered. Your entries have been kept; please try again.','Sorğunuz çatdırıla bilmədi. Məlumatlarınız saxlanılıb; yenidən cəhd edin.','Talebiniz iletilemedi. Girdiğiniz bilgiler korunmuştur; lütfen yeniden deneyin.','Не удалось доставить запрос. Введённые данные сохранены; попробуйте ещё раз.'],
 downloadFailure:['The download could not be created. Please try again; your entries are still here.','Yükləmə faylı yaradıla bilmədi. Yenidən cəhd edin; məlumatlarınız buradadır.','İndirme dosyası oluşturulamadı. Lütfen yeniden deneyin; bilgileriniz korunuyor.','Не удалось создать файл. Попробуйте ещё раз; введённые данные сохранены.'],
 reviewErrors:['Please check the highlighted fields.','İşarələnmiş sahələri yoxlayın.','İşaretli alanları kontrol edin.','Проверьте отмеченные поля.'],
 privacyTitle:['Your inquiry. Your information.','Müraciətiniz və məlumatlarınız.','Talebiniz ve Bilgileriniz.','Ваш запрос и ваши данные.'],
 privacyBody:['The inquiry form currently prepares a text file on your device. It does not send your contact details to CROSSMER, store them in browser storage or subscribe you to marketing. Form entries stay in memory while you navigate or change language and are cleared when you refresh or close this tab. Downloaded files remain on your device until you delete them. When inquiry delivery is enabled, this notice must be updated with the responsible company contact, processing purposes, retention period and your rights. The website remembers only your selected language in browser storage. Hosting access may be processed by the hosting provider under its own terms.','Hazırda müraciət forması cihazınızda mətn faylı hazırlayır. Əlaqə məlumatlarınızı crossmer-ə göndərmir, brauzer yaddaşında saxlamır və sizi marketinq abunəliyinə əlavə etmir. Naviqasiya və dil dəyişməsi zamanı daxil etdiyiniz məlumatlar operativ yaddaşda qalır; səhifəni yeniləyəndə və ya bu vərəqi bağlayanda silinir. Yüklənmiş fayllar siz silənədək cihazınızda qalır. Sorğu göndərişi aktivləşdiriləndə bu bildiriş məsul şirkətin əlaqəsi, emal məqsədləri, saxlanma müddəti və hüquqlarınızla yenilənməlidir. Sayt brauzer yaddaşında yalnız seçdiyiniz dili saxlayır. Hostinqə giriş məlumatları xidmət təminatçısının öz şərtlərinə uyğun emal edilə bilər.','Talep formu şu anda cihazınızda bir metin dosyası hazırlar. İletişim bilgilerinizi CROSSMER’e göndermez, tarayıcı depolamasına kaydetmez ve sizi pazarlama listelerine eklemez. Sayfalar arasında gezinirken veya dil değiştirirken bilgileriniz bellekte tutulur; sekmeyi yenilediğinizde ya da kapattığınızda silinir. İndirilen dosyalar, siz silene kadar cihazınızda kalır. Talep gönderimi etkinleştirildiğinde bu bildirim; sorumlu şirketin iletişim bilgileri, işleme amaçları, saklama süresi ve haklarınızla güncellenmelidir. Site, tarayıcı depolamasında yalnızca seçtiğiniz dili hatırlar. Barındırma erişim bilgileri hizmet sağlayıcının kendi koşullarına göre işlenebilir.','Сейчас форма создаёт текстовый файл на вашем устройстве. Она не отправляет контактные данные в CROSSMER, не сохраняет их в хранилище браузера и не подписывает вас на рекламу. При переходе между страницами или смене языка данные остаются в оперативной памяти; при обновлении или закрытии вкладки они удаляются. Скачанные файлы остаются на устройстве до их удаления вами. Перед подключением отправки запросов уведомление должно быть дополнено контактами ответственной компании, целями обработки, сроками хранения и описанием ваших прав. Сайт сохраняет в браузере только выбранный язык. Данные доступа к хостингу могут обрабатываться провайдером по его собственным условиям.'],
 materials:['MATERIAL FOCUS','MƏHSUL FOKUSU','ÜRÜN ODAĞI','ПРОДУКЦИЯ В ФОКУСЕ'],
 simn:['Silicomanganese','Silikomanqan','Silikomangan','Силикомарганец'],
 simnText:['A manganese-silicon ferroalloy used in steelmaking. View the supplied technical information and discuss your sourcing requirements.','Polad istehsalında istifadə olunan manqan-silisium ferroərintisi. Təqdim edilmiş texniki məlumatlara baxın və təchizat tələblərinizi bildirin.','Çelik üretiminde kullanılan mangan-silisyum ferroalaşımı. Sağlanan teknik bilgileri inceleyin ve tedarik gereksinimlerinizi paylaşın.','Марганцево-кремниевый ферросплав для производства стали. Изучите предоставленные технические сведения и обсудите потребности в поставках.'],
 viewProduct:['Explore Silicomanganese','Silikomanqanı araşdırın','Silikomanganı İnceleyin','Подробнее о силикомарганце'],
 technical:['Supplied Technical Information','Təqdim edilmiş texniki məlumatlar','Sağlanan Teknik Bilgiler','Предоставленные технические сведения'],
 range:['Composition range','Tərkib aralığı','Bileşim aralığı','Диапазон состава'],
 parameter:['Parameter','Parametr','Parametre','Показатель'],
 source:['Source documents','Mənbə sənədləri','Kaynak Belgeler','Исходные документы'],
 supplied:['Supplied product photograph','Təqdim edilmiş məhsul fotosu','Sağlanan Ürün Fotoğrafı','Предоставленное фото продукции'],
 chemistryNote:['Preliminary information from supplied documents, not a batch COA or guaranteed specification. C and S limit types are unspecified; P is not supplied. Final chemistry, availability, origin, packing weight and order quantity require supplier confirmation.','Təqdim edilmiş sənədlərdən ilkin məlumatdır; partiya COA-sı və ya zəmanətli spesifikasiya deyil. C və S hədlərinin tipi göstərilməyib; P təqdim edilməyib. Son tərkib, mövcudluq, mənşə, qablaşdırma çəkisi və sifariş miqdarı təchizatçı ilə təsdiqlənməlidir.','Sağlanan belgelerdeki ön bilgilerdir; parti COA’sı veya garantili spesifikasyon değildir. C ve S sınır türleri belirtilmemiştir; P bilgisi sağlanmamıştır. Nihai bileşim, stok durumu, menşe, ambalaj ağırlığı ve sipariş miktarı tedarikçiyle teyit edilmelidir.','Предварительные сведения из предоставленных документов, а не COA партии или гарантированная спецификация. Типы пределов C и S не указаны; данных по P нет. Окончательный состав, наличие, происхождение, масса упаковки и объём заказа требуют подтверждения поставщика.'],
 packing:['Packing','Qablaşdırma','Ambalaj','Упаковка'],
 size:['Particle size','Fraksiya','Tane Boyutu','Фракция'],
 sizeNote:['10–80 mm in the lower source section; the upper 0–10 mm note needs clarification.','Mənbənin aşağı hissəsində 10–80 mm; yuxarıdakı 0–10 mm qeydi dəqiqləşdirilməlidir.','Kaynağın alt bölümünde 10–80 mm; üstteki 0–10 mm notu açıklığa kavuşturulmalıdır.','В нижней части источника: 10–80 мм; примечание 0–10 мм вверху требует уточнения.'],
 reference:['Reference in source','Mənbədə istinad','Kaynakta Atıf','Ссылка в источнике'],
 standardsNote:['The supplied image references GOST 4756-91 (ISO 5447-80). This does not establish verified compliance. Required standards and batch documents must be agreed in the commercial specification.','Təqdim edilmiş şəkil GOST 4756-91 (ISO 5447-80) standartına istinad edir. Bu, yoxlanılmış uyğunluq təsdiqi deyil. Tələb olunan standartlar və partiya sənədləri kommersiya spesifikasiyasında razılaşdırılmalıdır.','Sağlanan görsel GOST 4756-91 (ISO 5447-80) standardına atıfta bulunur. Bu, doğrulanmış uygunluk anlamına gelmez. Gerekli standartlar ve parti belgeleri ticari spesifikasyonda kararlaştırılmalıdır.','В предоставленном изображении указан ГОСТ 4756-91 (ISO 5447-80). Это не подтверждает проверенное соответствие. Требуемые стандарты и документы партии должны быть согласованы в коммерческой спецификации.'],
 notFound:['Page not found','Səhifə tapılmadı','Sayfa Bulunamadı','Страница не найдена'],
 heroAlt:['Baku skyline and Flame Towers in daylight','Gündüz vaxtı Bakı panoraması və Alov qüllələri','Gündüz Bakü Panoraması ve Alev Kuleleri','Дневная панорама Баку и Пламенные башни'],
 portAlt:['Container terminal and cargo shipping','Konteyner terminalı və yük daşımaları','Konteyner Terminali ve Yük Taşımacılığı','Контейнерный терминал и грузовые перевозки'],
 steelAlt:['Reinforcing steel bars for construction','Tikinti üçün polad armatur','İnşaat için Donatı Çeliği','Стальная арматура для строительства'],
 prepare:['Prepare Your Inquiry','Sorğunuzu hazırlayın','Talebinizi Hazırlayın','Подготовьте запрос'],
 steelName:['Steel & construction materials','Polad və tikinti materialları','Çelik ve İnşaat Malzemeleri','Сталь и строительные материалы'],
 navLabel:['Main navigation','Əsas menyu','Ana Menü','Основная навигация'],
 creditsTitle:['Photography & Sources','Fotoşəkillər və mənbələr','Fotoğraflar ve Kaynaklar','Фотографии и источники'],
 creditsBody:['Baku and industry photographs are contextual illustrations. They do not depict CROSSMER offices, owned infrastructure or completed transactions. Product documents and the silicomanganese photograph were supplied by the company.','Bakı və sənaye fotoları məzmunu izah edir. CROSSMER ofislərini, şirkətə məxsus infrastrukturu və ya başa çatmış əməliyyatları göstərmir. Məhsul sənədləri və silikomanqan fotosu şirkət tərəfindən təqdim edilib.','Bakü ve sanayi fotoğrafları bağlamı açıklamak için kullanılmıştır. CROSSMER ofislerini, şirkete ait altyapıyı veya tamamlanmış işlemleri göstermez. Ürün belgeleri ve silikomangan fotoğrafı şirket tarafından sağlanmıştır.','Фотографии Баку и промышленных объектов иллюстрируют контекст. Они не изображают офисы, собственную инфраструктуру CROSSMER или завершённые сделки. Документы и фото силикомарганца предоставлены компанией.']
};
const copy=Object.fromEntries(languages.map((l,i)=>[l,Object.fromEntries(Object.entries(rows).map(([k,v])=>[k,v[i]]))]));
const expertiseIds=['import-export','raw-materials','industrial-materials','representation','logistics'];
const services={
 en:[['International Import & Export','Cross-border trading, commercial sourcing and connecting suppliers with buyers across international markets.','Discuss your product, target market and commercial requirements. We evaluate sourcing and trade opportunities around the agreed scope.'],['Raw Materials & Metallurgical Products','International trade and sourcing of raw materials, ferroalloys, metallurgy-related products and industrial commodities.','Product specifications, required documents and supply conditions form the starting point for every material enquiry.'],['Industrial & Construction Materials','Sourcing and commercial supply of industrial products, construction materials and related commodities.','From steel materials to other industrial requirements, we assess suitable suppliers and commercial terms for your project.'],['Commercial Representation & Partnerships','Supporting commercial relationships, prospective partner identification and opportunities in international markets.','By agreement and within the appropriate authority, we can support introductions, commercial negotiations and the coordination of agreed business processes.'],['Supply Chain & Logistics Coordination','Supporting sourcing and coordinating logistics-related processes with relevant service providers and contractual partners.','We help explore transport options and follow shipment progress together with the relevant logistics providers.']],
 az:[['Beynəlxalq idxal və ixrac','Beynəlxalq bazarlarda ticarət, kommersiya təchizatı və təchizatçılarla alıcıların əlaqələndirilməsi.','Məhsulunuzu, hədəf bazarınızı və kommersiya tələblərinizi müzakirə edin. Təchizat və ticarət imkanlarını razılaşdırılmış iş çərçivəsində qiymətləndiririk.'],['Xammal və metallurgiya məhsulları','Xammal, ferroərintilər, metallurgiya məhsulları və sənaye əmtəələrinin beynəlxalq ticarəti və təchizatı.','Məhsul spesifikasiyaları, tələb olunan sənədlər və təchizat şərtləri hər material sorğusunun başlanğıc nöqtəsidir.'],['Sənaye və tikinti materialları','Sənaye məhsullarının, tikinti materiallarının və əlaqəli əmtəələrin araşdırılması və kommersiya təchizatı.','Polad materiallardan digər sənaye ehtiyaclarına qədər layihəniz üçün uyğun təchizatçıları və kommersiya şərtlərini qiymətləndiririk.'],['Kommersiya nümayəndəliyi və tərəfdaşlıqlar','Kommersiya əlaqələrinin qurulması, potensial tərəfdaşların müəyyən edilməsi və beynəlxalq bazarlarda imkanların araşdırılması.','Qarşılıqlı razılaşma və müvafiq səlahiyyətlər çərçivəsində əlaqələrin qurulmasına, kommersiya danışıqlarına və razılaşdırılmış iş proseslərinin əlaqələndirilməsinə dəstək göstərə bilərik.'],['Təchizat zənciri və logistika koordinasiyası','Müvafiq xidmət təminatçıları və müqaviləli tərəfdaşlarla təchizat və logistika proseslərinin əlaqələndirilməsinə dəstək.','Müvafiq logistika təminatçıları ilə birgə daşınma variantlarının araşdırılmasına və göndərişlərin gedişinin izlənilməsinə kömək edirik.']],
 tr:[['Uluslararası İthalat ve İhracat','Uluslararası pazarlarda ticaret, ticari tedarik ve tedarikçilerle alıcıların buluşturulması.','Ürününüzü, hedef pazarınızı ve ticari gereksinimlerinizi paylaşın. Tedarik ve ticaret fırsatlarını mutabık kalınan kapsamda değerlendiriyoruz.'],['Hammaddeler ve Metalurji Ürünleri','Hammaddeler, ferroalaşımlar, metalurji ürünleri ve sanayi emtialarının uluslararası ticareti ve tedariki.','Ürün spesifikasyonları, gerekli belgeler ve tedarik koşulları her malzeme talebinin başlangıç noktasıdır.'],['Sanayi ve İnşaat Malzemeleri','Sanayi ürünleri, inşaat malzemeleri ve ilgili emtiaların araştırılması ve ticari tedariki.','Çelik malzemelerden diğer sanayi ihtiyaçlarına kadar projenize uygun tedarikçileri ve ticari koşulları değerlendiriyoruz.'],['Ticari Temsilcilik ve Ortaklıklar','Ticari ilişkilerin kurulması, potansiyel ortakların belirlenmesi ve uluslararası pazarlardaki fırsatların araştırılması.','Karşılıklı mutabakat ve uygun yetkiler çerçevesinde bağlantıların kurulmasını, ticari görüşmeleri ve kararlaştırılan iş süreçlerinin koordinasyonunu destekleyebiliriz.'],['Tedarik Zinciri ve Lojistik Koordinasyonu','İlgili hizmet sağlayıcılar ve sözleşmeli ortaklarla tedarik ve lojistik süreçlerinin koordinasyonuna destek.','İlgili lojistik sağlayıcılarla birlikte taşıma seçeneklerinin araştırılmasına ve sevkiyatların takibine yardımcı oluyoruz.']],
 ru:[['Международный импорт и экспорт','Международная торговля, поиск продукции и установление связей между поставщиками и покупателями на зарубежных рынках.','Обсудите продукцию, целевой рынок и коммерческие требования. Мы оцениваем возможности поставок и торговли в рамках согласованных задач.'],['Сырьё и металлургическая продукция','Международная торговля и поиск поставщиков сырья, ферросплавов, металлургической продукции и промышленных товаров.','Спецификации продукции, необходимые документы и условия поставки — отправная точка каждого запроса на материалы.'],['Промышленные и строительные материалы','Поиск и коммерческие поставки промышленной продукции, строительных материалов и сопутствующих товаров.','От стали до других промышленных потребностей — мы оцениваем подходящих поставщиков и коммерческие условия для вашего проекта.'],['Коммерческое представительство и партнёрства','Содействие установлению деловых связей, поиску потенциальных партнёров и изучению возможностей на международных рынках.','По взаимному соглашению и в рамках соответствующих полномочий мы можем помогать в установлении контактов, коммерческих переговорах и координации согласованных процессов.'],['Цепочки поставок и логистическая координация','Поддержка снабжения и координация логистических процессов с профильными поставщиками услуг и договорными партнёрами.','Совместно с профильными логистическими компаниями помогаем изучать варианты перевозки и отслеживать ход отправок.']]
};
const expertise=Object.fromEntries(languages.map(l=>[l,services[l].map((x,i)=>({id:expertiseIds[i],title:x[0],description:x[1],detail:x[2]}))]));

return {languages,locale,copy,expertiseIds,expertise};})();
modules["about-translations"]=(()=>{
const translations={
en:{title:'About Us',blocks:[
{title:'Your Trusted Business Partner in International Trade',paragraphs:[
'Our company operates in the development of international trade relationships between countries, the sourcing and supply of raw materials and industrial products, commercial cooperation and the development of business opportunities. Our aim is to bring manufacturers, suppliers and buyers together to create effective trade solutions tailored to their needs.',
'Our core activities include the international purchase, sale and supply of raw materials, industrial products, construction materials and a variety of commercial goods. Without limiting our activities to a particular product or market, we evaluate opportunities for cooperation across different sectors.']},
{title:'International Commercial Cooperation',paragraphs:[
'We work with companies seeking to operate in other countries, helping them establish commercial relationships in those markets. By mutual agreement and within the appropriate authority, we can contact local partners on behalf of companies, conduct commercial negotiations, research potential customers and suppliers, and coordinate agreed business processes.',
'This approach enables companies to enter new markets, gain a better understanding of the local business environment and develop their international cooperation.']},
{title:'Supply & Logistics Coordination',paragraphs:[
'Researching products that meet customer requirements, identifying suitable suppliers, and agreeing on prices and commercial terms form the core of our sourcing activities.',
'Where logistics support is required, we work with relevant service providers and contractual partners to help explore transport options, coordinate logistics processes and monitor shipment progress.']},
{title:'Distribution & Strategic Partnerships',paragraphs:[
'We are open to establishing long-term cooperation with manufacturers, suppliers and commercial companies, and to evaluating opportunities under distribution and representation agreements.',
'Our goal is to shape cooperation models aligned with the commercial interests of all parties, create new sales channels and contribute to the development of lasting business relationships across different markets.']},
{title:'Our Business Principles',paragraphs:[
'In all our partnerships, we prioritise honesty, transparency, responsibility and mutual benefit. We are committed to conducting our commercial activities in accordance with applicable legislation, relevant contractual terms and the international trade rules that apply.',
'For us, trust is built not only through promises, but through the responsible fulfilment of agreed commitments.']},
{title:'Our Vision',paragraphs:['To become a recognised international trading partner that connects companies across global markets, builds trusted commercial relationships and contributes to the development of trade between countries.']},
{title:'Our Mission',paragraphs:['To provide solutions tailored to our customers’ product, sourcing and international cooperation needs, facilitate their access to new markets, and be a professional, responsible and reliable partner in every collaboration.']}
],conclusion:'We build trusted connections and turn international trade opportunities into real cooperation.'},
tr:{title:'Hakkımızda',blocks:[
{title:'Uluslararası Ticarette Güvenilir İş Ortağınız',paragraphs:[
'Şirketimiz; farklı ülkeler arasında uluslararası ticaret ilişkilerinin kurulması, hammadde ve sanayi ürünlerinin tedariki, ticari iş birliği ve iş fırsatlarının geliştirilmesi alanlarında faaliyet göstermektedir. Amacımız; üreticileri, tedarikçileri ve alıcıları bir araya getirerek ihtiyaçlarına uygun, verimli ticaret çözümleri oluşturmaktır.',
'Başlıca faaliyet alanlarımız; hammaddelerin, sanayi ürünlerinin, inşaat malzemelerinin ve çeşitli ticari ürünlerin uluslararası alım satımı ve tedarikidir. Faaliyetlerimizi belirli bir ürün veya pazarla sınırlamadan farklı sektörlerdeki iş birliği fırsatlarını değerlendiriyoruz.']},
{title:'Uluslararası Ticari İş Birliği',paragraphs:[
'Farklı ülkelerde faaliyet göstermek isteyen şirketlerle iş birliği yaparak bu pazarlarda ticari ilişkiler kurmalarına yardımcı oluyoruz. Karşılıklı mutabakat ve uygun yetkiler çerçevesinde şirketler adına yerel ortaklarla iletişim kurabilir, ticari görüşmeleri yürütebilir, potansiyel müşterileri ve tedarikçileri araştırabilir ve kararlaştırılan iş süreçlerini koordine edebiliriz.',
'Bu yaklaşım, şirketlerin yeni pazarlara açılmasını, yerel iş ortamını daha iyi tanımasını ve uluslararası iş birliklerini geliştirmesini sağlar.']},
{title:'Tedarik ve Lojistik Koordinasyonu',paragraphs:[
'Müşteri gereksinimlerine uygun ürünlerin araştırılması, uygun tedarikçilerin belirlenmesi, fiyat ve ticari koşulların kararlaştırılması, tedarik faaliyetlerimizin temelini oluşturur.',
'Lojistik ihtiyacı doğduğunda ise ilgili hizmet sağlayıcılar ve sözleşmeli ortaklarla iş birliği yaparak taşıma seçeneklerinin araştırılmasını, lojistik süreçlerinin koordinasyonunu ve sevkiyatların takibini destekliyoruz.']},
{title:'Distribütörlük ve Stratejik Ortaklıklar',paragraphs:[
'Üreticiler, tedarikçiler ve ticari şirketlerle uzun vadeli iş birlikleri kurmaya, distribütörlük ve temsilcilik sözleşmeleri kapsamındaki fırsatları değerlendirmeye açığız.',
'Hedefimiz; tarafların ticari çıkarlarına uygun iş birliği modelleri oluşturmak, yeni satış kanalları yaratmak ve farklı pazarlarda sürdürülebilir iş ilişkilerinin gelişimine katkıda bulunmaktır.']},
{title:'İş İlkelerimiz',paragraphs:[
'Tüm iş birliklerimizde dürüstlük, şeffaflık, sorumluluk ve karşılıklı fayda ilkelerine öncelik veriyoruz. Ticari faaliyetlerimizi yürürlükteki mevzuata, ilgili sözleşme koşullarına ve geçerli uluslararası ticaret kurallarına uygun biçimde yürütmeyi esas alıyoruz.',
'Bizim için güven, yalnızca verilen sözlerle değil, kararlaştırılan yükümlülüklerin sorumlulukla yerine getirilmesiyle oluşur.']},
{title:'Vizyonumuz',paragraphs:['Uluslararası pazarlarda şirketleri birleştiren, güvenilir ticari ilişkiler kuran ve ülkeler arasındaki ticaretin gelişimine katkıda bulunan, tanınmış bir uluslararası ticaret ortağı olmak.']},
{title:'Misyonumuz',paragraphs:['Müşterilerimizin ürün, tedarik ve uluslararası iş birliği ihtiyaçlarına uygun çözümler sunmak, yeni pazarlara erişimlerini kolaylaştırmak ve her iş birliğinde profesyonel, sorumlu ve güvenilir bir ortak olmak.']}
],conclusion:'Güvenilir ilişkiler kuruyor, uluslararası ticaret fırsatlarını gerçek iş birliklerine dönüştürüyoruz.'},
ru:{title:'О нас',blocks:[
{title:'Ваш надёжный деловой партнёр в международной торговле',paragraphs:[
'Наша компания работает в сфере установления международных торговых связей между странами, поставок сырья и промышленной продукции, коммерческого сотрудничества и развития деловых возможностей. Наша цель — объединять производителей, поставщиков и покупателей, создавая эффективные торговые решения с учётом их потребностей.',
'Основные направления нашей деятельности включают международную куплю-продажу и поставки сырья, промышленной продукции, строительных материалов и различных коммерческих товаров. Не ограничиваясь конкретным продуктом или рынком, мы рассматриваем возможности сотрудничества в различных отраслях.']},
{title:'Международное коммерческое сотрудничество',paragraphs:[
'Мы сотрудничаем с компаниями, желающими работать в других странах, и помогаем им устанавливать коммерческие связи на этих рынках. По взаимному соглашению и в рамках соответствующих полномочий мы можем от имени компаний связываться с местными партнёрами, вести коммерческие переговоры, изучать потенциальных клиентов и поставщиков, а также координировать согласованные рабочие процессы.',
'Такой подход позволяет компаниям выходить на новые рынки, лучше понимать местную деловую среду и развивать международное сотрудничество.']},
{title:'Снабжение и логистическая координация',paragraphs:[
'Поиск продукции в соответствии с требованиями клиентов, определение подходящих поставщиков, согласование цен и коммерческих условий составляют основу нашей деятельности по снабжению.',
'При возникновении логистических потребностей мы сотрудничаем с соответствующими поставщиками услуг и договорными партнёрами, содействуя изучению вариантов перевозки, координации логистических процессов и отслеживанию хода отправок.']},
{title:'Дистрибуция и стратегические партнёрства',paragraphs:[
'Мы открыты к установлению долгосрочного сотрудничества с производителями, поставщиками и торговыми компаниями, а также к рассмотрению возможностей в рамках дистрибьюторских и представительских соглашений.',
'Наша цель — формировать модели сотрудничества, отвечающие коммерческим интересам сторон, создавать новые каналы продаж и содействовать развитию устойчивых деловых связей на различных рынках.']},
{title:'Наши принципы работы',paragraphs:[
'Во всех партнёрских отношениях мы отдаём приоритет честности, прозрачности, ответственности и взаимной выгоде. Мы основываем нашу коммерческую деятельность на соблюдении действующего законодательства, соответствующих договорных условий и применимых правил международной торговли.',
'Для нас доверие формируется не только благодаря обещаниям, но и благодаря ответственному выполнению согласованных обязательств.']},
{title:'Наше видение',paragraphs:['Стать признанным международным торговым партнёром, который объединяет компании на мировых рынках, создаёт надёжные коммерческие связи и способствует развитию торговли между странами.']},
{title:'Наша миссия',paragraphs:['Предлагать решения, соответствующие потребностям клиентов в продукции, снабжении и международном сотрудничестве, облегчать им доступ к новым рынкам и быть профессиональным, ответственным и надёжным партнёром в каждом совместном проекте.']}
],conclusion:'Мы создаём надёжные связи и превращаем возможности международной торговли в реальное сотрудничество.'}
};

return {translations};})();
modules["about-content"]=(()=>{
const {translations}=modules["about-translations"];
const about={...translations,az:{
  "title": "Haqqımızda",
  "blocks": [
    {
      "title": "Beynəlxalq Ticarətdə Etibarlı İş Tərəfdaşınız",
      "paragraphs": [
        "Şirkətimiz müxtəlif ölkələr arasında beynəlxalq ticarət əlaqələrinin qurulması, xammal və sənaye məhsullarının təchizatı, kommersiya əməkdaşlığı və biznes imkanlarının inkişafı sahəsində fəaliyyət göstərir. Məqsədimiz istehsalçıları, təchizatçıları və alıcıları bir araya gətirərək onların ehtiyaclarına uyğun səmərəli ticarət həlləri yaratmaqdır.",
        "Əsas fəaliyyət istiqamətlərimizə xammal, sənaye məhsulları, tikinti materialları və müxtəlif kommersiya məhsullarının beynəlxalq alqı-satqısı və təchizatı daxildir. Fəaliyyətimizi konkret məhsul və ya bazarla məhdudlaşdırmadan, müxtəlif sahələrdə əməkdaşlıq imkanlarını qiymətləndiririk."
      ]
    },
    {
      "title": "Beynəlxalq Kommersiya Əməkdaşlığı",
      "paragraphs": [
        "Fərqli ölkələrdə fəaliyyət göstərmək istəyən şirkətlərlə əməkdaşlıq edərək onların həmin bazarlarda kommersiya əlaqələri qurmasına kömək edirik. Qarşılıqlı razılaşma və müvafiq səlahiyyətlər çərçivəsində şirkətlərin adından yerli tərəfdaşlarla əlaqə saxlaya, kommersiya danışıqlarını apara, potensial müştəriləri və təchizatçıları araşdıra, razılaşdırılmış iş proseslərini əlaqələndirə bilərik.",
        "Bu yanaşma şirkətlərə yeni bazarlara çıxmaq, yerli biznes mühitini daha yaxşı tanımaq və beynəlxalq əməkdaşlıqlarını inkişaf etdirmək imkanı yaradır."
      ]
    },
    {
      "title": "Təchizat və Logistika Koordinasiyası",
      "paragraphs": [
        "Müştərilərin tələblərinə uyğun məhsulların araşdırılması, uyğun təchizatçıların müəyyənləşdirilməsi, qiymət və kommersiya şərtlərinin razılaşdırılması təchizat fəaliyyətimizin əsas hissəsini təşkil edir.",
        "Logistika ehtiyacı yarandıqda isə müvafiq xidmət təminatçıları və müqaviləli tərəfdaşlarla əməkdaşlıq edərək daşınma variantlarının araşdırılmasına, logistika proseslərinin əlaqələndirilməsinə və göndərişlərin gedişinin izlənilməsinə dəstək göstəririk."
      ]
    },
    {
      "title": "Distribyutorluq və Strateji Tərəfdaşlıqlar",
      "paragraphs": [
        "İstehsalçılar, təchizatçılar və kommersiya şirkətləri ilə uzunmüddətli əməkdaşlıq qurmağa, distribyutorluq və nümayəndəlik müqavilələri üzrə imkanları qiymətləndirməyə açığıq.",
        "Hədəfimiz tərəflərin kommersiya maraqlarına uyğun əməkdaşlıq modelləri formalaşdırmaq, yeni satış kanalları yaratmaq və müxtəlif bazarlarda davamlı biznes əlaqələrinin inkişafına töhfə verməkdir."
      ]
    },
    {
      "title": "İş Prinsiplərimiz",
      "paragraphs": [
        "Bütün əməkdaşlıqlarımızda dürüstlük, şəffaflıq, məsuliyyət və qarşılıqlı fayda prinsiplərinə üstünlük veririk. Kommersiya fəaliyyətlərimizi qüvvədə olan qanunvericiliyə, müvafiq müqavilə şərtlərinə və tətbiq olunan beynəlxalq ticarət qaydalarına uyğun şəkildə həyata keçirməyi əsas götürürük.",
        "Bizim üçün etibar yalnız verilən vədlərlə deyil, razılaşdırılmış öhdəliklərin məsuliyyətlə yerinə yetirilməsi ilə formalaşır."
      ]
    },
    {
      "title": "Vizyonumuz",
      "paragraphs": [
        "Beynəlxalq bazarlarda şirkətləri birləşdirən, etibarlı kommersiya əlaqələri yaradan və müxtəlif ölkələr arasında ticarətin inkişafına töhfə verən tanınmış beynəlxalq ticarət tərəfdaşına çevrilmək."
      ]
    },
    {
      "title": "Missiyamız",
      "paragraphs": [
        "Müştərilərimizin məhsul, təchizat və beynəlxalq əməkdaşlıq ehtiyaclarına uyğun həllər təqdim etmək, onların yeni bazarlara çıxışını asanlaşdırmaq və hər bir iş birliyində peşəkar, məsuliyyətli və etibarlı tərəfdaş olmaq."
      ]
    }
  ],
  "conclusion": "Etibarlı əlaqələr qurur, beynəlxalq ticarət imkanlarını real əməkdaşlığa çeviririk."
}};

return {about};})();
modules["inquiry"]=(()=>{
// No endpoint is configured. An accepted response must be explicitly {accepted:true}.
const inquiryConfig=Object.freeze({endpoint:null});
const inquiryTypes=['product','trade','supplier','distribution','general'];
const emptyInquiry=()=>({name:'',company:'',email:'',country:'',countryCode:'',type:'',product:'',message:'',consent:false,website:''});
function validateInquiry(v,t,countries=[]){
 const errors={};
 for(const k of ['name','company','email','type','message'])if(!String(v[k]||'').trim())errors[k]=t.required;
 if(v.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))errors.email=t.invalidEmail;
 if(!inquiryTypes.includes(v.type))errors.type=t.required;
 if(v.message&&v.message.trim().length<20)errors.message=t.minMessage;
 if(v.country&&!countries.some(c=>c.code===v.countryCode&&c.name===v.country))errors.country=t.invalidCountry;
 if(!v.consent)errors.consent=t.consentError;
 return errors;
}
async function deliverInquiry(v,config=inquiryConfig,request=fetch){
 if(!config.endpoint)return {accepted:false,unconfigured:true};
 if(v.website)return {accepted:false};
 const ctrl=new AbortController(),timer=setTimeout(()=>ctrl.abort(),20000);
 try{const response=await request(config.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(v),signal:ctrl.signal});
 const data=await response.json();return {accepted:response.ok&&data.accepted===true};
 }catch{return {accepted:false};}finally{clearTimeout(timer);}
}
function inquiryText(v,t){return ['CROSSMER',t.prepare,'',...['name','company','email','country','type','product','message'].map((k,i)=>`${t.labels[i]}: ${k==='type'?t.types[inquiryTypes.indexOf(v.type)]:v[k]||'—'}`),'',t.unavailable].join('\n');}

return {inquiryConfig,inquiryTypes,emptyInquiry,validateInquiry,deliverInquiry,inquiryText};})();
modules["photo-meta"]=(()=>{
const premiumPhotoDimensions={"global-shipping.webp": [2400, 1600], "sourcing-vessel.webp": [2400, 1600], "commercial-partners.webp": [2400, 1600]};

return {premiumPhotoDimensions};})();
modules["photo-credits"]=(()=>{
// Source pages checked before downloading. No generated photography is used.
const photoCredits=[
 {label:'heroAlt',author:'Zulfugar Karimov',source:'https://www.pexels.com/photo/baku-skyline-with-flame-towers-and-caspian-sea-38827645/'},
 {label:'seaAlt',author:'Alexander Bobrov',source:'https://www.pexels.com/photo/cargo-ship-at-the-ocean-during-day-3278012/'},
 {label:'seaAlt',author:'Martin Hungerbühler',source:'https://www.pexels.com/photo/container-ship-on-sea-20821680/'},
 {label:'meetingAlt',author:'Vitaly Gariev',source:'https://www.pexels.com/photo/professional-business-meeting-in-modern-office-36733407/'},
 {label:'portAlt',author:'Andrea Musto',source:'https://www.pexels.com/photo/a-port-with-shipping-containers-and-cranes-13025947/'},
 {label:'rawAlt',author:'Alex Tepetidis',source:'https://www.pexels.com/photo/close-up-photo-of-metal-scraps-5279344/'},
 {label:'steelAlt',author:'Serhii Barkanov',source:'https://www.pexels.com/photo/close-up-of-stacked-steel-rebars-in-sunlight-35598610/'},
 {label:'portAlt',author:'Jimmy Chan',source:'https://www.pexels.com/photo/cargo-containers-at-the-port-12999283/'}
];

return {photoCredits};})();
modules["trade-render"]=(()=>{
const {copy,languages,expertise}=modules["trade-content"];
const {about}=modules["about-content"];
const {inquiryConfig,inquiryTypes,emptyInquiry}=modules["inquiry"];
const {premiumPhotoDimensions}=modules["photo-meta"];
const {photoCredits}=modules["photo-credits"];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const routes=['','about','expertise','contact','materials','materials/silicomanganese','privacy','photography'];
const path=(lang,route='',query='')=>`/${lang}/${route?route.replace(/^\/+|\/+$/g,'')+'/':''}${query?'?'+query:''}`;
const arrow='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.5"/></svg>';
const jump='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18L18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5"/></svg>';
const btn=(text,url,style='primary')=>`<a class="button ${style}" href="${esc(url)}">${esc(text)}${arrow}</a>`;
const link=(text,url)=>`<a class="text-link" href="${esc(url)}">${esc(text)}${arrow}</a>`;
const eyebrow=s=>`<p class="eyebrow">${esc(s)}</p>`;
const photoDimensions={...premiumPhotoDimensions,'trade-port-hq.webp':[2400,1600],'about-shipping-hq.webp':[2400,3600],'logistics-port-hq.webp':[2400,1067],'construction-steel-hq.webp':[2400,1350],'baku-evening-hq.webp':[2400,3361],'raw-materials.webp':[2400,1600]};
const img=(file,alt,cls='',width=1500,height=1000)=>{const dims=photoDimensions[file];if(dims)[width,height]=dims;return `<img class="${cls}" src="/assets/${file}" alt="${esc(alt)}" width="${width}" height="${height}" loading="lazy" decoding="async">`;};
function languagePicker(l,route,query=''){const t=copy[l],names={en:'English',az:'Azərbaycanca',tr:'Türkçe',ru:'Русский'};return `<details class="language-picker"><summary aria-label="${esc(t.language)}: ${names[l]}"><span>${l.toUpperCase()}</span><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.4"/></svg></summary><div class="language-options">${languages.map(x=>`<a href="${path(x,route,query)}" lang="${x}" hreflang="${x}" data-language="${x}"${x===l?' aria-current="true"':''}><span>${names[x]}</span><small>${x.toUpperCase()}</small></a>`).join('')}</div></details>`;}
function brand(l){return `<a class="brand" href="${path(l)}" aria-label="CROSSMER — ${esc(copy[l].nav[0])}"><span class="brand-wordmark">CROSSMER</span><small class="brand-descriptor" lang="en">International Trade &amp; Partnerships</small></a>`;}
function header(l,route,query=''){
 const t=copy[l],main=['','about','expertise','contact'];
 return `<header class="site-header"><div class="container header-inner">${brand(l)}<nav id="main-nav" class="main-nav" aria-label="${esc(t.navLabel)}">${main.map((r,i)=>`<a href="${path(l,r)}"${route===r?' aria-current="page"':''}>${esc(t.nav[i])}</a>`).join('')}</nav><div class="header-end">${languagePicker(l,route,query)}<button type="button" class="menu-toggle" data-menu aria-controls="main-nav" aria-expanded="false" aria-label="${esc(t.menu)}"><span></span><span></span></button></div></div></header>`;
}
const socialIcons={
Instagram:'<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17.5" cy="6.5" r="1"/>',
LinkedIn:'<path d="M5.2 8.2H2.3V22h2.9zM3.75 2a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M9 8.2V22h3V14.3c0-2 1-3.2 2.7-3.2s2.3 1.1 2.3 3.2V22h3v-8.6c0-3.5-1.6-5.5-4.5-5.5-1.6 0-2.8.7-3.5 1.9V8.2z"/>',
};
const footerAddress={en:['Port Baku Tower 1','153 Neftchilar Avenue','Baku, Azerbaijan'],az:['Port Baku, 1-ci qüllə','Neftçilər prospekti 153','Bakı, Azərbaycan'],tr:['Port Baku, Kule 1','153 Neftçiler Caddesi','Bakü, Azerbaycan'],ru:['Port Baku, башня 1','проспект Нефтяников, 153','Баку, Азербайджан']};
const mapUrl='https://www.google.com/maps/search/?api=1&query=Port%20Baku%20Tower%201%2C%20153%20Neftchilar%20Avenue%2C%20Baku%2C%20Azerbaijan';
const mapLabel={en:'View on map',az:'Xəritədə bax',tr:'Haritada görüntüle',ru:'Посмотреть на карте'};
function mapLink(l){return `<a class="office-map" href="${esc(mapUrl)}" target="_blank" rel="noopener noreferrer">${esc(mapLabel[l])}${jump}</a>`;}
const emailLink=()=>'<a class="office-email" href="mailto:info@crossmer.com">info@crossmer.com</a>';
function footerSocials(){return `<ul class="footer-socials">${Object.entries(socialIcons).map(([name,icon])=>`<li><a class="social-profile" href="${name==='Instagram'?'https://www.instagram.com/':'https://www.linkedin.com/'}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${icon}</svg><span>${name}</span></a></li>`).join('')}</ul>`;}
function footer(l,route='',query=''){const t=copy[l];return `<footer class="site-footer"><div class="container"><div class="footer-main"><div>${brand(l)}<p>${esc(t.footerText)}</p></div><nav aria-label="${esc(t.navLabel)}">${['','about','expertise','contact'].map((r,i)=>`<a href="${path(l,r)}">${esc(t.nav[i])}</a>`).join('')}</nav><div class="footer-location footer-contact"><h2>${esc(t.nav[3])}</h2><address class="footer-contact-list"><a class="footer-contact-row" href="${esc(mapUrl)}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.6"/></svg><span>${footerAddress[l].map(esc).join('<br>')}</span></a><a class="footer-contact-row" href="tel:+994552129393"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 2-2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg><span>+994 55 212 93 93</span></a><a class="footer-contact-row" href="mailto:info@crossmer.com"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="m4 6 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg><span>info@crossmer.com</span></a></address>${footerSocials()}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} CROSSMER. ${esc(t.rights)}</span><div><a href="${path(l,'privacy')}">${esc(t.privacy)}</a><a href="${path(l,'photography')}">${esc(t.credits)}</a></div></div></div></footer>`;}
function cta(l){const t=copy[l];return `<section class="partnership"><div class="container partnership-inner"><div>${eyebrow('CROSSMER')}<h2>${esc(t.ctaTitle)}</h2><p>${esc(t.ctaText)}</p></div>${btn(t.contact,path(l,'contact'),'light')}</div></section>`;}
const sectionHead=(label,title,text='')=>`<div class="section-heading"><div>${eyebrow(label)}<h2>${esc(title)}</h2></div>${text?`<p>${esc(text)}</p>`:''}</div>`;
function home(l){const t=copy[l];return `<section class="hero"><picture><img class="hero-image" src="/assets/baku-daylight.webp" width="3840" height="2560" alt="${esc(t.heroAlt)}" fetchpriority="high" decoding="async"></picture><div class="hero-shade"></div><div class="container hero-content">${eyebrow(t.baseLabel)}<h1>${esc(t.heroTitle[0])}<br><span>${esc(t.heroTitle[1])}</span></h1><p class="hero-description">${esc(t.heroText)}</p><div class="actions">${btn(t.explore,path(l,'expertise'))}${btn(t.contact,path(l,'contact'),'outline')}</div></div><div class="container hero-bottom"><a href="#company" data-scroll="company">${esc(t.scroll)}<span>↓</span></a><span>${esc(t.location)}</span></div></section>
 <section class="section company-intro" id="company"><div class="container intro-grid"><div>${eyebrow(t.introLabel)}<h2>${esc(t.introTitle)}</h2></div><div><p class="lead">${esc(t.introText)}</p>${link(t.readAbout,path(l,'about'))}</div></div></section>
 <section class="section expertise-preview"><div class="container">${sectionHead(t.expertiseIntro,t.expertiseTitle)}<div class="expertise-list">${expertise[l].map((s,i)=>`<a class="expertise-row" href="${path(l,'expertise',`section=${s.id}`)}"><span class="row-number">0${i+1}</span><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p>${jump}</a>`).join('')}</div></div></section>
 <section class="cooperation"><div class="cooperation-image">${img('global-shipping.webp',t.seaAlt)}<span class="image-note">${esc(t.photoNote)}</span></div><div class="cooperation-copy">${eyebrow(t.globalLabel)}<h2>${esc(t.globalTitle).replace('\n','<br>')}</h2><p>${esc(t.globalText)}</p>${link(t.partnership,path(l,'contact','type=distribution'))}</div></section>${cta(l)}`;}
function pageTop(l,label,title,text=''){const t=copy[l];return `<section class="page-top"><div class="container"><div class="breadcrumb"><a href="${path(l)}">${esc(t.nav[0])}</a><span>/</span><span>${esc(label)}</span></div>${eyebrow(label)}<h1>${esc(title)}</h1>${text?`<p class="page-lead">${esc(text)}</p>`:''}</div></section>`;}
function aboutPage(l){const t=copy[l],a=about[l],b=a.blocks;return `${pageTop(l,a.title,b[0].title)}<section class="section about-section about-intro"><div class="container editorial-intro"><div class="about-lead"><p class="lead">${esc(b[0].paragraphs[0])}</p><p>${esc(b[0].paragraphs[1])}</p></div><figure>${img('sourcing-vessel.webp',t.seaAlt)}<figcaption>${esc(t.photoNote)}</figcaption></figure></div></section><section class="section about-section editorial-section"><div class="container editorial-pair">${b.slice(1,3).map((s,i)=>`<article><span class="section-number">0${i+1}</span><h2>${esc(s.title)}</h2>${s.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}</article>`).join('')}</div></section><section class="section about-section strategic"><div class="container strategic-grid"><figure>${img('commercial-partners.webp',t.meetingAlt)}<figcaption>${esc(t.meetingAlt)}</figcaption></figure><div>${eyebrow(t.globalLabel)}<h2>${esc(b[3].title)}</h2>${b[3].paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}</div></div></section><section class="section about-section principles"><div class="container principle-grid"><h2>${esc(b[4].title)}</h2><div>${b[4].paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}</div></div></section><section class="section about-section mission-section"><div class="container mission-grid">${b.slice(5).map((s,i)=>`<article class="mission-panel"><span>0${i+1}</span><h2>${esc(s.title)}</h2><p>${esc(s.paragraphs[0])}</p></article>`).join('')}</div><div class="container"><p class="closing-statement">${esc(a.conclusion)}</p></div></section>${cta(l)}`;}
function serviceVisual(l,i){const t=copy[l];if(i===0)return img('trade-port-hq.webp',t.portAlt);if(i===1)return img('raw-materials.webp',t.rawAlt);if(i===2)return img('construction-steel-hq.webp',t.steelAlt);if(i===4)return img('logistics-port-hq.webp',t.portAlt);return `<div class="partnership-visual" aria-hidden="true"><span>CROSSMER</span><div class="relationship-lines"><i></i><i></i><i></i></div><strong>${esc(t.globalLabel)}</strong></div>`;}
function expertisePage(l){const t=copy[l];return `${pageTop(l,t.nav[2],t.expertiseTitle,t.expertiseText)}<div class="container service-directory">${expertise[l].map((s,i)=>`<section class="service" id="${s.id}"><div class="service-visual">${serviceVisual(l,i)}</div><div class="service-copy"><span class="section-number">0${i+1}</span><h2>${esc(s.title)}</h2><p class="service-description">${esc(s.description)}</p><p>${esc(s.detail)}</p><div class="actions ${i===1?'materials-actions':''}">${link(i===1||i===2?t.productInfo:t.partnership,path(l,'contact',`type=${i===1||i===2?'product':i===0?'trade':'distribution'}`))}${i===1?`<a class="material-index-link" href="${path(l,'materials')}">${esc(t.allMaterials)} ${arrow}</a>`:''}</div></div></section>`).join('')}</div>${cta(l)}`;}
const materialRows=[
 ['silicomanganese','SiMn',['Silicomanganese','Silikomanqan','Silikomangan','Силикомарганец']],['ferromanganese','FeMn',['Ferromanganese','Ferromanqan','Ferromangan','Ферромарганец']],['ferrosilicon','FeSi',['Ferrosilicon','Ferrosilisium','Ferrosilisyum','Ферросилиций']],['ferrochrome','FeCr',['Ferrochrome','Ferroxrom','Ferrokrom','Феррохром']],['steel-rebar','Rebar',['Steel rebar','Polad armatur','İnşaat Demiri','Стальная арматура']],['steel-billets','Billet',['Steel billets','Polad pəstahlar','Çelik Kütük','Стальная заготовка']],['hot-rolled-coil','HRC',['Hot-rolled coil','İsti yayılmış polad rulon','Sıcak Haddelenmiş Rulo','Горячекатаный рулон']],['aluminium-ingots','Al',['Aluminium ingots','Alüminium külçələr','Alüminyum Külçe','Алюминиевые слитки']],['copper-cathodes','Cu',['Copper cathodes','Mis katodlar','Bakır Katot','Медные катоды']],['hdpe','HDPE',['High-density polyethylene','Yüksək sıxlıqlı polietilen','Yüksek Yoğunluklu Polietilen','Полиэтилен высокой плотности']],['ldpe','LDPE',['Low-density polyethylene','Aşağı sıxlıqlı polietilen','Düşük Yoğunluklu Polietilen','Полиэтилен низкой плотности']],['lldpe','LLDPE',['Linear low-density polyethylene','Xətti aşağı sıxlıqlı polietilen','Lineer Düşük Yoğunluklu Polietilen','Линейный полиэтилен низкой плотности']],['polypropylene','PP',['Polypropylene','Polipropilen','Polipropilen','Полипропилен']]
];
const materials=Object.fromEntries(languages.map((l,i)=>[l,materialRows.map(([id,symbol,n])=>({id,symbol,title:n[i]}))]));
function materialsPage(l){const t=copy[l];return `${pageTop(l,t.allMaterials,t.materialTitle,t.materialNote)}<section class="section"><div class="container material-list">${materials[l].map(m=>`<a href="${m.id==='silicomanganese'?path(l,'materials/silicomanganese'):path(l,'contact','type=product&product='+encodeURIComponent(m.id))}"><span>${esc(m.symbol)}</span><h2>${esc(m.title)}</h2>${arrow}</a>`).join('')}</div></section>${cta(l)}`;}
function simn(l){const t=copy[l];return `${pageTop(l,t.simn,t.simn,t.simnText)}<section class="section"><div class="container product-intro"><figure>${img('silicomanganese.jpg',t.supplied,'',500,486)}<figcaption>${esc(t.supplied)}</figcaption></figure><div>${eyebrow('SiMn / FeSiMn · МнС17')}<h2>${esc(t.technical)}</h2><p>${esc(t.chemistryNote)}</p><div class="actions">${btn(t.productInfo,path(l,'contact','type=product&product=silicomanganese'))}</div></div></div></section><section class="section specifications"><div class="container"><div class="spec-table"><table><caption>${esc(t.range)}</caption><thead><tr><th scope="col">${esc(t.parameter)}</th><th scope="col">Mn 65–70%</th><th scope="col">Mn 70–73%</th></tr></thead><tbody>${[['Mn','65–70%','70–73%'],['Si','15–20%','15–20%'],['C','2.5%','2.5%'],['S','0.03%','0.03%'],['P','—','—']].map(r=>`<tr><th scope="row">${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div><div class="product-facts"><div><h3>${esc(t.packing)}</h3><p>Big Bag</p></div><div><h3>${esc(t.size)}</h3><p>${esc(t.sizeNote)}</p></div><div><h3>${esc(t.reference)}</h3><p>GOST 4756-91 (ISO 5447-80)</p></div></div><p class="source-note">${esc(t.standardsNote)}</p><h2 class="source-title">${esc(t.source)}</h2><div class="source-links"><a href="/assets/source-mn65.jpg" target="_blank" rel="noopener">Mn 65–70% ${jump}</a><a href="/assets/source-mn70.jpg" target="_blank" rel="noopener">Mn 70–73% ${jump}</a><a href="/assets/source-variants.jpg" target="_blank" rel="noopener">${esc(t.variants)} ${jump}</a></div>${link(t.backExpertise,path(l,'expertise','section=raw-materials'))}</div></section>${cta(l)}`;}
const fields=['name','company','email','country','type','product','message'];
function contactPage(l,v=emptyInquiry(),errors={},status=''){
 const t=copy[l];return `${pageTop(l,t.nav[3],t.contactTitle)}<section class="section contact-section"><div class="container contact-grid"><aside><p class="contact-description">${esc(t.contactText)}</p><div class="contact-location">${eyebrow(t.location)}<span>CROSSMER</span><div class="office-contact"><address>${footerAddress[l].map(esc).join('<br>')}</address>${mapLink(l)}${emailLink()}</div></div><div class="contact-intent"><span>01</span><p>${esc(expertise[l][0].title)}</p><span>02</span><p>${esc(expertise[l][3].title)}</p></div></aside><div class="form-panel"><h2>${esc(t.formTitle)}</h2><p class="required-note">${esc(t.requiredNote)}</p>${!inquiryConfig.endpoint?`<div class="delivery-notice">${esc(t.unavailable)}</div>`:''}<form id="inquiry-form" novalidate><div class="form-fields">${fields.map((k,i)=>{const required=['name','company','email','type','message'].includes(k);const error=errors[k];return `<div class="field ${k==='message'?'full':''}"><label for="${k}">${esc(t.labels[i])}${required?' <span aria-hidden="true">*</span>':` <small>(${esc(t.optional)})</small>`}</label>${k==='type'?`<select id="type" name="type" required aria-describedby="type-error"${error?' aria-invalid="true"':''}><option value="">${esc(t.placeholders[i])}</option>${inquiryTypes.map((x,j)=>`<option value="${x}"${v.type===x?' selected':''}>${esc(t.types[j])}</option>`).join('')}</select>`:k==='message'?`<textarea id="message" name="message" rows="5" required minlength="20" maxlength="5000" placeholder="${esc(t.placeholders[i])}" aria-describedby="message-error"${error?' aria-invalid="true"':''}>${esc(v.message)}</textarea>`:`<input id="${k}" name="${k}" type="${k==='email'?'email':'text'}" ${required?'required ':''}${k==='country'?'list="countries" ':''}autocomplete="${({name:'name',company:'organization',email:'email',country:'country-name',product:'off'})[k]}" value="${esc(v[k])}" maxlength="${k==='product'?200:150}" placeholder="${esc(t.placeholders[i])}" aria-describedby="${k}-error"${error?' aria-invalid="true"':''}>`}<p class="field-error" id="${k}-error">${esc(error||'')}</p></div>`;}).join('')}</div><datalist id="countries"></datalist><div class="spam-field" aria-hidden="true"><label for="website">Website</label><input id="website" name="website" tabindex="-1" autocomplete="off" value=""></div><div class="consent-field"><input type="checkbox" id="consent" name="consent"${v.consent?' checked':''} required aria-describedby="consent-error"${errors.consent?' aria-invalid="true"':''}><label for="consent">${esc(t.consent)} <a href="${path(l,'privacy')}">${esc(t.privacy)} ↗</a></label></div><p class="field-error" id="consent-error">${esc(errors.consent||'')}</p><div id="form-status" class="form-status" role="status" aria-live="polite">${esc(status)}</div><button class="button primary submit" type="submit">${esc(inquiryConfig.endpoint?t.send:t.download)}${arrow}</button></form></div></div></section>`;
}
function privacy(l){const t=copy[l];return `${pageTop(l,t.privacy,t.privacyTitle)}<section class="section"><div class="container prose"><p>${esc(t.privacyBody)}</p>${link(t.contact,path(l,'contact'))}</div></section>`;}
function photography(l){const t=copy[l];return `${pageTop(l,t.credits,t.creditsTitle)}<section class="section"><div class="container prose"><p>${esc(t.creditsBody)}</p><ul class="credits-list">${photoCredits.map(p=>`<li><a href="${p.source}" target="_blank" rel="noopener">${esc(t[p.label])} — ${esc(p.author)}</a>${p.license?`<br><a href="${p.licenseUrl}" target="_blank" rel="noopener">${esc(p.license)}</a>`:''}</li>`).join('')}<li><a href="https://www.pexels.com/license/" target="_blank" rel="noopener">${esc(t.photoLicense)}</a></li><li><a href="/assets/fonts/Inter-OFL.txt" target="_blank" rel="noopener">Inter — SIL Open Font License</a></li></ul></div></section>`;}

function renderPage(l,route,options={}){const t=copy[l];switch(route){case '':return home(l);case 'about':return aboutPage(l);case 'expertise':return expertisePage(l);case 'contact':return contactPage(l,options.form,options.errors,options.status);case 'materials':return materialsPage(l);case 'materials/silicomanganese':return simn(l);case 'privacy':return privacy(l);case 'photography':return photography(l);default:return pageTop(l,'404',t.notFound)+`<section class="section"><div class="container">${btn(t.nav[0],path(l))}</div></section>`;}}
function metadata(l,route){
 const t=copy[l];
 const names={'':t.tagline,about:t.nav[1],expertise:t.nav[2],contact:t.nav[3],materials:t.allMaterials,'materials/silicomanganese':t.simn,privacy:t.privacy,photography:t.credits};
 const descriptions={'':t.heroText,about:about[l].blocks[0].paragraphs[0],expertise:t.expertiseText,contact:t.contactText,materials:t.materialNote,'materials/silicomanganese':t.simnText,privacy:t.privacyBody.split('. ')[0]+'.',photography:t.creditsBody};
 return {title:`${names[route]||t.notFound} — CROSSMER`,description:descriptions[route]||t.notFound,image:route==='materials/silicomanganese'?'/assets/silicomanganese.jpg':'/assets/baku-daylight.webp',imageAlt:route==='materials/silicomanganese'?t.supplied:t.heroAlt};
}
function seoTags(l,route,siteUrl){
 const m=metadata(l,route),url=new URL(path(l,route),siteUrl).href,image=new URL(m.image,siteUrl).href;
 const meta=(attribute,name,value)=>`<meta data-site-seo ${attribute}="${name}" content="${esc(value)}">`;
 const link=(rel,href,extra='')=>`<link data-site-seo rel="${rel}"${extra} href="${esc(href)}">`;
 const known=routes.includes(route);
 return [`<title data-site-seo>${esc(m.title)}</title>`,meta('name','description',m.description),
  ...(known?[link('canonical',url),...languages.map(x=>link('alternate',new URL(path(x,route),siteUrl).href,` hreflang="${x}"`)),link('alternate',new URL(path('en',route),siteUrl).href,' hreflang="x-default"')]:[meta('name','robots','noindex, follow')]),
  meta('property','og:type','website'),meta('property','og:site_name','CROSSMER'),meta('property','og:title',m.title),meta('property','og:description',m.description),meta('property','og:url',url),meta('property','og:locale',modules['trade-content'].locale[l].replace('-','_')),
  ...languages.filter(x=>x!==l).map(x=>meta('property','og:locale:alternate',modules['trade-content'].locale[x].replace('-','_'))),
  meta('property','og:image',image),meta('property','og:image:alt',m.imageAlt),meta('name','twitter:card','summary_large_image'),meta('name','twitter:title',m.title),meta('name','twitter:description',m.description),meta('name','twitter:image',image),meta('name','twitter:image:alt',m.imageAlt)
 ].join('\n');
}

return {esc,routes,path,languagePicker,brand,header,footer,cta,materials,contactPage,renderPage,metadata,seoTags};})();
modules["trade-app"]=(()=>{
const {copy,languages,locale}=modules["trade-content"];
const {renderPage,header,footer,seoTags,materials,esc}=modules["trade-render"];
const {emptyInquiry,validateInquiry,inquiryText,deliverInquiry,inquiryConfig}=modules["inquiry"];
let form=emptyInquiry(),errors={},status='',currentLanguage='en',currentRoute='',currentQuery='',sending=false;
const siteUrl=document.documentElement.dataset.siteUrl||location.origin;
const countryCodes='AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW'.split(' ');
function countriesFor(l){const names=new Intl.DisplayNames([l],{type:'region'});return countryCodes.map(code=>({code,name:names.of(code)})).sort((a,b)=>a.name.localeCompare(b.name,locale[l]));}
function readLocation(){const p=location.pathname.split('/').filter(Boolean);if(p[p.length-1]==='index.html')p.pop();const l=languages.includes(p[0])?p.shift():'en';return {l,route:p.join('/'),query:location.search.slice(1)};}
function migrateLegacyHash(){
 if(!/^#\/(en|az|tr|ru)(\/|$)/.test(location.hash))return false;
 const legacy=new URL(location.hash.slice(1),location.origin);
 history.replaceState({},'',legacy.pathname+legacy.search);
 return true;
}
function setMeta(l,route){
 document.documentElement.lang=l;
 document.head.querySelectorAll('[data-site-seo]').forEach(node=>node.remove());
 document.head.insertAdjacentHTML('beforeend',seoTags(l,route,siteUrl));
}
function render({focus=false,scroll=true,navigation=false}={}){
 const {l,route,query}=readLocation();const prev=currentLanguage;
 // Apply link defaults on entry/re-entry, but preserve edits during validation and language changes.
 const applyContext=route==='contact'&&(currentRoute!=='contact'||(l===prev&&(navigation||query!==currentQuery)));
 currentLanguage=l;currentRoute=route;currentQuery=query;
 if(form.countryCode&&prev!==l){form.country=countriesFor(l).find(c=>c.code===form.countryCode)?.name||'';}
 if(prev!==l){if(Object.keys(errors).length)errors=validateInquiry(form,copy[l],countriesFor(l));const key=Object.keys(copy[prev]).find(k=>typeof copy[prev][k]==='string'&&copy[prev][k]===status);if(key)status=copy[l][key];}
 const params=new URLSearchParams(query);
 if(applyContext){if(params.has('type'))form.type=params.get('type');if(params.has('product')){const p=params.get('product');form.product=materials[l].find(m=>m.id===p)?.title||p.slice(0,200);}errors={};status='';}
 document.getElementById('site-header').innerHTML=header(l,route,query);
 const main=document.getElementById('main');main.innerHTML=renderPage(l,route,{form,errors,status});document.getElementById('site-footer').innerHTML=footer(l,route,query);document.querySelector('.skip-link').textContent=copy[l].skip;setMeta(l,route);
 if(route==='contact'){const list=document.getElementById('countries');list.innerHTML=countriesFor(l).map(c=>`<option value="${esc(c.name)}"></option>`).join('');}
 if(scroll){const section=params.get('section');if(section&&document.getElementById(section))document.getElementById(section).scrollIntoView();else window.scrollTo(0,0);}
 if(focus)main.focus({preventScroll:true});
}
function navigate(url){
 const target=url.pathname+url.search+url.hash;
 if(target!==location.pathname+location.search+location.hash)history.pushState({},'',target);
 render({focus:true,navigation:true});
}
document.addEventListener('click',e=>{
 document.querySelectorAll('.language-picker[open]').forEach(p=>{if(!p.contains(e.target))p.open=false;});
 const menu=e.target.closest('[data-menu]');if(menu){const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',copy[currentLanguage][open?'close':'menu']);document.getElementById('main-nav').classList.toggle('is-open',open);return;}
 const a=e.target.closest('a');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button>0||a.target==='_blank'||a.hasAttribute('download'))return;
 if(a.dataset.scroll){const target=document.getElementById(a.dataset.scroll);if(target){e.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}return;}
 const url=new URL(a.href,location.href);if(url.origin!==location.origin||!/^\/(en|az|tr|ru)\//.test(url.pathname)||url.hash)return;e.preventDefault();navigate(url);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.language-picker[open]').forEach(p=>{p.open=false;p.querySelector('summary').focus();});const menu=document.querySelector('[data-menu]');if(menu?.getAttribute('aria-expanded')==='true'){menu.click();menu.focus();}}});
document.addEventListener('input',e=>{if(!e.target.closest('#inquiry-form'))return;const k=e.target.name;if(k in form){form[k]=k==='consent'?e.target.checked:e.target.value;if(k==='country')form.countryCode=countriesFor(currentLanguage).find(c=>c.name===form.country)?.code||'';if(errors[k]){delete errors[k];e.target.removeAttribute('aria-invalid');const error=document.getElementById(k+'-error');if(error)error.textContent='';}status='';document.getElementById('form-status').textContent='';}});
document.addEventListener('change',e=>{if(e.target.closest('#inquiry-form')&&e.target.name==='type')form.type=e.target.value;});
document.addEventListener('submit',async e=>{
 if(e.target.id!=='inquiry-form')return;e.preventDefault();if(sending)return;
 // Include values applied by browser autofill even if no input event fired.
 if(e.target.elements){const data=new FormData(e.target);for(const k of ['name','company','email','country','type','product','message','website'])form[k]=String(data.get(k)||'');form.consent=data.has('consent');form.countryCode=countriesFor(currentLanguage).find(c=>c.name===form.country)?.code||'';}
 const t=copy[currentLanguage];errors=validateInquiry(form,t,countriesFor(currentLanguage));if(Object.keys(errors).length){status=t.reviewErrors;render({scroll:false});document.getElementById(Object.keys(errors)[0])?.focus();return;}
 if(form.website){status=t.failure;render({scroll:false});return;}
 if(!inquiryConfig.endpoint){try{const blob=new Blob(['\uFEFF'+inquiryText(form,t)],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='crossmer-inquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);status=t.downloaded;}catch{status=t.downloadFailure;}render({scroll:false});return;}
 sending=true;const button=e.target.querySelector('[type=submit]');button.disabled=true;button.textContent=t.sending;
 const response=await deliverInquiry({...form,language:currentLanguage});sending=false;status=copy[currentLanguage][response.accepted?'sent':'failure'];if(response.accepted){form=emptyInquiry();errors={};}render({scroll:false});
});
function onLocationChange(){
 const migrated=migrateLegacyHash(),next=readLocation();
 if(!migrated&&next.l===currentLanguage&&next.route===currentRoute&&next.query===currentQuery)return;
 render({focus:true,navigation:true});
}
window.addEventListener('popstate',onLocationChange);
window.addEventListener('hashchange',onLocationChange);
migrateLegacyHash();
currentLanguage=readLocation().l;render({scroll:false});

return {countriesFor};})();
