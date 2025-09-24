// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Навигация между разделами
    const navLinks = document.querySelectorAll('.bio-nav a');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Убираем активный класс у всех ссылок и секций
            navLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            // Добавляем активный класс к текущей ссылке
            this.classList.add('active');
            
            // Показываем соответствующую секцию
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Добавляем больше звезд для более реалистичного эффекта
    function addMoreStars() {
        const starsContainer = document.getElementById('stars');
        const starsContainer2 = document.getElementById('stars2');
        const starsContainer3 = document.getElementById('stars3');
        
        // Очищаем существующие звезды
        starsContainer.innerHTML = '';
        starsContainer2.innerHTML = '';
        starsContainer3.innerHTML = '';
        
        // Создаем звезды для первого слоя
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = '1px';
            star.style.height = '1px';
            star.style.backgroundColor = 'white';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            starsContainer.appendChild(star);
        }
        
        // Создаем звезды для второго слоя
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = '2px';
            star.style.height = '2px';
            star.style.backgroundColor = 'white';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            starsContainer2.appendChild(star);
        }
        
        // Создаем звезды для третьего слоя
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = '3px';
            star.style.height = '3px';
            star.style.backgroundColor = 'white';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            starsContainer3.appendChild(star);
        }
    }
    
    // Инициализируем звезды
    addMoreStars();
});
