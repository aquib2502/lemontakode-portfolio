'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CircuitBackground({ dark = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Particles Configuration
    const particleCount = 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    const colorBlue = new THREE.Color(dark ? '#33C3FF' : '#0066FF');
    const colorYellow = new THREE.Color('#FFD400');

    for (let i = 0; i < particleCount; i++) {
      // Position within a 3D box
      const x = (Math.random() - 0.5) * 45;
      const y = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 15;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color selection
      const mixedColor = Math.random() > 0.45 ? colorBlue : colorYellow;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      // Slow drift velocity
      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.01
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(8, 8, 8, 0, Math.PI * 2);
    ctx.fill();
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: dark ? 1.6 : 1.1,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const particleSystem = new THREE.Points(geometry, material);
    particleSystem.position.y = 4.5;
    scene.add(particleSystem);

    // Node connections/lines system
    const lineMaterial = new THREE.LineBasicMaterial({
      color: dark ? 0x33C3FF : 0x0066FF,
      transparent: true,
      opacity: dark ? 0.16 : 0.08
    });
    
    let lineGeometry = new THREE.BufferGeometry();
    let lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    lineMesh.position.y = 4.5;
    scene.add(lineMesh);

    // Mouse tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 4;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 4;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Parallax rotation
      particleSystem.rotation.y = mouse.x * 0.15;
      particleSystem.rotation.x = -mouse.y * 0.15;
      lineMesh.rotation.y = mouse.x * 0.15;
      lineMesh.rotation.x = -mouse.y * 0.15;

      const posArr = geometry.attributes.position.array;
      const linePositions = [];

      for (let i = 0; i < particleCount; i++) {
        // Apply drift velocities
        posArr[i * 3] += velocities[i].x;
        posArr[i * 3 + 1] += velocities[i].y;
        posArr[i * 3 + 2] += velocities[i].z;

        // Bounce off bounds
        if (Math.abs(posArr[i * 3]) > 22) velocities[i].x *= -1;
        if (Math.abs(posArr[i * 3 + 1]) > 17) velocities[i].y *= -1;
        if (Math.abs(posArr[i * 3 + 2]) > 7) velocities[i].z *= -1;

        // Draw connections
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArr[i * 3] - posArr[j * 3];
          const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 8.5) {
            linePositions.push(
              posArr[i * 3], posArr[i * 3 + 1], posArr[i * 3 + 2],
              posArr[j * 3], posArr[j * 3 + 1], posArr[j * 3 + 2]
            );
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Rebuild connecting lines
      if (linePositions.length > 0) {
        lineMesh.geometry.setAttribute(
          'position',
          new THREE.BufferAttribute(new Float32Array(linePositions), 3)
        );
        lineMesh.visible = true;
      } else {
        lineMesh.visible = false;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      lineGeometry.dispose();
      renderer.dispose();
    };
  }, [dark]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full z-0 overflow-hidden ${dark ? 'bg-transparent' : 'bg-transparent'}`}
    />
  );
}
