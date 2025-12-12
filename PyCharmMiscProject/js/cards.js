// База данных всех 121 карт Clash Royale
const allCards = [
    // Обычные карты
    { id: 1, name: "Лучницы", rarity: "common", elixir: 3, image: "images/cards/001-archers.jpg" },
    { id: 2, name: "Электрический дух", rarity: "common", elixir: 1, image: "images/cards/002-el-spirit.jpg" },
    { id: 3, name: "Скелеты", rarity: "common", elixir: 1, image: "images/cards/003-skeletons.jpg" },
    { id: 4, name: "Огненный дух", rarity: "common", elixir: 1, image: "images/cards/004-fire-spirit.jpg" },
    { id: 5, name: "Ледяной дух", rarity: "common", elixir: 1, image: "images/cards/005-ice-spirit.jpg" },
    { id: 6, name: "Подрывник", rarity: "common", elixir: 2, image: "images/cards/006-bomber.jpg" },
    { id: 7, name: "Рыцарь", rarity: "common", elixir: 3, image: "images/cards/007-knight.jpg" },
    { id: 8, name: "Миньоны", rarity: "common", elixir: 3, image: "images/cards/008-minions.jpg" },
    { id: 9, name: "Гоблины", rarity: "common", elixir: 2, image: "images/cards/009-goblins.jpg" },
    { id: 10, name: "Гоблины-копейщики", rarity: "common", elixir: 2, image: "images/cards/010-goblins-cop.jpg" },
    { id: 11, name: "Летучие мыши", rarity: "common", elixir: 2, image: "images/cards/009-fly-mouses.jpg" },
    { id: 12, name: "Разряд", rarity: "common", elixir: 2, image: "images/cards/009-zap.jpg" },
    { id: 13, name: "Гигантский снежок", rarity: "common", elixir: 2, image: "images/cards/009-gigant-snezhok.jpg" },
    { id: 14, name: "Берсеркша", rarity: "common", elixir: 2, image: "images/cards/009-berserksha.jpg" },
    { id: 15, name: "Стрелы", rarity: "common", elixir: 3, image: "images/cards/009-strela.jpg" },
    { id: 16, name: "Пушка", rarity: "common", elixir: 3, image: "images/cards/009-pushka.jpg" },
    { id: 17, name: "Банда гоблинов", rarity: "common", elixir: 3, image: "images/cards/009-banda-gob.jpg" },
    { id: 18, name: "Бочка со скелетами", rarity: "common", elixir: 3, image: "images/cards/009-bochka-sk.jpg" },
    { id: 19, name: "Огненная лучница", rarity: "common", elixir: 3, image: "images/cards/009-fire-archer.jpg" },
    { id: 20, name: "Королевская почта", rarity: "common", elixir: 3, image: "images/cards/009-pochta.jpg" },
    { id: 21, name: "Костяные драконы", rarity: "common", elixir: 4, image: "images/cards/009-skeleton-dragons.jpg" },
    { id: 22, name: "Мортира", rarity: "common", elixir: 4, image: "images/cards/009-mortira.jpg" },
    { id: 23, name: "Тесла", rarity: "common", elixir: 4, image: "images/cards/009-tesla.jpg" },
    { id: 24, name: "Варвары", rarity: "common", elixir: 5, image: "images/cards/009-varvars.jpg" },
    { id: 25, name: "Орда миньонов", rarity: "common", elixir: 5, image: "images/cards/009-orda-minions.jpg" },
    { id: 26, name: "Разбойники", rarity: "common", elixir: 5, image: "images/cards/009-razboiniki.jpg" },
    { id: 27, name: "Королевский гигант", rarity: "common", elixir: 6, image: "images/cards/009-korgig.jpg" },
    { id: 28, name: "Элитные варвары", rarity: "common", elixir: 6, image: "images/cards/009-elit-varvars.jpg" },
    { id: 29, name: "Королевские рекруты", rarity: "common", elixir: 7, image: "images/cards/009-bomzhi.jpg" },

    // Редкие карты
    { id: 30, name: "Дух исцеления", rarity: "rare", elixir: 1, image: "images/cards/011-heal-spirit.jpg" },
    { id: 31, name: "Ледяной голем", rarity: "rare", elixir: 2, image: "images/cards/012-ice-golem.jpg" },
    { id: 32, name: "Подозрительный куст", rarity: "rare", elixir: 2, image: "images/cards/013-kust.jpg" },
    { id: 33, name: "Надгробие", rarity: "rare", elixir: 3, image: "images/cards/014-grob.jpg" },
    { id: 34, name: "Мегаминьон", rarity: "rare", elixir: 3, image: "images/cards/015-megaminion.jpg" },
    { id: 35, name: "Гоблин с дротиками", rarity: "rare", elixir: 3, image: "images/cards/016-drotist.jpg" },
    { id: 36, name: "Землетрясение", rarity: "rare", elixir: 3, image: "images/cards/017-earthshake.jpg" },
    { id: 37, name: "Элексирный голем", rarity: "rare", elixir: 3, image: "images/cards/018-elex-golem.jpg" },
    { id: 38, name: "Хижина гоблинов", rarity: "rare", elixir: 4, image: "images/cards/019-dom-goblins.jpg" },
    { id: 39, name: "Клетка с гоблином", rarity: "rare", elixir: 4, image: "images/cards/020-kletka-goblin.jpg" },
    { id: 40, name: "Огненный шар", rarity: "rare", elixir: 4, image: "images/cards/020-fireball.jpg" },
    { id: 41, name: "Валькирия", rarity: "rare", elixir: 4, image: "images/cards/020-valkire.jpg" },
    { id: 59, name: "Мушкетер", rarity: "rare", elixir: 4, image: "images/cards/020-musketer.jpg" },
    { id: 57, name: "Мини-П.Е.К.К.А.", rarity: "rare", elixir: 4, image: "images/cards/020-mini-peka.jpg" },
    { id: 42, name: "Боевой таран", rarity: "rare", elixir: 4, image: "images/cards/020-taran.jpg" },
    { id: 43, name: "Башня-бомбежка", rarity: "rare", elixir: 4, image: "images/cards/020-bombezhka-tower.jpg" },
    { id: 44, name: "Всадник на кабане", rarity: "rare", elixir: 4, image: "images/cards/020-hod-rider.jpg" },
    { id: 45, name: "Летучка", rarity: "rare", elixir: 4, image: "images/cards/020-letuchka.jpg" },
    { id: 46, name: "Целительница-воин", rarity: "rare", elixir: 4, image: "images/cards/020-health-war.jpg" },
    { id: 47, name: "Мини-генераторы", rarity: "rare", elixir: 4, image: "images/cards/020-mini-generators.jpg" },
    { id: 48, name: "Печь", rarity: "rare", elixir: 4, image: "images/cards/020-pech.jpg" },
    { id: 49, name: "Гоблин-подрывник", rarity: "rare", elixir: 4, image: "images/cards/020-goblin-podriv.jpg" },
    { id: 50, name: "Колдун", rarity: "rare", elixir: 5, image: "images/cards/020-koldun.jpg" },
    { id: 58, name: "Гигант", rarity: "rare", elixir: 5, image: "images/cards/020-gigant.jpg" },
    { id: 51, name: "Адская башня", rarity: "rare", elixir: 5, image: "images/cards/020-ad-tower.jpg" },
    { id: 52, name: "Королевские кабаны", rarity: "rare", elixir: 5, image: "images/cards/020-kor-cabani.jpg" },
    { id: 53, name: "Ракета", rarity: "rare", elixir: 6, image: "images/cards/020-raket.jpg" },
    { id: 54, name: "Хижина варваров", rarity: "rare", elixir: 6, image: "images/cards/020-dom-varvar.jpg" },
    { id: 55, name: "Сборщик элексира", rarity: "rare", elixir: 6, image: "images/cards/020-elexir.jpg" },
    { id: 56, name: "Три мушкетера", rarity: "rare", elixir: 9, image: "images/cards/020-three-mushket.jpg" },

    // Эпические карты
    { id: 60, name: "Зеркало", rarity: "epic", elixir: "?", image: "images/cards/021-pekka.jpg" },
    { id: 61, name: "Варварская бочка", rarity: "epic", elixir: 2, image: "images/cards/022-varvar-bochka.jpg" },
    { id: 62, name: "Стенобои", rarity: "epic", elixir: 2, image: "images/cards/023-wallbreakers.jpg" },
    { id: 63, name: "Ярость", rarity: "epic", elixir: 2, image: "images/cards/024-fear.jpg" },
    { id: 64, name: "Проклятие гоблинов", rarity: "epic", elixir: 2, image: "images/cards/025-goblin-prok.jpg" },
    { id: 65, name: "Армия скелетов", rarity: "epic", elixir: 3, image: "images/cards/026-arm-skeletons.jpg" },
    { id: 66, name: "Стражи", rarity: "epic", elixir: 3, image: "images/cards/027-guards.jpg" },
    { id: 67, name: "Гоблинская бочка", rarity: "epic", elixir: 3, image: "images/cards/028-goblin-bochka.jpg" },
    { id: 68, name: "Лоза", rarity: "epic", elixir: 3, image: "images/cards/029-loza.jpg" },
    { id: 69, name: "Торнадо", rarity: "epic", elixir: 3, image: "images/cards/030-tornado.jpg" },
    { id: 70, name: "Клон", rarity: "epic", elixir: 3, image: "images/cards/030-clone.jpg" },
    { id: 71, name: "Бездна", rarity: "epic", elixir: 3, image: "images/cards/030-bezdna.jpg" },
    { id: 72, name: "Дракончик", rarity: "epic", elixir: 4, image: "images/cards/030-dragon.jpg" },
    { id: 73, name: "Темный принц", rarity: "epic", elixir: 4, image: "images/cards/030-dark-prince.jpg" },
    { id: 74, name: "Заморозка", rarity: "epic", elixir: 4, image: "images/cards/030-freze.jpg" },
    { id: 75, name: "Руническая гигантша", rarity: "epic", elixir: 4, image: "images/cards/030-ru-gigant.jpg" },
    { id: 76, name: "Яд", rarity: "epic", elixir: 4, image: "images/cards/030-poison.jpg" },
    { id: 77, name: "Охотник", rarity: "epic", elixir: 4, image: "images/cards/030-hunter.jpg" },
    { id: 78, name: "Гоблинский бур", rarity: "epic", elixir: 4, image: "images/cards/030-goblin-bur.jpg" },
    { id: 79, name: "Ведьма", rarity: "epic", elixir: 5, image: "images/cards/030-witch.jpg" },
    { id: 80, name: "Шар", rarity: "epic", elixir: 5, image: "images/cards/030-baloon.jpg" },
    { id: 81, name: "Принц", rarity: "epic", elixir: 5, image: "images/cards/030-prince.jpg" },
    { id: 82, name: "Электродракон", rarity: "epic", elixir: 5, image: "images/cards/030-el-dragon.jpg" },
    { id: 83, name: "Вышибала", rarity: "epic", elixir: 5, image: "images/cards/030-bowler.jpg" },
    { id: 84, name: "Палач", rarity: "epic", elixir: 5, image: "images/cards/030-palach.jpg" },
    { id: 85, name: "Повозка с пушкой", rarity: "epic", elixir: 5, image: "images/cards/030-pushka-pov.jpg" },
    { id: 86, name: "Гигантский скелет", rarity: "epic", elixir: 6, image: "images/cards/030-gigskelet.jpg" },
    { id: 87, name: "Молния", rarity: "epic", elixir: 6, image: "images/cards/030-lightning.jpg" },
    { id: 88, name: "Гоблин-гигант", rarity: "epic", elixir: 6, image: "images/cards/030-giggoblin.jpg" },
    { id: 89, name: "Арбалет", rarity: "epic", elixir: 6, image: "images/cards/030-x-bow.jpg" },
    { id: 90, name: "П.Е.К.К.А.", rarity: "epic", elixir: 7, image: "images/cards/030-pekka.jpg" },
    { id: 91, name: "Электрогигант", rarity: "epic", elixir: 7, image: "images/cards/030-elgigant.jpg" },
    { id: 92, name: "Голем", rarity: "epic", elixir: 8, image: "images/cards/030-golem.jpg" },

    // Легендарные карты
    { id: 93, name: "Бревно", rarity: "legendary", elixir: 2, image: "images/cards/031-wood.jpg" },
    { id: 94, name: "Принцесса", rarity: "legendary", elixir: 3, image: "images/cards/032-princese.jpg" },
    { id: 95, name: "Шахтер", rarity: "legendary", elixir: 3, image: "images/cards/033-shahter.jpg" },
    { id: 96, name: "Ледяной колдун", rarity: "legendary", elixir: 3, image: "images/cards/034-ice-withard.jpg" },
    { id: 97, name: "Королевский призрак", rarity: "legendary", elixir: 3, image: "images/cards/035-kor-prizrak.jpg" },
    { id: 98, name: "Бандитка", rarity: "legendary", elixir: 3, image: "images/cards/036-banditka.jpg" },
    { id: 99, name: "Рыбак", rarity: "legendary", elixir: 3, image: "images/cards/037-fisher.jpg" },
    { id: 100, name: "Пламенный дракон", rarity: "legendary", elixir: 4, image: "images/cards/038-pl-dragon.jpg" },
    { id: 101, name: "Громовержец", rarity: "legendary", elixir: 4, image: "images/cards/039-grom.jpg" },
    { id: 102, name: "Феникс", rarity: "legendary", elixir: 4, image: "images/cards/040-phenix.jpg" },
    { id: 103, name: "Магический лучник", rarity: "legendary", elixir: 4, image: "images/cards/040-mag-archer.jpg" },
    { id: 104, name: "Дровосек", rarity: "legendary", elixir: 4, image: "images/cards/040-drovosek.jpg" },
    { id: 105, name: "Ночная ведьма", rarity: "legendary", elixir: 4, image: "images/cards/040-night-witch.jpg" },
    { id: 106, name: "Ведьмина бабушка", rarity: "legendary", elixir: 4, image: "images/cards/040-babka.jpg" },
    { id: 107, name: "Всадница на баране", rarity: "legendary", elixir: 5, image: "images/cards/040-vsadnitsa.jpg" },
    { id: 108, name: "Кладбище", rarity: "legendary", elixir: 5, image: "images/cards/040-kladba.jpg" },
    { id: 109, name: "Гоблинская машина", rarity: "legendary", elixir: 5, image: "images/cards/040-goblin-machine.jpg" },
    { id: 110, name: "Спарки", rarity: "legendary", elixir: 6, image: "images/cards/040-sparki.jpg" },
    { id: 111, name: "Императрица духов", rarity: "legendary", elixir: 6, image: "images/cards/040-imperatritsa.jpg" },
    { id: 112, name: "Мегарыцарь", rarity: "legendary", elixir: 7, image: "images/cards/040-megaknight.jpg" },
    { id: 113, name: "Адская гонча", rarity: "legendary", elixir: 7, image: "images/cards/040-wolarbb.jpg" },

    // Чемпионы
    { id: 114, name: "Маленький принц", rarity: "champion", elixir: 3, image: "images/cards/041-small-prince.jpg" },
    { id: 115, name: "Король скелетов", rarity: "champion", elixir: 4, image: "images/cards/042-skeleton-king.jpg" },
    { id: 116, name: "Золотой рыцарь", rarity: "champion", elixir: 4, image: "images/cards/043-golden-knight.jpg" },
    { id: 117, name: "Шустрый шахтер", rarity: "champion", elixir: 4, image: "images/cards/044-shahter.jpg" },
    { id: 118, name: "Королева лучниц", rarity: "champion", elixir: 5, image: "images/cards/044-koroleva.jpg" },
    { id: 119, name: "Монах", rarity: "champion", elixir: 5, image: "images/cards/044-monk.jpg" },
    { id: 120, name: "Гоблинштейн", rarity: "champion", elixir: 5, image: "images/cards/044-goblinshteyn.jpg" },
    { id: 121, name: "Главная бандитка", rarity: "champion", elixir: 6, image: "images/cards/044-glav-bandit.jpg" },

];

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    // Показываем все карты
    renderCards(allCards);
    
    // Настраиваем фильтры
    setupFilters();
    
    // Настраиваем поиск
    setupSearch();
});

