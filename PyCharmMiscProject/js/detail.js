// Функция для получения параметров из URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id'),
        name: decodeURIComponent(params.get('name') || 'Неизвестная карта'),
        rarity: params.get('rarity') || 'common',
        elixir: params.get('elixir') || '4',
        image: decodeURIComponent(params.get('image') || '')
    };
}

// База данных характеристик карт (дополнительная информация)
const cardDetails = {
    1: {
        description: "Трое стрелков с дальним боем. Три стрелы лучше одной!",
        damage: "100",
        health: "300",
        speed: "Средняя",
        target: "Наземные и воздушные",
        range: "5.5 клеток",
        deployTime: "1 сек",
        abilities: [
            "Дальнобойная атака",
            "Атакует воздушные цели",
            "Три отдельных стрелка"
        ],
        strengths: ["Против воздушных", "Дальний бой", "Низкая стоимость"],
        weaknesses: ["Мало здоровья", "Уязвима к заклинаниям"],
        strategy: [
            "Используйте для защиты от воздушных атак",
            "Эффективны против одиночных целей",
            "Комбинируйте с танками"
        ]
    },
    2: {
        description: "Медленный, но очень живучий танк. Бросает камень по зданиям.",
        damage: "350",
        health: "2500",
        speed: "Медленная",
        target: "Здания",
        range: "Ближний бой",
        deployTime: "1 сек",
        abilities: [
            "Высокое здоровье",
            "Атакует только здания",
            "Бросает камни на расстояние"
        ],
        strengths: ["Высокое здоровье", "Против зданий", "Танк"],
        weaknesses: ["Медленный", "Не атакует войска"],
        strategy: [
            "Идеальный танк для атаки башен",
            "Используйте как щит для других войск",
            "Комбинируйте с поддержкой с воздуха"
        ]
    },
    // Добавьте детали для других карт по ID
};

// Генерация случайных характеристик для карт без данных
function generateRandomDetails(cardName, rarity) {
    const speeds = ["Медленная", "Средняя", "Быстрая", "Очень быстрая"];
    const targets = ["Наземные", "Воздушные", "Наземные и воздушные", "Здания", "Все цели"];
    const abilities = [
        ["Атака по площади", "Дальний бой", "Высокий урон"],
        ["Щит", "Воскрешение", "Призыв союзников"],
        ["Замедление", "Оглушение", "Отравление"],
        ["Невидимость", "Телепортация", "Лечение"]
    ];

    const damage = Math.floor(Math.random() * 800) + 50;
    const health = Math.floor(Math.random() * 3000) + 200;

    return {
        description: `${cardName} - уникальная карта с особыми способностями.`,
        damage: damage.toString(),
        health: health.toString(),
        speed: speeds[Math.floor(Math.random() * speeds.length)],
        target: targets[Math.floor(Math.random() * targets.length)],
        range: (Math.random() * 7 + 1).toFixed(1) + " клеток",
        deployTime: "1 сек",
        abilities: abilities[Math.floor(Math.random() * abilities.length)],
        strengths: ["Универсальность", "Баланс", "Тактическая ценность"],
        weaknesses: ["Высокая стоимость", "Уязвимость", "Сложность использования"],
        strategy: [
            "Используйте в правильный момент",
            "Комбинируйте с другими картами",
            "Адаптируйте под ситуацию на поле"
        ]
    };
}

// Загрузка детальной страницы
document.addEventListener('DOMContentLoaded', function() {
    const params = getQueryParams();
    const details = cardDetails[params.id] || generateRandomDetails(params.name, params.rarity);

    // Устанавливаем заголовок страницы
    document.title = `${params.name} | Детали карты`;

    // Создаем HTML для страницы
    const html = `
        <button class="back-button" onclick="window.close();">
            <i class="fas fa-arrow-left"></i>
        </button>

        <div class="card-header">
            <div class="card-image-container">
                <img src="${params.image}" alt="${params.name}" class="card-main-image"
                     onerror="this.src='https://via.placeholder.com/450x675/1C2E4A/FFFFFF?text=${encodeURIComponent(params.name)}'">
            </div>

            <div class="card-info">
                <div class="card-title">
                    <h1 class="card-name">${params.name}</h1>
                    <div class="card-rarity rarity-${params.rarity}">
                        ${getRarityName(params.rarity)}
                    </div>
                    <div class="card-elixir">${params.elixir}</div>
                </div>

                <p class="card-description">${details.description}</p>

                <div class="main-stats">
                    <div class="stat-card">
                        <div class="stat-icon">⚔️</div>
                        <div class="stat-value">${details.damage}</div>
                        <div class="stat-label">Урон в секунду</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">❤️</div>
                        <div class="stat-value">${details.health}</div>
                        <div class="stat-label">Здоровье</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">🏃</div>
                        <div class="stat-value">${details.speed}</div>
                        <div class="stat-label">Скорость</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">🎯</div>
                        <div class="stat-value">${details.target}</div>
                        <div class="stat-label">Цель</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="info-section">
            <h2 class="section-title">
                <i class="fas fa-star"></i>
                ХАРАКТЕРИСТИКИ
            </h2>
            <ul class="info-list">
                <li><i class="fas fa-ruler"></i> Дальность атаки: ${details.range}</li>
                <li><i class="fas fa-hourglass-half"></i> Время развертывания: ${details.deployTime}</li>
                <li><i class="fas fa-bolt"></i> Стоимость эликсира: ${params.elixir}</li>
                <li><i class="fas fa-shield-alt"></i> Редкость: ${getRarityName(params.rarity)}</li>
            </ul>
        </div>

        <div class="info-section">
            <h2 class="section-title">
                <i class="fas fa-magic"></i>
                СПОСОБНОСТИ
            </h2>
            <ul class="info-list">
                ${details.abilities.map(ability => `
                    <li><i class="fas fa-check"></i> ${ability}</li>
                `).join('')}
            </ul>
        </div>

        <div class="info-section">
            <h2 class="section-title">
                <i class="fas fa-chess-board"></i>
                СТРАТЕГИЯ ИСПОЛЬЗОВАНИЯ
            </h2>
            <ul class="info-list">
                ${details.strategy.map(tip => `
                    <li><i class="fas fa-lightbulb"></i> ${tip}</li>
                `).join('')}
            </ul>
        </div>

        <div class="strengths-weaknesses">
            <div>
                <h3 style="color: #00FF00; margin-bottom: 15px;">
                    <i class="fas fa-thumbs-up"></i> СИЛЬНЫЕ СТОРОНЫ
                </h3>
                <div class="strengths-grid">
                    ${details.strengths.map(strength => `
                        <div class="strength-item">
                            <i class="fas fa-check-circle"></i>
                            <div>${strength}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div>
                <h3 style="color: #FF0000; margin-bottom: 15px;">
                    <i class="fas fa-thumbs-down"></i> СЛАБЫЕ СТОРОНЫ
                </h3>
                <div class="weaknesses-grid">
                    ${details.weaknesses.map(weakness => `
                        <div class="weakness-item">
                            <i class="fas fa-times-circle"></i>
                            <div>${weakness}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('detailContainer').innerHTML = html;
});

// Вспомогательные функции
function getRarityName(rarity) {
    const names = {
        'common': 'ОБЫЧНАЯ',
        'rare': 'РЕДКАЯ',
        'epic': 'ЭПИЧЕСКАЯ',
        'legendary': 'ЛЕГЕНДАРНАЯ',
        'champion': 'ЧЕМПИОН'
    };
    return names[rarity] || rarity.toUpperCase();
}