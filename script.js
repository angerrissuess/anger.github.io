


document.addEventListener('keydown', function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        window.open('https://t.me/angerr_issuess', '_blank', 'noopener,noreferrer');
    }
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    window.open('https://t.me/angerr_issuess', '_blank', 'noopener,noreferrer');
});

// Функция для случайных цитат
function initRandomQuotes() {
    const quotes = [
        "sometimes it seems impossible to escape the pain",
        "the stars shine brighter in the darkness",
        "every ending is a new beginning",
        "lost in the silence of my thoughts",
        "the night speaks when the day is silent",
        "broken but still breathing",
        "searching for peace in the chaos",
        "the weight of memories keeps me grounded",
        "empty spaces filled with echoes",
        "drowning in a sea of what ifs"
    ];
    
    const quoteElement = document.querySelector('.tagline');
    if (quoteElement) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }
}

// Вызовите функцию при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initRandomQuotes();
    // остальной ваш код...
});


//


function destroySite(message = "") {
    
    const originalBody = document.body.innerHTML;
    const originalTitle = document.title;
    
    
    document.body.innerHTML = '';
    document.body.style.cssText = `
        background: #000000;
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
        overflow: hidden;
        cursor: none;
    `;
    
 
    const warningText = document.createElement('div');
    warningText.textContent = message;
    warningText.style.cssText = `
        color: #ffffff;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        animation: blink 0.6s infinite;
        z-index: 9999;
        padding: 20px;
        line-height: 1.5;
        max-width: 90%;
        word-wrap: break-word;
    `;
    
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(warningText);
    
    
    document.addEventListener('keydown', (e) => e.preventDefault());
    document.addEventListener('mousedown', (e) => e.preventDefault());
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    
    history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', () => {
        history.pushState(null, null, window.location.href);
    });
    
    
    document.body.setAttribute('data-original-content', btoa(originalBody));
    document.body.setAttribute('data-original-title', originalTitle);
}


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        destroySite("nice try little nigga LOL >.< monkey nigga gang all the way grahhhhhh dumbyyyyy kuyo was here oh yeahhh gg/chiterl hahha");
    }
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
    destroySite("nice try little nigga LOL >.< monkey nigga gang all the way grahhhhhh dumbyyyyy kuyo was here oh yeahhh gg/chiterl hahha");
});

document.addEventListener('cut', function(e) {
    e.preventDefault();
    destroySite("nice try little nigga LOL >.< monkey nigga gang all the way grahhhhhh dumbyyyyy kuyo was here oh yeahhh gg/chiterl hahha");
});


setInterval(function() {
    debugger;
}, 1000);


//


// script.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Система комментариев
// Заменяем функцию initCommentsSystem() на эту:

function initCommentsSystem() {
    const commentsList = document.getElementById('comments-list');
    const commentForm = document.querySelector('.comment-form');
    
    if (!commentsList || !commentForm) return;
    
    // Показываем инструкцию
    commentsList.innerHTML = `
        <div style="text-align: center; padding: 20px; color: #666;">
            <p>💬 Comments are stored in browser localStorage</p>
            <p>📱 Only visible in this browser on this device</p>
            <p>🌐 For public comments use Telegram: <a href="https://t.me/angerr_issuess" target="_blank">@angerr_issuess</a></p>
        </div>
    `;
    
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
        if (comments.length > 0) {
            displayComments(comments);
        }
    }
    
    function displayComments(comments) {
        commentsList.innerHTML = '';
        
        comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item';
            commentElement.innerHTML = `
                <div class="comment-author">${escapeHtml(comment.name)}</div>
                <div class="comment-text">${escapeHtml(comment.text)}</div>
                <div class="comment-date">${new Date(comment.date).toLocaleDateString()}</div>
            `;
            commentsList.appendChild(commentElement);
        });
    }
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('comment-name');
        const textInput = document.getElementById('comment-text');
        
        const name = nameInput.value.trim();
        const text = textInput.value.trim();
        
        if (!name || !text) {
            alert('Please fill in all fields');
            return;
        }
        
        const comments = JSON.parse(localStorage.getItem('siteComments') || '[]');
        const newComment = {
            name: name,
            text: text,
            date: new Date().toISOString()
        };
        
        comments.push(newComment);
        localStorage.setItem('siteComments', JSON.stringify(comments));
        
        displayComments(comments);
        
        nameInput.value = '';
        textInput.value = '';
        
        alert('Comment saved locally! Others won\\'t see it.');
    });
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    loadComments();
}
    // Система комментариев
    
    const navLinks = document.querySelectorAll('.bio-nav a');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            
            navLinks.forEach(l => l.classList.remove('active'));
            
            
            this.classList.add('active');
            
            
            const currentActive = document.querySelector('.content-section.active');
            if (currentActive) {
                currentActive.style.opacity = 0;
                currentActive.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    currentActive.classList.remove('active');
                    
                    
                    targetSection.classList.add('active');
                    setTimeout(() => {
                        targetSection.style.opacity = 1;
                        targetSection.style.transform = 'translateY(0)';
                    }, 50);
                }, 300);
            }
        });
    });
    
    
    function createStars() {
        const starsContainer = document.getElementById('stars');
        const starsContainer2 = document.getElementById('stars2');
        const starsContainer3 = document.getElementById('stars3');
        
        
        starsContainer.innerHTML = '';
        starsContainer2.innerHTML = '';
        starsContainer3.innerHTML = '';
        
      
        const starsCount = [200, 100, 50];
        const sizes = [1, 2, 3];
        const opacities = [0.3, 0.5, 0.8];
        const containers = [starsContainer, starsContainer2, starsContainer3];
        
       
        containers.forEach((container, index) => {
            for (let i = 0; i < starsCount[index]; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
               
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
                
                
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                container.appendChild(star);
            }
        });
    }
    
    
    function initParallax() {
        const starsLayers = [
            document.getElementById('stars'),
            document.getElementById('stars2'), 
            document.getElementById('stars3')
        ];
        
       
        const coefficients = [0.05, 0.03, 0.015];
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            starsLayers.forEach((layer, index) => {
                const moveX = mouseX * coefficients[index] * 100;
                const moveY = mouseY * coefficients[index] * 100;
                
                layer.style.transform = `translate(${moveX}%, ${moveY}%)`;
            });
        });
        
       
        document.addEventListener('mouseleave', () => {
            starsLayers.forEach(layer => {
                layer.style.transform = 'translate(0, 0)';
            });
        });
    }
    

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

    initCommentsSystem();
    createStars();
    initParallax();
    initBackgroundMusic();
    
  
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