// Рендер карточек
function renderCards(cards) {
    const container = document.getElementById('cardsGrid');
    container.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `card-item ${card.rarity}`;
        cardElement.dataset.id = card.id;
        cardElement.dataset.name = card.name.toLowerCase();
        cardElement.dataset.rarity = card.rarity;
        cardElement.dataset.elixir = card.elixir;
        
        // Используем placeholder если изображение не загрузилось
        const img = new Image();
        img.src = card.image;
        img.alt = card.name;
        img.className = 'card-image';
        
        img.onerror = function() {
            // Если изображение не найдено, показываем ошибку
            this.src = `https://via.placeholder.com/300x400/1C2E4A/FFFFFF?text=Ошибка+загрузки`;
        };
        
            
    const rarityColor = getRarityColor(card.rarity);
        
        cardElement.innerHTML = `
            <div class="elixir-cost">${card.elixir}</div>
            ${img.outerHTML}
            <div style="
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: ${rarityColor}CC; /* CC = 80% opacity */
                color: ${getTextColorForRarity(card.rarity)};
                padding: 12px 5px;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
                z-index: 2;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                border-top: 2px solid ${darkenColor(rarityColor, 20)};">
                ${card.name}
            </div>
        `;
        
        // Добавляем обработчик клика
        cardElement.addEventListener('click', () => openCardDetail(card));
        
        container.appendChild(cardElement);
    });
    
    // Обновляем счетчики
    updateStats(cards.length);
}

