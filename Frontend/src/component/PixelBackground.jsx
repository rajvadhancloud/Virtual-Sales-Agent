import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const PixelBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, stars;
        const mount = mountRef.current;

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000); 
        mount.appendChild(renderer.domElement);

        const starGeometry = new THREE.BufferGeometry();
        const starCount = 5000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount * 6; i++) {
            positions[i] = (Math.random() - 0.5) * 12; 
        }

        starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.015 });

        stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        const animate = () => {
            requestAnimationFrame(animate);

            stars.rotation.x += 0.0003;
            stars.rotation.y += 0.0003;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            mount.removeChild(renderer.domElement);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 pointer-events-none" 
        ></div>
    );
};

export default PixelBackground;