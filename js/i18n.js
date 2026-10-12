(function () {
  "use strict";

  const translations = {
    ru: {
      "nav.about": "Обо мне",
      "nav.gallery": "Галерея",
      "nav.awards": "Достижения",
      "nav.faq": "FAQ",
      "nav.news": "Ближайшие выступления",

      "hero.title": "Альбина Бойко",
      "hero.desc":
        "Флейта | Академическое и джазовое исполнительство Москва, Россия • Email: albinab1610@gmail.com",

      "about.p1": "Родилась 16 октября 2007 г. в Москве.",
      "about.p2":
        "Музыкант, лауреат всероссийских и международных конкурсов. Выпускница ГБПОУ г. Москвы «Академия Джаза» (класс преподавателя Прялкиной Анны Александровны). Сочетает сильную академическую классическую школу с джазовым исполнительством и искусством импровизации. Ведет регулярную концертную деятельность на ведущих площадках столицы, включая залы Московского международного Дома музыки, Российской академии музыки имени Гнесиных и Московской государственной консерватории имени П. И. Чайковского. Творческие интересы исполнительницы также лежат на стыке живого инструментального искусства, медиа-индустрии и современных звуковых технологий.",
      "about.h2": "МЕЖДУНАРОДНАЯ И ОРКЕСТРОВАЯ ДЕЯТЕЛЬНОСТЬ",
      "about.p3":
        "Приглашенная солистка Международного фестиваля «Vivaldiada» (Северная Македония, 2026) с сольной программой из произведений А. Вивальди.",
      "about.p4":
        "Международный молодежный симфонический оркестр BISYOC (Германия, 2026) — приглашена в проект по результатам конкурсного отбора.",
      "about.p5":
        "Молодежный оркестр ESYO (European Symphony Orchestra) под руководством Игоря Коретти (Словения — Италия, сезон 2025/2026).",
      "about.p6":
        "Выступления в ансамблях — участник квартета флейт под руководством Томассо Биссиака (Словения, 2025).",
      "about.p7":
        "Цикл концертов «Романтизм: истоки и горизонты» (сезоны 2024–2027) — постоянный участник международных программ лауреатов.",

      "gallery.title": "Галерея",

      "awards.title": "НАГРАДЫ И МЕЖДУНАРОДНОЕ ПРИЗНАНИЕ",
      "awards.g1.title": "Высшие знаковые награды и европейские проекты",
      "awards.g2.title": "Международные и всероссийские конкурсы",
      "awards.g3.title": "Конкурсы 2023–2024 годов",
      "awards.g4.title": "Дополнительные награды",

      "awards.1":
        "Гран-при — Международный конкурс искусств «Музыка — душа моя» (в номинации «Инструментальный академический ансамбль»).",
      "awards.2":
        "Специальный приз за исполнение произведения А. Жоливе — ХVI Международный конкурс музыкантов-исполнителей и композиторов «Романтизм. Истоки и Горизонты памяти Е. Ф. Гнесиной».",
      "awards.3": "Basel International Flute Competition (Швейцария).",
      "awards.4":
        "Stockholm International Music Competition (Швеция) — лауреат 2024 и 2025 годов.",
      "awards.5": "Международный конкурс «LYPCO» (Великобритания, Лондон).",
      "awards.6":
        "Международный форум-конкурс «Искусство XXI века» (Фуншал, Мадейра).",
      "awards.7":
        "ХVI Международный конкурс музыкантов-исполнителей и композиторов «Романтизм. Истоки и Горизонты памяти Е. Ф. Гнесиной».",
      "awards.8":
        "Международный музыкальный конкурс имени Д. Д. Шостаковича (2025).",
      "awards.9":
        "Международный музыкальный конкурс, посвящённый И. Ф. Стравинскому — лауреат 2024 и 2025 годов (август).",
      "awards.10":
        "Международный конкурс исполнителей на духовых инструментах «Moscow wind».",

      "awards.11":
        "Санкт-Петербургский Международный конкурс им. И. Ф. Стравинского (2026).",
      "awards.12":
        "XVI Московский открытый фестиваль-конкурс молодых исполнителей старинной музыки имени Леопольда Моцарта (2026).",
      "awards.13":
        "VI Всероссийский фестиваль-конкурс исполнителей на деревянных духовых инструментах «Viva il vento» (2026).",
      "awards.14":
        "Международный конкурс искусств «Музыка — душа моя» (в номинации «Соло»).",
      "awards.15":
        "V Международный музыкальный конкурс «Достояние» (в номинациях «Соло» и «Инструментальный академический ансамбль»).",
      "awards.16":
        "IX Международный конкурс музыкантов-исполнителей «Музыка. Талант. Открытие».",
      "awards.17": "Всероссийский музыкальный конкурс «MUZART».",
      "awards.18": "Международный конкурс-фестиваль «Краски музыки» (2026).",
      "awards.19":
        "III Международный конкурс молодых музыкантов-исполнителей «Территория творчества».",
      "awards.20": "II Всероссийский музыкальный конкурс «Орфей» (2026).",
      "awards.21": "VI Международный музыкальный конкурс «Авис».",

      "awards.22":
        "XV Международный конкурс «Романтизм: Истоки. Горизонты» памяти Е. Ф. Гнесиной.",
      "awards.23": "Хl Международный музыкальный конкурс в Стокгольме.",
      "awards.24":
        "Московский открытый конкурс-фестиваль флейтистов им. Ю. Г. Ягудина.",
      "awards.25":
        "Открытый конкурс юных музыкантов «Настроения» имени М. Л. Таривердиева (2023).",
      "awards.26":
        "III Всероссийский фестиваль-конкурс исполнителей на деревянных духовых «Viva il vento» (2023).",
      "awards.27":
        "XIII Международный открытый фестиваль-конкурс молодых музыкантов «VIVAT MUSICA!».",
      "awards.28": "Международный конкурс-фестиваль «Краски музыки» (2024).",
      "awards.29": "Музыкальный конкурс «Con Fuoco».",
      "awards.30": "XI Международный конкурс «Волшебство звука».",
      "awards.31":
        "III Международный конкурс-фестиваль исполнительского искусства.",

      "awards.32":
        "Открытый фестиваль-конкурс сольного исполнительства на духовых инструментах «Музыкальный триумф».",
      "awards.33":
        "IX Международный конкурс инструментального и вокального исполнительства «Камертон» (2024).",
      "awards.34":
        "IX Международный фестиваль-конкурс «Волшебный мир искусства».",
      "awards.35":
        "V Международный конкурс инструментального и вокального исполнительства «Камертон» (2023).",

      "faq.title": "FAQ — Часто задаваемые вопросы",
      "faq.q1":
        "Это только сольные выступления или возможен формат ансамбля/дуэта?",
      "faq.a1":
        "Зависит от задачи. Выступления возможны как сольно, так и в составах. Если для проекта нужен дуэт (например, с фортепиано или гитарой) или камерный ансамбль — есть проверенные коллеги-музыканты, с которыми можно быстро собрать программу.",
      "faq.q2": "Сколько обычно длится выступление?",
      "faq.a2":
        "Либо полноценный сольный концерт из двух отделений, либо несколько сетов по 15–30 минут для коммерческих мероприятий. Тайминг всегда можно гибко подстроить под сценарий события.",
      "faq.q3": "Возможна ли работа в коммерческих и медийных проектах?",
      "faq.a3":
        "Да, открыта к сотрудничеству с кинокомпозиторами, режиссерами и брендами. Классическая база и умение импровизировать позволяют быстро поймать нужную атмосферу и подстроиться под любой концепт.",
      "faq.q4": "Можно ли заказать удаленную запись флейты?",
      "faq.a4":
        "Да. Вы присылаете трек и свои пожелания — запись проходит в профессиональной студии. На выходе вы получаете чистые аудиоисходники: сольные партии, фоновые подклады или варианты импровизации на выбор.",
      "faq.q5": "Каковы требования к оборудованию на площадке?",
      "faq.a5":
        "Инструмент звучит полностью в акустике. Для небольших залов аппаратура вообще не нужна. Если сцена большая или идут съемки — понадобится всего один стандартный инструментальный микрофон на стойке.",
      "faq.q6": "Возможен ли выезд на проекты в другие города и страны?",
      "faq.a6":
        "Да, международная концертная деятельность ведется регулярно. Все документы и визы в порядке. Возможность поездки и условия обсуждаются индивидуально под конкретные даты.",

      "footer.nav": "Навигация",
    },

    en: {
      "nav.about": "About me",
      "nav.gallery": "Gallery",
      "nav.awards": "Achievements",
      "nav.faq": "FAQ",
      "nav.news": "Upcoming performances",

      "hero.title": "Albina Boiko",
      "hero.desc":
        "Flute | Classical and jazz performance. Moscow, Russia • Email: albinab1610@gmail.com",

      "about.p1": "Born on October 16, 2007 in Moscow.",
      "about.p2":
        "Musician, laureate of Russian and international competitions. Graduate of the Moscow Jazz Academy (class of Anna Pryalkina). She combines a strong classical academic school with jazz performance and the art of improvisation. She regularly performs at leading venues in the capital, including the halls of the Moscow International House of Music, the Gnessin Russian Academy of Music and the Moscow State Tchaikovsky Conservatory. Her creative interests also lie at the intersection of live instrumental art, the media industry and modern sound technologies.",
      "about.h2": "INTERNATIONAL AND ORCHESTRAL ACTIVITY",
      "about.p3":
        "Guest soloist of the International Vivaldiada Festival (North Macedonia, 2026) with a solo program of works by A. Vivaldi.",
      "about.p4":
        "International Youth Symphony Orchestra BISYOC (Germany, 2026) — invited to the project following a competitive selection.",
      "about.p5":
        "ESYO Youth Orchestra (European Symphony Orchestra) under the direction of Igor Coretti (Slovenia — Italy, season 2025/2026).",
      "about.p6":
        "Ensemble performances — member of a flute quartet under the direction of Tommaso Bissiak (Slovenia, 2025).",
      "about.p7":
        "Concert cycle “Romanticism: Origins and Horizons” (seasons 2024–2027) — permanent participant of international laureate programs.",

      "gallery.title": "Gallery",

      "awards.title": "AWARDS AND INTERNATIONAL RECOGNITION",
      "awards.g1.title": "Top landmark awards and European projects",
      "awards.g2.title": "International and all-Russian competitions",
      "awards.g3.title": "Competitions of 2023–2024",
      "awards.g4.title": "Additional awards",

      "awards.1":
        "Grand Prix — International Art Competition “Music is my soul” (in the nomination “Instrumental academic ensemble”).",
      "awards.2":
        "Special prize for the performance of a work by A. Jolivet — XVI International Competition of Performers and Composers “Romanticism. Origins and Horizons in memory of E. F. Gnessina”.",
      "awards.3": "Basel International Flute Competition (Switzerland).",
      "awards.4":
        "Stockholm International Music Competition (Sweden) — laureate of 2024 and 2025.",
      "awards.5": "International Competition “LYPCO” (United Kingdom, London).",
      "awards.6":
        "International Forum-Competition “Art of the 21st Century” (Funchal, Madeira).",
      "awards.7":
        "XVI International Competition of Performers and Composers “Romanticism. Origins and Horizons in memory of E. F. Gnessina”.",
      "awards.8":
        "International Music Competition named after D. D. Shostakovich (2025).",
      "awards.9":
        "International Music Competition dedicated to I. F. Stravinsky — laureate of 2024 and 2025 (August).",
      "awards.10":
        "International Competition of Wind Instrument Performers “Moscow wind”.",

      "awards.11":
        "St. Petersburg International Competition named after I. F. Stravinsky (2026).",
      "awards.12":
        "XVI Moscow Open Festival-Competition of Young Performers of Early Music named after Leopold Mozart (2026).",
      "awards.13":
        "VI All-Russian Festival-Competition of Performers on Woodwind Instruments “Viva il vento” (2026).",
      "awards.14":
        "International Art Competition “Music is my soul” (in the nomination “Solo”).",
      "awards.15":
        "V International Music Competition “Heritage” (in the nominations “Solo” and “Instrumental academic ensemble”).",
      "awards.16":
        "IX International Competition of Performing Musicians “Music. Talent. Discovery”.",
      "awards.17": "All-Russian Music Competition “MUZART”.",
      "awards.18":
        "International Competition-Festival “Colours of Music” (2026).",
      "awards.19":
        "III International Competition of Young Performing Musicians “Territory of Creativity”.",
      "awards.20": "II All-Russian Music Competition “Orpheus” (2026).",
      "awards.21": "VI International Music Competition “Avis”.",

      "awards.22":
        "XV International Competition “Romanticism: Origins. Horizons” in memory of E. F. Gnessina.",
      "awards.23": "XI International Music Competition in Stockholm.",
      "awards.24":
        "Moscow Open Competition-Festival of Flutists named after Yu. G. Yagudin.",
      "awards.25":
        "Open Competition of Young Musicians “Moods” named after M. L. Tariverdiev (2023).",
      "awards.26":
        "III All-Russian Festival-Competition of Performers on Woodwind Instruments “Viva il vento” (2023).",
      "awards.27":
        "XIII International Open Festival-Competition of Young Musicians “VIVAT MUSICA!”.",
      "awards.28":
        "International Competition-Festival “Colours of Music” (2024).",
      "awards.29": "Music Competition “Con Fuoco”.",
      "awards.30": "XI International Competition “Magic of Sound”.",
      "awards.31": "III International Competition-Festival of Performing Arts.",
      "awards.32":
        "Open Festival-Competition of Solo Performance on Wind Instruments “Musical Triumph”.",
      "awards.33":
        "IX International Competition of Instrumental and Vocal Performance “Kammerton” (2024).",
      "awards.34":
        "IX International Festival-Competition “Magical World of Art”.",
      "awards.35":
        "V International Competition of Instrumental and Vocal Performance “Kammerton” (2023).",

      "faq.title": "FAQ — Frequently Asked Questions",
      "faq.q1":
        "Is it only solo performances or is an ensemble/duo format possible?",
      "faq.a1":
        "It depends on the task. Performances are possible both solo and in ensembles. If a duo (e.g. with piano or guitar) or a chamber ensemble is needed, there are trusted fellow musicians with whom a program can be quickly assembled.",
      "faq.q2": "How long does a performance usually last?",
      "faq.a2":
        "Either a full solo concert of two parts, or several sets of 15–30 minutes for commercial events. The timing can always be flexibly adjusted to the event scenario.",
      "faq.q3": "Is work on commercial and media projects possible?",
      "faq.a3":
        "Yes, open to collaboration with film composers, directors and brands. A classical background and improvisation skills make it easy to capture the right atmosphere and adapt to any concept.",
      "faq.q4": "Can a remote flute recording be ordered?",
      "faq.a4":
        "Yes. You send the track and your wishes — the recording is done in a professional studio. You receive clean audio stems: solo parts, background layers or improvisation options to choose from.",
      "faq.q5": "What are the equipment requirements at the venue?",
      "faq.a5":
        "The instrument sounds fully acoustic. For small halls no equipment is needed at all. If the stage is large or filming is taking place, only one standard instrument microphone on a stand is required.",
      "faq.q6": "Is travel to projects in other cities and countries possible?",
      "faq.a6":
        "Yes, international concert activity is carried out regularly. All documents and visas are in order. The possibility of travel and conditions are discussed individually for specific dates.",

      "footer.nav": "Navigation",
    },

    zh: {
      "nav.about": "关于我",
      "nav.gallery": "画廊",
      "nav.awards": "成就",
      "nav.faq": "常见问题",
      "nav.news": "近期演出",

      "hero.title": "阿尔宾娜·博伊科",
      "hero.desc":
        "长笛 | 古典与爵士演奏。俄罗斯莫斯科 • Email: albinab1610@gmail.com",

      "about.p1": "2007年10月16日出生于莫斯科。",
      "about.p2":
        "音乐家，全俄及国际比赛获奖者。莫斯科爵士学院毕业生（师从安娜·普里亚尔金娜）。将扎实的古典学院派基础与爵士演奏及即兴艺术相结合。她经常在首都各大场馆演出，包括莫斯科国际音乐之家、格涅辛俄罗斯音乐学院和莫斯科国立柴可夫斯基音乐学院。她的创作兴趣还涉及现场器乐艺术、媒体产业与现代声音技术的交叉领域。",
      "about.h2": "国际与乐团活动",
      "about.p3":
        "受邀担任国际“Vivaldiada”音乐节（北马其顿，2026）独奏家，演奏维瓦尔第作品独奏节目。",
      "about.p4":
        "国际青年交响乐团 BISYOC（德国，2026）——经选拔受邀参加该项目。",
      "about.p5":
        "ESYO 青年乐团（欧洲交响乐团），由伊戈尔·科雷蒂指挥（斯洛文尼亚—意大利，2025/2026乐季）。",
      "about.p6":
        "室内乐演出——托马索·比西亚克指导的长笛四重奏成员（斯洛文尼亚，2025）。",
      "about.p7":
        "“浪漫主义：起源与地平线”系列音乐会（2024–2027乐季）——国际获奖者项目常驻参与者。",

      "gallery.title": "画廊",

      "awards.title": "奖项与国际认可",
      "awards.g1.title": "最高标志性奖项与欧洲项目",
      "awards.g2.title": "国际及全俄比赛",
      "awards.g3.title": "2023–2024年度比赛",
      "awards.g4.title": "其他奖项",

      "awards.1": "大奖——国际艺术比赛“音乐——我的灵魂”（“器乐学院合奏”类别）。",
      "awards.2":
        "安德烈·若利韦作品演奏特别奖——第十六届“浪漫主义：起源与地平线·纪念格涅辛娜”国际演奏家与作曲家比赛。",
      "awards.3": "巴塞尔国际长笛比赛（瑞士）。",
      "awards.4": "斯德哥尔摩国际音乐比赛（瑞典）——2024年与2025年获奖者。",
      "awards.5": "国际比赛“LYPCO”（英国，伦敦）。",
      "awards.6": "国际论坛比赛“21世纪艺术”（丰沙尔，马德拉）。",
      "awards.7":
        "第十六届“浪漫主义：起源与地平线·纪念格涅辛娜”国际演奏家与作曲家比赛。",
      "awards.8": "肖斯塔科维奇国际音乐比赛（2025）。",
      "awards.9": "纪念斯特拉文斯基国际音乐比赛——2024年与2025年（8月）获奖者。",
      "awards.10": "国际管乐演奏家比赛“Moscow wind”。",

      "awards.11": "圣彼得堡斯特拉文斯基国际比赛（2026）。",
      "awards.12":
        "第十六届莫斯科列奥波尔德·莫扎特古乐青年演奏家公开节庆比赛（2026）。",
      "awards.13": "第六届全俄木管乐器演奏家节庆比赛“Viva il vento”（2026）。",
      "awards.14": "国际艺术比赛“音乐——我的灵魂”（“独奏”类别）。",
      "awards.15": "第五届国际音乐比赛“遗产”（“独奏”与“器乐学院合奏”类别）。",
      "awards.16": "第九届国际演奏家比赛“音乐·才华·发现”。",
      "awards.17": "全俄音乐比赛“MUZART”。",
      "awards.18": "国际节庆比赛“音乐的色彩”（2026）。",
      "awards.19": "第三届国际青年演奏家比赛“创意之地”。",
      "awards.20": "第二届全俄音乐比赛“奥菲斯”（2026）。",
      "awards.21": "第六届国际音乐比赛“阿维斯”。",

      "awards.22": "第十五届“浪漫主义：起源·地平线”纪念格涅辛娜国际比赛。",
      "awards.23": "第十一届斯德哥尔摩国际音乐比赛。",
      "awards.24": "莫斯科雅古金长笛演奏家公开节庆比赛。",
      "awards.25": "塔里韦尔迪耶夫“情绪”青年音乐家公开比赛（2023）。",
      "awards.26": "第三届全俄木管乐器演奏家节庆比赛“Viva il vento”（2023）。",
      "awards.27": "第十三届国际青年音乐家公开节庆比赛“VIVAT MUSICA!”。",
      "awards.28": "国际节庆比赛“音乐的色彩”（2024）。",
      "awards.29": "音乐比赛“Con Fuoco”。",
      "awards.30": "第十一届国际比赛“声音的魔法”。",
      "awards.31": "第三届国际表演艺术节庆比赛。",
      "awards.32": "管乐独奏公开节庆比赛“音乐凯旋”。",
      "awards.33": "第九届国际器乐与声乐演奏比赛“音叉”（2024）。",
      "awards.34": "第九届国际节庆比赛“艺术的神奇世界”。",
      "awards.35": "第五届国际器乐与声乐演奏比赛“音叉”（2023）。",

      "faq.title": "常见问题解答",
      "faq.q1": "只提供独奏演出，还是可以有合奏/二重奏形式？",
      "faq.a1":
        "取决于具体需求。既可以独奏，也可以与其他乐手合作。如果需要二重奏（例如与钢琴或吉他）或室内合奏，有可靠的音乐家同事可以快速组建节目。",
      "faq.q2": "演出通常持续多长时间？",
      "faq.a2":
        "可以是完整的两部分独奏音乐会，也可以是商业活动的若干场15–30分钟演出。时间安排始终可以根据活动流程灵活调整。",
      "faq.q3": "是否可以参与商业和媒体项目？",
      "faq.a3":
        "可以，愿意与电影作曲家、导演和品牌合作。古典基础与即兴能力可以快速捕捉所需氛围并适应任何创意。",
      "faq.q4": "可以订购远程长笛录音吗？",
      "faq.a4":
        "可以。您发送音轨和您的要求——录音在专业录音棚进行。您将获得干净的音频素材：独奏声部、背景铺垫或可供选择的即兴版本。",
      "faq.q5": "场地对设备有什么要求？",
      "faq.a5":
        "乐器完全以原声发声。小型场地完全不需要设备。如果舞台较大或需要拍摄，只需一个标准乐器麦克风加支架。",
      "faq.q6": "是否可以前往其他城市和国家的项目？",
      "faq.a6":
        "可以，国际演出活动定期进行。所有文件和签证均正常。出行可能性和条件根据具体日期单独商定。",

      "footer.nav": "导航",
    },
  };

  const order = ["ru", "en", "zh"];
  const labels = { ru: "RU", en: "EN", zh: "中文" };
  const btn = document.getElementById("langBtn");
  const currentSpan = btn ? btn.querySelector(".lang-btn__current") : null;

  function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.documentElement.lang = lang;
    if (currentSpan) currentSpan.textContent = labels[lang];

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* localStorage может быть недоступен */
    }
  }

  function nextLang(current) {
    const i = order.indexOf(current);
    if (i === -1) return order[0];
    return order[(i + 1) % order.length];
  }

  let initial = "ru";
  try {
    const saved = localStorage.getItem("lang");
    if (saved && order.indexOf(saved) !== -1) initial = saved;
  } catch (e) {
    /* ignore */
  }

  applyLang(initial);

  if (btn) {
    btn.addEventListener("click", function () {
      const cur = document.documentElement.lang || "ru";
      applyLang(nextLang(cur));
    });
  }
})();
