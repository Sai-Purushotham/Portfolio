// Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Initialize Typed.js for role animation with enhanced strings
        new Typed('#typed-text', {
            strings: ['Web Developer', 'Problem Solver', 'Tech Enthusiast', 'Creative Coder', 'Digital Innovator'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll with enhanced effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const scrolled = window.scrollY;
            
            if (scrolled > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Enhanced scroll to top button
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.transform = 'translateY(0)';
            } else {
                scrollToTopBtn.classList.remove('visible');
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.transform = 'translateY(20px)';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Enhanced mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        });

        // Dynamic tech icon animations
        function animateTechIcons() {
            const techIcons = document.querySelectorAll('.tech-icon');
            techIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.transform = 'rotate(360deg) scale(1.2)';
                    icon.style.filter = 'brightness(1.5)';
                    setTimeout(() => {
                        icon.style.transform = 'rotate(0deg) scale(1)';
                        icon.style.filter = 'brightness(1)';
                    }, 500);
                }, index * 200);
            });
        }

        // Trigger tech icon animation every 6 seconds
        setInterval(animateTechIcons, 6000);

        // Enhanced mouse movement effect for particles
        function animateCodeElements() {
            const codeElements = document.querySelectorAll('.code-element');
            codeElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '0.8';
                    element.style.transform = 'scale(1.15) rotate(2deg)';
                    element.style.textShadow = '0 0 10px var(--accent-color)';
                    setTimeout(() => {
                        element.style.opacity = '0.2';
                        element.style.transform = 'scale(1) rotate(0deg)';
                        element.style.textShadow = 'none';
                    }, 1200);
                }, index * 400);
            });
        }

        // Trigger code animation every 10 seconds
        setInterval(animateCodeElements, 10000);

        // Add smooth reveal effect for sections
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections for smooth reveal
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.8s ease';
            observer.observe(section);
        });

        // Enhanced social link interactions
        document.querySelectorAll('.social-link').forEach(link => {
        // Add scroll progress indicator
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`);
        });

            function animate() {
                requestAnimationFrame(animate);

            animate();
        }