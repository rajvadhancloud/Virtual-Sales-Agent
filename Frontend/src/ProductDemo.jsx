import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from './component/Avatar';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ProductDemoPage = () => {
    const navigate = useNavigate();

    const handleMakePaymentClick = () => {
        navigate('/make-payment');
    };

    useEffect(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('product-demo').appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const light = new THREE.AmbientLight(0x404040, 5);
        scene.add(light);

        let geometry, material, object;
        const productAvailable = true;
        if (productAvailable) {
            geometry = new THREE.SphereGeometry(5, 32, 32);
            material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5, wireframe: true });
            object = new THREE.Mesh(geometry, material);
        } else {
            geometry = new THREE.BoxGeometry(5, 5, 5);
            material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5, wireframe: true });
            object = new THREE.Mesh(geometry, material);
        }
        scene.add(object);

        camera.position.z = 15;

        const animate = () => {
            requestAnimationFrame(animate);
            object.rotation.x += 0.01;
            object.rotation.y += 0.01;
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            while (document.getElementById('product-demo').firstChild) {
                document.getElementById('product-demo').removeChild(document.getElementById('product-demo').firstChild);
            }
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            
            <div className="border-double border-4 border-white w-[80%] h-[80%] rounded-lg relative grid grid-rows-3 grid-cols-1">

                
                <div className="flex-1 flex justify-center items-center row-span-2" id="product-demo">
                    
                </div>

                
                <div className="w-full flex justify-center items-center space-x-8 py-4">
                    
                    <Avatar
                        isUser={false}
                        isTalking={true}
                        isCameraOn={false}
                        avatarSize="w-24 h-24"
                    />

                    <Avatar
                        isUser={true}
                        isTalking={false}
                        isCameraOn={false}
                        avatarSize="w-24 h-24"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDemoPage;