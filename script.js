document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт о Петре I загружен');
    
    initHamburgerMenu();
    
    if (typeof anime !== 'undefined') {
        console.log('Anime.js загружена');
        initAnimeAnimations();
    } else {
        console.log('Anime.js не загружена, используются базовые анимации');
        initBasicAnimations();
    }
    
    initSmoothScroll();
    
    initForms();

    initLocalStorageAPI();
    
    initMediaHandlers();
});

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const menuList = document.getElementById('menu-list');
    
    if (hamburger && menuList) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            menuList.classList.toggle('active');
        });
        
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                menuList.classList.remove('active');
            });
        });
    }
}

function initBasicAnimations() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-submit');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
            this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    const galleryItems = document.querySelectorAll('.image-gallery figure');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    });
    
    const timelineItems = document.querySelectorAll('.timeline li');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
        
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.paddingLeft = '45px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.paddingLeft = '40px';
        });
    });
}

function initAnimeAnimations() {
    anime({
        targets: 'h1, h2, h3',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutCubic'
    });
    const portrait = document.querySelector('.portrait img');
    if (portrait) {
        anime({
            targets: portrait,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 1000,
            delay: 300,
            easing: 'easeOutElastic(1, .8)'
        });
    }
    const infoItems = document.querySelectorAll('.info-item');
    if (infoItems.length > 0) {
        anime({
            targets: infoItems,
            translateX: [-30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutCubic'
        });
    }
    const dates = document.querySelectorAll('.date');
    if (dates.length > 0) {
        anime({
            targets: dates,
            scale: [0, 1],
            duration: 600,
            delay: anime.stagger(50),
            easing: 'easeOutBack'
        });
    }
    const galleryImages = document.querySelectorAll('.image-gallery img');
    if (galleryImages.length > 0) {
        anime({
            targets: galleryImages,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutCubic'
        });
    }
    const tableRows = document.querySelectorAll('.reforms-table tr');
    if (tableRows.length > 0) {
        anime({
            targets: tableRows,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600,
            delay: anime.stagger(50),
            easing: 'easeOutCubic'
        });
    }

    initAnimeHoverEffects();
}

function initAnimeHoverEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-submit');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                translateY: -3,
                boxShadow: '0 8px 25px rgba(255,193,7,0.4)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                boxShadow: 'none',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });

    const galleryItems = document.querySelectorAll('.image-gallery figure');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -10,
                scale: 1.02,
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                duration: 400,
                easing: 'easeOutCubic'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                scale: 1,
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                duration: 400,
                easing: 'easeOutCubic'
            });
        });
    });

    const navItems = document.querySelectorAll('.menu-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });

    const timelineItems = document.querySelectorAll('.timeline li');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('.date'),
                scale: 1.1,
                backgroundColor: '#ff5722',
                duration: 300,
                easing: 'easeOutCubic'
            });
            
            anime({
                targets: this.querySelector('p'),
                paddingLeft: '20px',
                backgroundColor: '#f0f0f0',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('.date'),
                scale: 1,
                backgroundColor: '#ffc107',
                duration: 300,
                easing: 'easeOutCubic'
            });
            
            anime({
                targets: this.querySelector('p'),
                paddingLeft: '15px',
                backgroundColor: '#f8f9fa',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function initForms() {
    const feedbackForms = document.querySelectorAll('.feedback-form');
    
    feedbackForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ff4444';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
                
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        input.style.borderColor = '#ff4444';
                        isValid = false;
                    }
                }
            });
            
            if (isValid) {
                const submitBtn = this.querySelector('.btn-submit');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Отправка...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Спасибо за обратную связь! Ваше сообщение отправлено.');
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    if (typeof anime !== 'undefined') {
                        anime({
                            targets: submitBtn,
                            backgroundColor: '#4CAF50',
                            color: '#fff',
                            duration: 500,
                            easing: 'easeOutCubic',
                            complete: function() {
                                setTimeout(() => {
                                    anime({
                                        targets: submitBtn,
                                        backgroundColor: '',
                                        color: '',
                                        duration: 500,
                                        easing: 'easeOutCubic'
                                    });
                                }, 1000);
                            }
                        });
                    }
                }, 1500);
            } else {

                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this.querySelectorAll('input[style*="border-color: rgb(255, 68, 68)"]'),
                        translateX: [10, -10, 10, -10, 0],
                        duration: 600,
                        easing: 'easeInOutSine'
                    });
                }
            }
        });
        
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', function() {
                if (this.style.borderColor === 'rgb(255, 68, 68)') {
                    this.style.borderColor = '';
                }
            });
        });
    });
}
function initLocalStorageAPI() {
    console.log('Инициализация LocalStorage API');
    const feedbackForm = document.querySelector('.feedback-form');
    if (feedbackForm) {
        const savedData = JSON.parse(localStorage.getItem('feedbackFormData') || '{}');
        Object.keys(savedData).forEach(key => {
            const input = feedbackForm.querySelector(`[name="${key}"]`);
            if (input) input.value = savedData[key];
        });
        
        feedbackForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', function() {
                const currentData = JSON.parse(localStorage.getItem('feedbackFormData') || '{}');
                currentData[this.name] = this.value;
                localStorage.setItem('feedbackFormData', JSON.stringify(currentData));
                console.log('Данные формы сохранены в LocalStorage');
            });
        });
        
        feedbackForm.addEventListener('submit', function() {
            setTimeout(() => {
                localStorage.removeItem('feedbackFormData');
                console.log('Данные формы очищены после отправки');
            }, 2000);
        });
    }
} 
function initMediaHandlers() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('play', function() {
            console.log('Видео воспроизводится:', this.src);
        });
        
        video.addEventListener('ended', function() {
            console.log('Видео завершено');
        });
    });
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.addEventListener('play', function() {
            console.log('Аудио воспроизводится:', this.src);
        });
    });
    
    const galleryImages = document.querySelectorAll('.image-gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 0 40px rgba(255,255,255,0.2);
            `;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: modal,
                        opacity: 0,
                        duration: 300,
                        easing: 'easeOutCubic',
                        complete: function() {
                            modal.remove();
                        }
                    });
                } else {
                    modal.remove();
                }
            });

            if (typeof anime !== 'undefined') {
                anime({
                    targets: modal,
                    opacity: [0, 1],
                    duration: 300,
                    easing: 'easeOutCubic'
                });
                
                anime({
                    targets: modalImg,
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeOutBack'
                });
            }
        });
    });
}