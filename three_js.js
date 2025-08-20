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

        // Initialize 3D scene when page loads
                init3DScene();
            }, 1000);
        });