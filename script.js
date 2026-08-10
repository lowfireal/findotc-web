// ==========================================
// 1. EASILY EDIT YOUR STATS AND LINKS HERE
// ==========================================

const FINDOTC_STATS = {
    listed: 150,       // Change to update Listed count
    verified: 10,      // Change to update Verified count
    subscribers: 95    // Change to update Subscribers count
};

const LINKS = {
    mainDirectory: "https://t.me/FindOTC",
    verifiedFolder: "https://t.me/addlist/bb2aHKqjwfoxZWMy" // Paste actual folder URL here!
};


// ==========================================
// 2. LANGUAGE TEXTS (ENGLISH / RUSSIAN)
// ==========================================
const TRANSLATIONS = {
    en: {
        navAbout: "About",
        navStats: "Achievements",
        navVerified: "Verified",
        navFolder: "Folder",
        heroBadge: "Telegram OTC Directory",
        heroTitle: "Telegram OTC communities, in one place.",
        heroSubtitle: "Discover Telegram communities for NFTs, Gifts, Usernames, P2P, TON and more.",
        heroBtn: "Open FindOTC",
        aboutTitle: "About FindOTC",
        aboutText: "FindOTC is a directory built to make Telegram OTC communities easier to discover. From NFTs and Telegram Gifts to usernames, P2P trading and TON — FindOTC brings communities together in one place.",
        statListed: "Listed communities",
        statVerified: "Verified communities",
        statSubs: "Directory subscribers",
        statusListed: "Listed",
        statusListedDesc: "Community is included in the FindOTC directory.",
        statusVerification: "Ownership verification",
        statusVerified: "Verified",
        statusVerifiedDesc: "Community ownership has been confirmed and the community has completed FindOTC verification.",
        benefitsTitle: "Why Verification Matters",
        benefitsText: "Verified communities have confirmed ownership and receive a visible FindOTC verification status. This helps users identify the official community listed in the directory and distinguish it from copies or fake communities.",
        benefit1: "Verified status",
        benefit2: "Custom banner in the directory",
        benefit3: "Custom description",
        benefit4: "Participation in selected FindOTC activities",
        benefit5: "Inclusion in the Verified Communities Folder",
        folderTitle: "Verified Communities Folder",
        folderText: "Verified Telegram OTC communities can be discovered together in one convenient Telegram folder.",
        folderBtn: "Open Verified Folder",
        footerTitle: "Find your next OTC community.",
        footerSubtitle: "Explore FindOTC.",
        footerBtn: "Open Directory →"
    },
    ru: {
        navAbout: "О нас",
        navStats: "Статистика",
        navVerified: "Верификация",
        navFolder: "Папка",
        heroBadge: "OTC Каталог в Telegram",
        heroTitle: "Telegram OTC сообщества в одном месте.",
        heroSubtitle: "Открывайте для себя Telegram-сообщества по NFT, Gifts, юзернеймам, P2P, TON и многому другому.",
        heroBtn: "Открыть FindOTC",
        aboutTitle: "О FindOTC",
        aboutText: "FindOTC — это каталог, созданный для упрощения поиска OTC сообществ в Telegram. От NFT и Telegram Gifts до юзернеймов, P2P торговли и TON — FindOTC объединяет сообщества в одном месте.",
        statListed: "Сообществ в списке",
        statVerified: "Верифицированных сообществ",
        statSubs: "Подписчиков каталога",
        statusListed: "В списке (Listed)",
        statusListedDesc: "Сообщество добавлено в каталог FindOTC.",
        statusVerification: "Проверка владения",
        statusVerified: "Верифицировано (Verified)",
        statusVerifiedDesc: "Владение сообществом подтверждено, и сообщество прошло верификацию FindOTC.",
        benefitsTitle: "Почему важна верификация",
        benefitsText: "Верифицированные сообщества подтвердили свое владение и получают видимый статус верификации FindOTC. Это помогает пользователям находить официальные сообщества в каталоге и отличать их от копий или фейков.",
        benefit1: "Статус верификации",
        benefit2: "Пользовательский баннер в каталоге",
        benefit3: "Пользовательское описание",
        benefit4: "Участие в избранных мероприятиях FindOTC",
        benefit5: "Включение в папку верифицированных сообществ",
        folderTitle: "Папка верифицированных сообществ",
        folderText: "Верифицированные Telegram OTC сообщества можно найти вместе в одной удобной папке Telegram.",
        folderBtn: "Открыть папку",
        footerTitle: "Найдите свое следующее OTC сообщество.",
        footerSubtitle: "Исследуйте FindOTC.",
        footerBtn: "Открыть каталог →"
    }
};

// ==========================================
// 3. CORE LOGIC (DO NOT CHANGE BELOW UNLESS NECESSARY)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // Assign Links to Buttons
    document.getElementById("hero-btn").href = LINKS.mainDirectory;
    document.getElementById("footer-btn").href = LINKS.mainDirectory;
    document.getElementById("folder-btn").href = LINKS.verifiedFolder;

    // Language Switcher Logic
    let currentLang = "en";
    const langEnBtn = document.getElementById("lang-en");
    const langRuBtn = document.getElementById("lang-ru");

    function updateLanguage(lang) {
        currentLang = lang;
        langEnBtn.classList.toggle("active", lang === "en");
        langRuBtn.classList.toggle("active", lang === "ru");

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (TRANSLATIONS[lang][key]) {
                el.textContent = TRANSLATIONS[lang][key];
            }
        });
    }

    langEnBtn.addEventListener("click", () => updateLanguage("en"));
    langRuBtn.addEventListener("click", () => updateLanguage("ru"));

    // Scroll Reveal Animation (Fading items in as you scroll)
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // Counter Animation Logic
    function animateCounter(id, targetValue) {
        const element = document.getElementById(id);
        let start = 0;
        const duration = 1500; // 1.5 seconds
        const stepTime = Math.abs(Math.floor(duration / targetValue));
        
        const timer = setInterval(() => {
            start += 1;
            element.textContent = start;
            if (start >= targetValue) {
                element.textContent = targetValue;
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Trigger Counter when Stats section is visible
    let statsAnimated = false;
    const statsSection = document.getElementById("achievements");
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateCounter("stat-listed", FINDOTC_STATS.listed);
            animateCounter("stat-verified", FINDOTC_STATS.verified);
            animateCounter("stat-subs", FINDOTC_STATS.subscribers);
        }
    });
    if (statsSection) statsObserver.observe(statsSection);

    // Subtle Mobile-Safe Parallax
    const bgImage = document.querySelector('.bg-image');
    const bgWatermark = document.querySelector('.bg-watermark');
    window.addEventListener('scroll', () => {
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const scrollY = window.scrollY;
        if(bgImage) bgImage.style.transform = `translateY(${scrollY * 0.15}px)`;
        if(bgWatermark) bgWatermark.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.08}px))`;
    });
});
