import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap, refreshScrollTriggers } from '../animations/gsapConfig';
import {
  SPHERE_FRAGMENT_SHADER,
  SPHERE_VERTEX_SHADER,
} from '../animations/imageAnimations';
import { IMAGES, openBooking } from '../assets/images/assetUrls';
import { useClickOutside } from '../hooks/useResponsiveAnimations';
import { MenuPopup } from './MenuPopup';

interface HeroProps {
  reload: boolean;
  afterReload: (val: boolean) => void;
  onAssetLoad: () => void;
  onTextureReady: () => void;
  onEnterMainSite: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  reload,
  afterReload,
  onAssetLoad,
  onTextureReady,
  onEnterMainSite,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuContainerRef = useClickOutside<HTMLDivElement>(() =>
    setIsMenuVisible(false)
  );
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sphereWrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isTransitioningRef = useRef(false);
  const uniformsRef = useRef<Record<string, { value: unknown; type?: string }> | null>(
    null
  );

  const triggerPortalEnter = useCallback(() => {
    if (isTransitioningRef.current) return;
    const canvas = canvasRef.current;
    const sphereWrapper = sphereWrapperRef.current;
    const firstSection = sectionRef.current;
    if (!canvas || !sphereWrapper || !firstSection) return;
    if (firstSection.style.display === 'none') return;

    isTransitioningRef.current = true;
    sphereWrapper.style.zIndex = '4';
    canvas.style.zIndex = '5';
    if (uniformsRef.current && uniformsRef.current.uTime) {
      uniformsRef.current.uTime.value = 0.5;
    }

    gsap.to(canvas, {
      duration: 0.4,
      delay: 0.1,
      scale: 5,
      ease: 'power3.inOut',
      onComplete: () => {
        window.scrollTo({ top: 0, left: 0 });
        firstSection.style.display = 'none';
        document.body.classList.remove('preview');
        const secondSection = document.querySelector<HTMLElement>('#second');
        if (secondSection) {
          secondSection.style.transform = 'scale(1)';
        }
        onEnterMainSite();
        refreshScrollTriggers();
      },
    });
  }, [onEnterMainSite]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sphereWrapper = sphereWrapperRef.current;
    const firstSection = sectionRef.current;
    if (!canvas || !sphereWrapper || !firstSection) return;

    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    scene.add(camera);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin('anonymous');
    const texture = textureLoader.load(
      IMAGES.sphereTexture,
      () => {
        onTextureReady();
      },
      undefined,
      () => {
        onTextureReady();
      }
    );

    const geometry = new THREE.SphereGeometry(1, 280, 280);
    const uniforms: Record<string, { value: unknown; type?: string }> = {
      uTime: { value: 0.2 },
      uDistortionFrequency: { value: 1 },
      uDisplacementFrequency: { value: 3 },
      uDisplacementStrngth: { value: 0.18 },
      uSubdivision: { value: { x: 280, y: 280 } },
      uFresnelOffset: { value: -1.9 },
      uFresnelMultiplier: { value: 3.587 },
      uFresnelPower: { value: 1.3 },
      uLightColor: { value: { x: 2.37, y: 2.25, z: 1.58, w: 1 } },
      uLightAPosition: { value: { x: 1, y: 1, z: 0 } },
      uLightBPosition: { value: { x: -1, y: -5.5, z: 0 } },
      uTexture: { type: 't', value: texture },
      viewMatrixCamera: { type: 'm4', value: camera.matrixWorldInverse },
      projectionMatrixCamera: { type: 'm4', value: camera.projectionMatrix },
      savedModelMatrix: {
        type: 'mat4',
        value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      },
    };
    uniformsRef.current = uniforms;

    geometry.computeTangents();

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms as Record<string, THREE.IUniform>,
      vertexShader: SPHERE_VERTEX_SHADER,
      fragmentShader: SPHERE_FRAGMENT_SHADER,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);

    const handleResize = () => {
      const h = window.innerHeight;
      const w = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
      camera.updateWorldMatrix(true, true);
      renderer.setSize(
        Math.min(window.innerWidth / 0.7, w),
        Math.min(window.innerWidth / 0.7, h)
      );
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let rafId: number | null = null;
    const animate = () => {
      rafId = window.requestAnimationFrame(animate);
      (uniforms.uTime.value as number) += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [onTextureReady]);

  // Reset / Initial portal setup & wheel/touch listeners
  const resetPortalView = useCallback(() => {
    const canvas = canvasRef.current;
    const sphereWrapper = sphereWrapperRef.current;
    const firstSection = sectionRef.current;
    if (!canvas || !sphereWrapper || !firstSection) return;

    isTransitioningRef.current = false;
    document.body.classList.add('preview');
    window.scrollTo({ top: 0, left: 0 });
    canvas.style.zIndex = '5';
    if (uniformsRef.current && uniformsRef.current.uTime) {
      uniformsRef.current.uTime.value = 0.5;
    }

    gsap.to(canvas, {
      duration: 0,
      delay: 0.05,
      scale: 1,
      ease: 'power3.inOut',
      onComplete: () => {
        sphereWrapper.style.zIndex = '1';
        firstSection.style.display = 'block';
      },
    });
  }, []);

  useEffect(() => {
    resetPortalView();
  }, [resetPortalView]);

  useEffect(() => {
    if (reload) {
      resetPortalView();
      afterReload(false);
    }
  }, [reload, resetPortalView, afterReload]);

  useEffect(() => {
    const onWheel = () => {
      if (document.body.classList.contains('preview')) {
        triggerPortalEnter();
      }
    };
    const onTouchMove = () => {
      if (document.body.classList.contains('preview')) {
        triggerPortalEnter();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [triggerPortalEnter]);

  return (
    <section id="first" ref={sectionRef} className="Sphere_sphere__i94um">
      <div className="Sphere_sphereContainer__qreoE">
        <div className="Sphere_sphereTopbar__wlkrR">
          <div
            className="Sphere_sphereTopbarTitle__6XltI Sphere_sphereTopbarTitleFirst__KPA0h"
            onClick={openBooking}
          >
            Book Your Seat
          </div>
          <div
            className="Sphere_sphereTopbarTitle__6XltI Sphere_sphereTopbarTitleFirstMobile__ckYWZ"
            onClick={openBooking}
          >
            Book
          </div>
          <img
            className="Sphere_sphereTopbarLogo__KLwh7"
            onLoad={onAssetLoad}
            src={IMAGES.logoDark}
            width={222}
            height={177}
            alt="JG2 Gaming Lounge logo"
          />
          <div
            ref={menuContainerRef}
            className="Sphere_sphereTopbarTitle__6XltI Navigation_navigationLink__4Wtm1 Navigation_navigationMenu__wtnY4"
          >
            <div
              onClick={() => setIsMenuVisible((prev) => !prev)}
              className="Sphere_sphereTopbarTitleSecond__Hw7qI Navigation_navigationLinkWithIcon__mzA6e Navigation_navigationLinkWithIconBurger__9HAsc"
            >
              <span>Menu</span>
              <svg
                className="Sphere_sphereTopbarTitleSecondIconMenu__Dvgln"
                width="21"
                height="10"
                viewBox="0 0 21 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.45 7.27273H21V10H9.45V7.27273Z" fill="white" />
                <path d="M0 0H21V2.72727H0V0Z" fill="white" />
              </svg>
            </div>
            <MenuPopup isVisible={isMenuVisible} />
          </div>
        </div>
      </div>

      <div
        id="sphere_wrapper"
        ref={sphereWrapperRef}
        className="Sphere_sphereWrapper__Sj5Iu"
      >
        <div className="Sphere_sphereCanvasContainer__aUrsC">
          <canvas id="canvas" ref={canvasRef} className="Sphere_cnv__OBh36" />
        </div>
      </div>

      <div className="Sphere_sphereMain__XFHAZ">
        <div className="Sphere_sphereInfo__ax6yn">
          <div className="Sphere_sphereTitle__qy93z">
            Let’s find
            <br /> another <br /> place
          </div>
          <div className="Sphere_sphereTitle__qy93z Sphere_sphereTitleTwo__E2QnO">
            Play.
            <br /> Connect.
            <br />
            Experience.
          </div>
        </div>
        <div className="Sphere_sphereInfo__mobile__pbFsA">
          <div className="Sphere_sphereTitle__qy93z">
            Let’s find
            <br /> another place
          </div>
          <div className="Sphere_sphereTitle__qy93z Sphere_sphereTitleTwo__E2QnO">
            Play. Connect.
            <br /> Experience.
          </div>
        </div>
      </div>

      <div
        className="Sphere_sphereScroll__UQL9k"
        onClick={triggerPortalEnter}
        role="button"
        tabIndex={0}
      >
        <img
          className="Sphere_sphereScrollIcon Sphere_sphereScrollIconMouse"
          onLoad={onAssetLoad}
          src={IMAGES.mouseWhite}
          width={26}
          height={28}
          alt="scroll"
        />
        <span className="Sphere_sphereScrollTitle">Scroll to Start</span>
      </div>

      <img
        className="Sphere_sphereBackground__eOVsI"
        onLoad={onAssetLoad}
        src={IMAGES.firstPlanBg}
        width={1920}
        height={1080}
        alt="Desert skyline backdrop"
      />
      <img
        className="Sphere_sphereSand__KM7kY"
        onLoad={onAssetLoad}
        src={IMAGES.firstPlanSand}
        width={1920}
        height={1080}
        alt="Desert sand foreground"
      />
    </section>
  );
};
