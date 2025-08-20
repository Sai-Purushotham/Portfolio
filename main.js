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
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
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

        // Add scroll progress indicator
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`);
        });

        // Three.js 3D Scene
        function init3DScene() {
            const canvas = document.getElementById('hero3dCanvas');
            if (!canvas) return;

            // Scene setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            
            // Renderer setup with alpha for transparency
            const renderer = new THREE.WebGLRenderer({ 
                canvas: canvas, 
                alpha: true,
                antialias: true 
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Create floating geometric shapes
            const geometries = [
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.SphereGeometry(0.5, 16, 16),
                new THREE.OctahedronGeometry(0.6),
                new THREE.TorusGeometry(0.4, 0.2, 8, 16),
                new THREE.IcosahedronGeometry(0.5)
            ];

            const materials = [
                new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true }),
                new THREE.MeshBasicMaterial({ color: 0xff6b6b, wireframe: true }),
                new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true }),
                new THREE.MeshBasicMaterial({ color: 0xff6b6b, wireframe: true }),
                new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true })
            ];

            const meshes = [];
            geometries.forEach((geometry, index) => {
                const mesh = new THREE.Mesh(geometry, materials[index]);
                mesh.position.set(
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                );
                mesh.rotation.set(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                );
                scene.add(mesh);
                meshes.push(mesh);
            });

            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
            scene.add(ambientLight);

            // Add directional light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);

            // Camera position
            camera.position.z = 8;

            // Animation loop
            function animate() {
                requestAnimationFrame(animate);

                // Rotate all meshes
                meshes.forEach((mesh, index) => {
                    mesh.rotation.x += 0.005 * (index + 1);
                    mesh.rotation.y += 0.003 * (index + 1);
                    mesh.rotation.z += 0.004 * (index + 1);

                    // Add floating motion
                    mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
                    mesh.position.x += Math.cos(Date.now() * 0.001 + index) * 0.001;
                });

                // Rotate camera slowly
                camera.position.x = Math.sin(Date.now() * 0.0005) * 2;
                camera.position.y = Math.cos(Date.now() * 0.0003) * 1;
                camera.lookAt(0, 0, 0);

                renderer.render(scene, camera);
            }

            // Handle window resize
            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            window.addEventListener('resize', onWindowResize);

            // Start animation
            animate();
        }

        // Initialize 3D scene when page loads
        window.addEventListener('load', () => {
            // Wait a bit for everything to load
            setTimeout(() => {
                init3DScene();
            }, 1000);
        });