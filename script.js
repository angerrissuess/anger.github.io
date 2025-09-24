// Защита от ПКМ и клавиш
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    window.location.href = 'https://zvukipro.com/games/4597-muzyka-iz-igry-minecraft.html'; // Замени на свою ссылку
});

// Защита от DevTools (F12, Ctrl+Shift+I)
document.addEventListener('keydown', function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        window.location.href = 'https://zvukipro.com/games/4597-muzyka-iz-igry-minecraft.html'; // Замени на свою ссылку
    }
});

// Защита от копирования
document.addEventListener('copy', function(e) {
    e.preventDefault();
    window.location.href = 'https://zvukipro.com/games/4597-muzyka-iz-igry-minecraft.html'; // Замени на свою ссылку
});

// Дополнительная защита от открытия DevTools
setInterval(function() {
    debugger;
}, 1000);

// Защита от отключения JavaScript в браузере
document.write('<noscript><meta http-equiv="refresh" content="0; url=https://zvukipro.com/games/4597-muzyka-iz-igry-minecraft.html"></noscript>');



//

// ===== ФУНКЦИЯ САМОУНИЧТОЖЕНИЯ САЙТА =====
function destroySite(message = "⚠️ ACCESS VIOLATION DETECTED ⚠️") {
    // Сохраняем оригинальный контент
    const originalBody = document.body.innerHTML;
    const originalTitle = document.title;
    
    // Очищаем всю страницу
    document.body.innerHTML = '';
    document.body.style.cssText = `
        background: #000;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Jersey 10', sans-serif;
        overflow: hidden;
        cursor: none;
    `;
    
    // Создаем мигающий текст
    const warningText = document.createElement('div');
    warningText.textContent = message;
    warningText.style.cssText = `
        color: #ff0000;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        animation: blink 0.8s infinite;
        text-shadow: 0 0 15px #ff0000, 0 0 30px #ff0000;
        z-index: 9999;
        padding: 30px;
        border: 3px solid #ff0000;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 10px;
    `;
    
    // Добавляем анимацию мигания
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; transform: scale(1.05); }
            51%, 100% { opacity: 0.7; transform: scale(1); }
        }
        
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 3px,
                rgba(255, 0, 0, 0.1) 3px,
                rgba(255, 0, 0, 0.1) 6px
            );
            animation: scan 8s linear infinite;
            z-index: -1;
        }
        
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(warningText);
    
    // Запрещаем все действия на странице
    document.addEventListener('keydown', (e) => e.preventDefault());
    document.addEventListener('mousedown', (e) => e.preventDefault());
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Блокируем возможность вернуться
    history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', () => {
        history.pushState(null, null, window.location.href);
    });
    
    // Сохраняем оригинальный контент
    document.body.setAttribute('data-original-content', btoa(originalBody));
    document.body.setAttribute('data-original-title', originalTitle);
}

// ===== ОБНОВЛЯЕМ СУЩЕСТВУЮЩУЮ ЗАЩИТУ =====
// Заменяем перенаправление на функцию уничтожения

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    destroySite("🚫 UNAUTHORIZED RIGHT CLICK 🚫");
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        destroySite("🔐 DEVELOPER TOOLS BLOCKED 🔐");
    }
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    destroySite("📋 COPYING FORBIDDEN 📋");
});

document.addEventListener('cut', function(e) {
    e.preventDefault();
    destroySite("✂️ CUTTING FORBIDDEN ✂️");
});

// Защита от выделения текста
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    destroySite("🔍 TEXT SELECTION BLOCKED 🔍");
});

// Дополнительная защита от DevTools (оставляем)
setInterval(function() {
    debugger;
}, 1000);

//


// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Навигация между разделами
    const navLinks = document.querySelectorAll('.bio-nav a');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Плавное переключение секций
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Убираем активный класс у всех ссылок
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Добавляем активный класс к текущей ссылке
            this.classList.add('active');
            
            // Плавное скрытие текущей активной секции
            const currentActive = document.querySelector('.content-section.active');
            if (currentActive) {
                currentActive.style.opacity = 0;
                currentActive.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    currentActive.classList.remove('active');
                    
                    // Показываем целевую секцию
                    targetSection.classList.add('active');
                    setTimeout(() => {
                        targetSection.style.opacity = 1;
                        targetSection.style.transform = 'translateY(0)';
                    }, 50);
                }, 300);
            }
        });
    });
    
    // Создаем звездное небо с параллакс-эффектом и мерцанием
    function createStars() {
        const starsContainer = document.getElementById('stars');
        const starsContainer2 = document.getElementById('stars2');
        const starsContainer3 = document.getElementById('stars3');
        
        // Очищаем существующие звезды
        starsContainer.innerHTML = '';
        starsContainer2.innerHTML = '';
        starsContainer3.innerHTML = '';
        
        // Количество звезд для каждого слоя
        const starsCount = [200, 100, 50];
        const sizes = [1, 2, 3];
        const opacities = [0.3, 0.5, 0.8];
        const containers = [starsContainer, starsContainer2, starsContainer3];
        
        // Создаем звезды для каждого слоя
        containers.forEach((container, index) => {
            for (let i = 0; i < starsCount[index]; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Случайные позиции
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                star.style.position = 'absolute';
                star.style.width = `${sizes[index]}px`;
                star.style.height = `${sizes[index]}px`;
                star.style.backgroundColor = 'white';
                star.style.borderRadius = '50%';
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.opacity = opacities[index];
                star.style.boxShadow = `0 0 ${sizes[index]*3}px rgba(255, 255, 255, 0.8)`;
                star.style.transition = 'transform 0.1s linear';
                
                // Случайная задержка анимации для каждой звезды
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                container.appendChild(star);
            }
        });
    }
    
    // Параллакс-эффект при движении мыши
    function initParallax() {
        const starsLayers = [
            document.getElementById('stars'),
            document.getElementById('stars2'), 
            document.getElementById('stars3')
        ];
        
        // Коэффициенты смещения для каждого слоя (чем дальше слой, тем меньше смещение)
        const coefficients = [0.02, 0.01, 0.005];
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            starsLayers.forEach((layer, index) => {
                const moveX = mouseX * coefficients[index] * 100;
                const moveY = mouseY * coefficients[index] * 100;
                
                layer.style.transform = `translate(${moveX}%, ${moveY}%)`;
            });
        });
        
        // Сброс позиции при уходе мыши с окна
        document.addEventListener('mouseleave', () => {
            starsLayers.forEach(layer => {
                layer.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    // Фоновая музыка
    function initBackgroundMusic() {
        const audio = new Audio();
        audio.src = 'sound.mp3';
        audio.loop = true;
        audio.volume = 0.7; 
        
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Автовоспроизведение заблокировано, ждем взаимодействия...');
                
                const startMusic = () => {
                    audio.play();
                    document.removeEventListener('click', startMusic);
                    document.removeEventListener('keydown', startMusic);
                };
                
                document.addEventListener('click', startMusic);
                document.addEventListener('keydown', startMusic);
            });
        }
    }

    // Инициализация
    createStars();
    initParallax();
    initBackgroundMusic();
    
    // Плавное появление страницы
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
    
    // Добавляем начальную анимацию для основного контейнера
    const bioContainer = document.querySelector('.bio-container');
    bioContainer.style.opacity = 0;
    bioContainer.style.transform = 'translateY(20px) scale(0.95)';
    
    setTimeout(() => {
        bioContainer.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        bioContainer.style.opacity = 1;
        bioContainer.style.transform = 'translateY(0) scale(1)';
    }, 300);
    
    // Добавляем анимацию для элементов при прокрутке
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.stat-item, .project-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализируем анимацию при загрузке
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Изначально скрываем элементы для анимации
    document.querySelectorAll('.stat-item, .project-card').forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
});
