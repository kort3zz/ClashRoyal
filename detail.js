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
    },
    2: {
        description: "Медленный, но очень живучий танк. Бросает камень по зданиям.",
        damage: "350",
        health: "2500",
        speed: "Медленная",
        target: "Здания",
        range: "Ближний бой",
        deployTime: "1 сек",
    },
    
    // Добавьте детали для других карт по ID
};


// Генерация случайных характеристик для карт без данных


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
                <li><i class="fas fa-hourglass-half"></i> Скорость атаки: ${details.deployTime}</li>
                <li><i class="fas fa-bolt"></i> Стоимость эликсира: ${params.elixir}</li>
                <li><i class="fas fa-shield-alt"></i> Редкость: ${getRarityName(params.rarity)}</li>
            </ul>
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