// Функция для получения цвета в зависимости от редкости
function getRarityColor(rarity) {
    const colors = {
        'common': '#B9C2C7',      // Серый
        'rare': '#4CB5FF',        // Голубой
        'epic': '#C14FFF',        // Фиолетовый
        'legendary': '#FFD700',   // Золотой
        'champion': '#FF6B6B'     // Красный
    };
    return colors[rarity] || '#B9C2C7';
}

// Функция для определения цвета текста (светлый или темный)
function getTextColorForRarity(rarity) {
    const rarityColors = getRarityColor(rarity);
    
    // Преобразуем HEX в RGB
    const hex = rarityColors.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Вычисляем яркость (формула восприятия яркости)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Если яркость больше 128 - используем темный текст, иначе светлый
    return brightness > 128 ? '#0A1428' : '#FFFFFF';
}

// Функция для затемнения цвета
function darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    
    return "#" + (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
}

// Настройка фильтров
function setupFilters() {
    const filterButtons = document.querySelectorAll('.rarity-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем активный класс текущей кнопке
            this.classList.add('active');

            // Фильтруем карты
            const rarity = this.getAttribute('data-rarity');
            filterCardsByRarity(rarity);
        });
    });
}

// Фильтрация по редкости
function filterCardsByRarity(rarity) {
    let filteredCards;

    if (rarity === 'all') {
        filteredCards = allCards;
    } else {
        filteredCards = allCards.filter(card => card.rarity === rarity);
    }

    // Применяем текущий поиск
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filteredCards = filteredCards.filter(card =>
            card.name.toLowerCase().includes(searchTerm)
        );
    }

    renderCards(filteredCards);
}

