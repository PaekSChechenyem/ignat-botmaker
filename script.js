// Анимация появления элементов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления карточек
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Анимация для кнопок при наведении
    const buttons = document.querySelectorAll('.telegram-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Плавная прокрутка для ссылок
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация для проектов
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });

    // Отслеживание кликов по кнопкам Telegram
    const telegramButtons = document.querySelectorAll('a[href*="t.me"]');
    telegramButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Клик по кнопке Telegram:', this.textContent.trim());
            console.log('Ссылка:', this.href);
            console.log('Время клика:', new Date().toLocaleString('ru-RU'));
        });
    });

    // Добавление эффекта печатания для заголовка
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Отслеживание главной кнопки Telegram
    const mainTelegramBtn = document.getElementById('telegram-main-btn');
    if (mainTelegramBtn) {
        mainTelegramBtn.addEventListener('click', function() {
            // Отправка события в Яндекс.Метрику
            if (typeof ym !== 'undefined') {
                ym(102952156, 'reachGoal', 'telegram_click', {
                    button_location: 'main',
                    button_text: 'Написать в Telegram'
                });
            }
            console.log('Клик по главной кнопке Telegram отслежен');
        });
    }

    // Отслеживание кнопки Telegram в футере
    const footerTelegramBtn = document.getElementById('telegram-footer-btn');
    if (footerTelegramBtn) {
        footerTelegramBtn.addEventListener('click', function() {
            // Отправка события в Яндекс.Метрику
            if (typeof ym !== 'undefined') {
                ym(102952156, 'reachGoal', 'telegram_click', {
                    button_location: 'footer',
                    button_text: '@Golodos_tudors'
                });
            }
            console.log('Клик по кнопке Telegram в футере отслежен');
        });
    }

    // Отслеживание кликов по проектам
    projectLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const projectName = this.textContent.trim();
            // Отправка события в Яндекс.Метрику
            if (typeof ym !== 'undefined') {
                ym(102952156, 'reachGoal', 'project_click', {
                    project_name: projectName
                });
            }
            console.log('Клик по проекту отслежен:', projectName);
        });
    });
});

// Функция для плавного скролла вверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Добавление кнопки "Наверх" при скролле
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 300) {
        if (!document.querySelector('.scroll-top-btn')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-top-btn';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: linear-gradient(45deg, #0088cc, #00a8ff);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.2rem;
                box-shadow: 0 4px 15px rgba(0, 136, 204, 0.3);
                transition: all 0.3s ease;
                z-index: 1000;
            `;
            
            scrollBtn.addEventListener('click', scrollToTop);
            scrollBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.1)';
            });
            scrollBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            document.body.appendChild(scrollBtn);
        }
    } else {
        const existingBtn = document.querySelector('.scroll-top-btn');
        if (existingBtn) {
            existingBtn.remove();
        }
    }
});

// Функция для обработки клика по кнопке
function handleButtonClick() {
    const timestamp = new Date().toLocaleString('ru-RU');
    console.log(`[${timestamp}] Кнопка "Привет" была нажата!`);
    console.log('Пользователь переходит на YouTube...');
    
    // Дополнительная информация в консоль
    console.log('--- Информация о клике ---');
    console.log('Время клика:', timestamp);
    console.log('URL назначения: https://www.youtube.com');
    console.log('Браузер:', navigator.userAgent);
    console.log('------------------------');
} 