anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });

        // Enhanced project card interactions
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.03)';
                this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });

        // Enhanced skill item interactions
        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.05)';
                this.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.3)';
            });
            
            skill.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });

        // Parallax effect for hero section
        document.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.3;
                const x = (mouseX - 0.5) * speed * 25;
                const y = (mouseY - 0.5) * speed * 25;
                particle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Enhanced code element animations
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.1)';
                this.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.4)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Trigger initial animations
            setTimeout(() => {
                document.querySelector('.hero-content').style.opacity = '1';
                document.querySelector('.hero-content').style.transform = 'translateY(0)';
            }, 500);
        });

            window.addEventListener('resize', onWindowResize);

            // Start animation
        window.addEventListener('load', () => {
            // Wait a bit for everything to load
            setTimeout(() => {