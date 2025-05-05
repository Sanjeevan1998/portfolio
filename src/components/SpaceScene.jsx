import React, { useRef, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Instance, Instances } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

//----------------------------------------------------------------------//
//  3D Scene Component Definitions (Moved from App.jsx)                 //
//----------------------------------------------------------------------//

// --- Planet Component ---
function Planet({ textureUrl, name, size = 10, position = [0, 0, 0], rotationSpeed = 0.05 }) {
    const meshRef = useRef();
    const texture = useTexture(textureUrl);
    useEffect(() => {
        if (texture) {
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.needsUpdate = true;
        }
    }, [texture]);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * rotationSpeed;
        }
    });

    return (
        <group position={position}>
            <mesh ref={meshRef}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial map={texture} roughness={0.9} metalness={0.1} />
            </mesh>
        </group>
    );
}

// --- Asteroid Field Component ---
const asteroidGeometry = new THREE.IcosahedronGeometry(1, 0);
const asteroidMaterial = new THREE.MeshStandardMaterial({ color: '#555555', roughness: 0.8 });
function Asteroids({ count = 500, volumeMinRadius = 300, volumeMaxRadius = 900 }) {
    const instancedMeshRef = useRef();
    const tempPosition = useMemo(() => new THREE.Vector3(), []);
    const asteroidData = useMemo(() => {
        const data = [];
        for (let i = 0; i < count; i++) {
            const r = volumeMinRadius + Math.cbrt(Math.random()) * (volumeMaxRadius - volumeMinRadius);
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = Math.random() * 2 * Math.PI;
            tempPosition.setFromSphericalCoords(r, phi, theta);
            const rotation = new THREE.Euler( Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI );
            const scale = Math.random() * 1.5 + 0.5;
            data.push({ position: tempPosition.clone(), rotation, scale });
        } return data;
    }, [count, volumeMinRadius, volumeMaxRadius, tempPosition]);

    return (
        <Instances ref={instancedMeshRef} limit={count} geometry={asteroidGeometry} material={asteroidMaterial}>
            {asteroidData.map((props, i) => (
                <Instance key={i} {...props} />
            ))}
        </Instances>
    );
}

// --- Procedural Stars Component ---
function ProceduralStars({ count = 5000, radius = 1000, baseSize = 0.05 }) {
    const pointsRef = useRef();
    // Ensure this path is correct relative to your public folder
    const particleTexture = useTexture('/textures/particle.png');
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const target = new THREE.Vector3();
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            target.setFromSphericalCoords( radius * (0.5 + Math.random() * 0.5), phi, theta );
            pos[i * 3] = target.x; pos[i * 3 + 1] = target.y; pos[i * 3 + 2] = target.z;
        } return pos;
     }, [count, radius]);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.002;
            pointsRef.current.rotation.x += delta * 0.0005;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                size={baseSize}
                color="white"
                sizeAttenuation={true}
                fog={false}
                map={particleTexture || null}
                alphaTest={0.1}
                transparent={!!particleTexture}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}


// --- Scene Contents Component ---
function SceneContents() {
    const PLANET_COUNT = 10;
    const MIN_PLANET_SIZE = 15;
    const MAX_PLANET_SIZE = 40;
    const MIN_PLACEMENT_RADIUS = 100;
    const MAX_PLACEMENT_RADIUS = 700;
    const MIN_SEPARATION_BUFFER = 25;
    const MAX_PLACEMENT_ATTEMPTS = 100;

    // Ensure these paths are correct relative to your public folder
    const planetTextures = [
        "/textures/planet_earth.jpg",
        "/textures/planet_mars_2k.jpg",
        "/textures/planet_jupiter_2k.jpg",
    ];

    const planets = useMemo(() => {
        const generatedPlanets = [];
        const tempPosition = new THREE.Vector3();
        if (planetTextures.length === 0) { console.error("Planet Textures array is empty!"); return generatedPlanets; }
        for (let i = 0; i < PLANET_COUNT; i++) {
            let placed = false; const currentSize = MIN_PLANET_SIZE + Math.random() * (MAX_PLANET_SIZE - MIN_PLANET_SIZE);
            for (let attempt = 0; attempt < MAX_PLACEMENT_ATTEMPTS; attempt++) {
                const r = MIN_PLACEMENT_RADIUS + Math.cbrt(Math.random()) * (MAX_PLACEMENT_RADIUS - MIN_PLACEMENT_RADIUS);
                const phi = Math.acos(2 * Math.random() - 1); const theta = Math.random() * 2 * Math.PI;
                tempPosition.setFromSphericalCoords(r, phi, theta);
                let overlaps = false;
                for (const placedPlanet of generatedPlanets) { const distance = tempPosition.distanceTo(placedPlanet.position); const requiredDistance = currentSize + placedPlanet.size + MIN_SEPARATION_BUFFER; if (distance < requiredDistance) { overlaps = true; break; } }
                if (!overlaps) { generatedPlanets.push({ id: `planet_${i}`, textureUrl: planetTextures[Math.floor(Math.random() * planetTextures.length)], size: currentSize, position: tempPosition.clone(), rotationSpeed: (Math.random() - 0.5) * 0.06, }); placed = true; break; }
            } if (!placed) { console.warn(`Could not place planet ${i + 1}.`); }
        } console.log(`Placed ${generatedPlanets.length} planets.`); return generatedPlanets;
     }, []); // Empty dependency array: run once

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.8} />
            <pointLight position={[200, 200, 300]} intensity={1.8} color="#aaddff" decay={2} distance={1000} />
            <directionalLight position={[-150, 150, 100]} intensity={1.2} color="#ffffff" />
            {/* Stars */}
            <ProceduralStars count={10000} radius={1200} baseSize={0.07} />
            <ProceduralStars count={6000} radius={900} baseSize={0.1} />
            {/* Planets */}
            {planets.map(planet => <Planet key={planet.id} {...planet} />)}
            {/* Asteroids */}
            <Asteroids count={700} volumeMinRadius={150} volumeMaxRadius={1000} />
            {/* OrbitControls */}
            <OrbitControls
                enableDamping dampingFactor={0.05} rotateSpeed={0.3} enableZoom={true}
                maxDistance={1500} minDistance={30}
                autoRotate={true} autoRotateSpeed={0.1} enablePan={false}
            />
            {/* Post-Processing */}
            <EffectComposer>
                <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.8} height={400} intensity={0.8} mipmapBlur />
            </EffectComposer>
        </>
    );
}

// --- Main Canvas Component --- (Exported for use in Layout)
function SpaceBackgroundCanvas() {
    return (
        <Canvas
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1, // Behind content box (z-index: 10)
            }}
            camera={{ position: [0, 50, 350], fov: 55 }}
            frameloop="demand"
            gl={{ antialias: true, alpha: false }}
            shadows
        >
            <Suspense fallback={null}>
                <SceneContents />
            </Suspense>
        </Canvas>
    );
}

// Export the main canvas component
export default SpaceBackgroundCanvas;