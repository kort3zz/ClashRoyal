// База данных всех 121 карт Clash Royale
const allCards = [
    // Обычные карты
    { id: 1, name: "Стрелки", rarity: "common", elixir: 3, image: "images/cards/001-archers.jpg" },
    { id: 2, name: "Огр", rarity: "common", elixir: 5, image: "images/cards/002-ogre.jpg" },
    { id: 3, name: "Скелеты", rarity: "common", elixir: 1, image: "images/cards/003-skeletons.jpg" },
    { id: 4, name: "Огненный дух", rarity: "common", elixir: 1, image: "images/cards/004-fire-spirit.jpg" },
    { id: 5, name: "Минион", rarity: "common", elixir: 3, image: "images/cards/005-minion.jpg" },
    { id: 6, name: "Бомбардир", rarity: "common", elixir: 3, image: "images/cards/006-bomber.jpg" },
    { id: 7, name: "Рыцарь", rarity: "common", elixir: 3, image: "images/cards/007-knight.jpg" },
    { id: 8, name: "Летающие миньоны", rarity: "common", elixir: 5, image: "images/cards/008-minion-horde.jpg" },
    { id: 9, name: "Ведьма", rarity: "common", elixir: 5, image: "images/cards/009-witch.jpg" },
    { id: 10, name: "Мини-пекка", rarity: "common", elixir: 4, image: "images/cards/010-mini-pekka.jpg" },

    // Редкие карты
    { id: 11, name: "Огненный шар", rarity: "rare", elixir: 4, image: "images/cards/011-fireball.jpg" },
    { id: 12, name: "Валькирия", rarity: "rare", elixir: 4, image: "images/cards/012-valkyrie.jpg" },
    { id: 13, name: "Мега-рыцарь", rarity: "rare", elixir: 7, image: "images/cards/013-mega-knight.jpg" },
    { id: 14, name: "Маг", rarity: "rare", elixir: 5, image: "images/cards/014-wizard.jpg" },
    { id: 15, name: "Гоблины", rarity: "rare", elixir: 2, image: "images/cards/015-goblins.jpg" },
    { id: 16, name: "Воздушный шар", rarity: "rare", elixir: 5, image: "images/cards/016-balloon.jpg" },
    { id: 17, name: "Принц", rarity: "rare", elixir: 5, image: "images/cards/017-prince.jpg" },
    { id: 18, name: "Охотник", rarity: "rare", elixir: 4, image: "images/cards/018-hunter.jpg" },
    { id: 19, name: "Ледяной голем", rarity: "rare", elixir: 2, image: "images/cards/019-ice-golem.jpg" },
    { id: 20, name: "Мушкетер", rarity: "rare", elixir: 4, image: "images/cards/020-musketeer.jpg" },

    // Эпические карты
    { id: 21, name: "Пекка", rarity: "epic", elixir: 7, image: "images/cards/021-pekka.jpg" },
    { id: 22, name: "Голем", rarity: "epic", elixir: 8, image: "images/cards/022-golem.jpg" },
    { id: 23, name: "Ведьма ночи", rarity: "epic", elixir: 4, image: "images/cards/023-night-witch.jpg" },
    { id: 24, name: "Темный принц", rarity: "epic", elixir: 4, image: "images/cards/024-dark-prince.jpg" },
    { id: 25, name: "Шаровая молния", rarity: "epic", elixir: 6, image: "images/cards/025-lightning.jpg" },
    { id: 26, name: "Гвардия", rarity: "epic", elixir: 3, image: "images/cards/026-guards.jpg" },
    { id: 27, name: "Яд", rarity: "epic", elixir: 4, image: "images/cards/027-poison.jpg" },
    { id: 28, name: "Клон", rarity: "epic", elixir: 3, image: "images/cards/028-clone.jpg" },
    { id: 29, name: "Гоблинская бочка", rarity: "epic", elixir: 3, image: "images/cards/029-goblin-barrel.jpg" },
    { id: 30, name: "Торнадо", rarity: "epic", elixir: 3, image: "images/cards/030-tornado.jpg" },

    // Легендарные карты
    { id: 31, name: "Ледяной волшебник", rarity: "legendary", elixir: 3, image: "images/cards/031-ice-wizard.jpg" },
    { id: 32, name: "Волшебный лучник", rarity: "legendary", elixir: 6, image: "images/cards/032-magic-archer.jpg" },
    { id: 33, name: "Лава-гончая", rarity: "legendary", elixir: 7, image: "images/cards/033-lava-hound.jpg" },
    { id: 34, name: "Бревно", rarity: "legendary", elixir: 2, image: "images/cards/034-the-log.jpg" },
    { id: 35, name: "Лесной дух", rarity: "legendary", elixir: 1, image: "images/cards/035-forest-spirit.jpg" },
    { id: 36, name: "Электродракон", rarity: "legendary", elixir: 5, image: "images/cards/036-electro-dragon.jpg" },
    { id: 37, name: "Граф Дракула", rarity: "legendary", elixir: 5, image: "images/cards/037-count-dracula.jpg" },
    { id: 38, name: "Монолит", rarity: "legendary", elixir: 4, image: "images/cards/038-monolith.jpg" },
    { id: 39, name: "Феникс", rarity: "legendary", elixir: 4, image: "images/cards/039-phoenix.jpg" },
    { id: 40, name: "Скелет-король", rarity: "legendary", elixir: 4, image: "images/cards/040-skeleton-king.jpg" },

    // Чемпионы
    { id: 41, name: "Золотой рыцарь", rarity: "champion", elixir: 4, image: "images/cards/041-golden-knight.jpg" },
    { id: 42, name: "Скелеты-короли", rarity: "champion", elixir: 5, image: "images/cards/042-skeleton-kings.jpg" },
    { id: 43, name: "Лесная нимфа", rarity: "champion", elixir: 5, image: "images/cards/043-forest-nymph.jpg" },
    { id: 44, name: "Монах", rarity: "champion", elixir: 5, image: "images/cards/044-monk.jpg" },

    // Добавьте остальные карты до 121
    // { id: 45, name: "Гигант", rarity: "rare", elixir: 5, image: "images/cards/045-giant.jpg" },
    // ... и так далее до 121
];

// Функция для генерации недостающих карт (для демонстрации)
function generateRemainingCards() {
    const rarities = ["common", "rare", "epic", "legendary", "champion"];
    const names = [
        "Гигант", "Хог Райдер", "Три мушкетера", "Лавалун", "Электроволшебник",
        "Ледяной дух", "Зомби", "Вампир", "Дракон", "Грифон", "Единорог", "Циклоп",
        "Гарпия", "Кентавр", "Минотавр", "Медуза", "Феникс", "Голем", "Титан"
    ];

    for (let i = allCards.length + 1; i <= 121; i++) {
        const rarity = rarities[Math.floor(Math.random() * rarities.length)];
        const name = names[Math.floor(Math.random() * names.length)] + " " + i;
        const elixir = Math.floor(Math.random() * 8) + 1;

        allCards.push({
            id: i,
            name: name,
            rarity: rarity,
            elixir: elixir,
            image: `images/cards/card-${i.toString().padStart(3, '0')}.jpg`
        });
    }
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    // Генерируем недостающие карты
    if (allCards.length < 121) {
        generateRemainingCards();
    }

    // Отображаем все карты
    renderCards(allCards);

    // Настраиваем фильтры
    setupFilters();

    // Настраиваем поиск
    setupSearch();

    // Обновляем статистику
    updateStats(allCards.length);
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
            // Если изображение не найдено, используем цветной placeholder
            const colors = {
                common: '#B9C2C7',
                rare: '#4CB5FF',
                epic: '#C14FFF',
                legendary: '#FFD700',
                champion: '#FF6B6B'
            };
            this.src = `https://via.placeholder.com/300x400/${colors[card.rarity].substring(1)}/FFFFFF?text=${encodeURIComponent(card.name)}`;
        };

        cardElement.innerHTML = `
            <div class="elixir-cost">${card.elixir}</div>
            ${img.outerHTML}
            <div class="rarity-indicator ${card.rarity}">
                ${getRarityName(card.rarity)}
            </div>
        `;

        // Добавляем обработчик клика
        cardElement.addEventListener('click', () => openCardDetail(card));

        container.appendChild(cardElement);
    });

    // Обновляем счетчики
    updateStats(cards.length);
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