// Настройка поиска
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;

    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            const searchTerm = this.value.toLowerCase();
            const activeRarity = document.querySelector('.rarity-btn.active').getAttribute('data-rarity');

            let filteredCards = allCards;

            // Применяем фильтр по редкости
            if (activeRarity !== 'all') {
                filteredCards = filteredCards.filter(card => card.rarity === activeRarity);
            }

            // Применяем поиск
            if (searchTerm) {
                filteredCards = filteredCards.filter(card =>
                    card.name.toLowerCase().includes(searchTerm)
                );
            }

            renderCards(filteredCards);
        }, 300);
    });
}

// Открытие детальной страницы карты
function openCardDetail(card) {
    // Создаем строку запроса для передачи данных
    const params = new URLSearchParams({
        id: card.id,
        name: encodeURIComponent(card.name),
        rarity: card.rarity,
        elixir: card.elixir,
        image: encodeURIComponent(card.image)
    });

    // Открываем детальную страницу
    window.open(`card-detail.html?${params.toString()}`, '_blank');
}

// Вспомогательные функции
function getRarityName(rarity) {
    const names = {
        'common': 'ОБЫЧ.',
        'rare': 'РЕДК.',
        'epic': 'ЭПИЧ.',
        'legendary': 'ЛЕГ.',
        'champion': 'ЧЕМП.'
    };
    return names[rarity] || rarity.toUpperCase();
}

function updateStats(count) {
    document.getElementById('shownCards').textContent = count;
    document.getElementById('footerCardCount').textContent = allCards.length;
}