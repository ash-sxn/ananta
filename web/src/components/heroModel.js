import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL_PATH = "/3d_assets/corporate_office_building/scene.gltf";

export default class HeroModel {
  constructor(container) {
    this.container = container;
    this.canvas = container.querySelector("[data-hero-canvas]");
    this.fallback = container.querySelector("[data-hero-fallback]");

    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.modelGroup = new THREE.Group();
    this.scene.add(this.modelGroup);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.setClearColor(0x000000, 0);

    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    this.camera.position.set(1.1, 1.4, 6.2);

    this.clock = new THREE.Clock();
    this.animationId = null;
    this.model = null;
    this.baseY = 0;

    this.scrollTarget = 0;
    this.scrollInfluence = 0;

    this.baseRotation = { x: 0, y: 0, z: 0 };

    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.animate = this.animate.bind(this);

    this.addLights();
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();

    this.loadModel();
    this.animate();
  }

  addLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 1.15);
    key.position.set(4, 6, 8);
    this.scene.add(key);

    const rim = new THREE.DirectionalLight(0xf6d9a6, 0.5);
    rim.position.set(-6, 3, -4);
    this.scene.add(rim);

    const fill = new THREE.PointLight(0x7a8cff, 0.35);
    fill.position.set(0, 2, 3.5);
    this.scene.add(fill);
  }

  loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      MODEL_PATH,
      (gltf) => {
        this.model = gltf.scene;
        this.modelGroup.add(this.model);
        this.normaliseModel(this.model);
        this.enhanceMaterials(this.model);

        if (this.fallback) {
          this.fallback.textContent = "";
        }
        this.container.classList.add("is-ready");
      },
      undefined,
      (error) => {
        if (this.fallback) {
          this.fallback.textContent = "3D preview unavailable";
        }
        if (import.meta.env && import.meta.env.DEV) {
          console.warn("[HeroModel] Failed to load GLTF", error);
        }
      },
    );
  }

  normaliseModel(object) {
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    object.position.sub(center);

    const maxAxis = Math.max(size.x, size.y, size.z);
    const scale = 2.5 / maxAxis;
    object.scale.setScalar(scale);

    box.setFromObject(object);
    const nextCenter = box.getCenter(new THREE.Vector3());
    object.position.sub(nextCenter);

    const finalBox = new THREE.Box3().setFromObject(object);
    const baseOffset = -finalBox.min.y;

    object.position.y += baseOffset;

    object.position.add(new THREE.Vector3(2.1, 0.7, -0.38));
    object.rotation.set(
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(90),
      THREE.MathUtils.degToRad(0),
    );

    this.baseRotation = object.rotation.clone();
    this.baseY = object.position.y;
  }

  enhanceMaterials(object) {
    object.traverse((child) => {
      if (!child.isMesh) return;
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      materials.forEach((mat) => {
        if (!mat) return;
        if (typeof mat.envMapIntensity !== "undefined") {
          mat.envMapIntensity = 1.15;
        }
        if (typeof mat.roughness !== "undefined") {
          mat.roughness = Math.min(mat.roughness ?? 0.6, 0.8);
        }
        if (typeof mat.metalness !== "undefined") {
          mat.metalness = Math.max(mat.metalness ?? 0.25, 0.25);
        }
        if (typeof mat.opacity !== "undefined" && mat.opacity < 1) {
          mat.opacity = Math.min(mat.opacity, 0.9);
        }
      });
    });
  }

  handleResize() {
    const { width, height } = this.container.getBoundingClientRect();
    const safeWidth = Math.max(width, 280);
    const safeHeight = Math.max(height, 240);
    this.camera.aspect = safeWidth / safeHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(safeWidth, safeHeight, false);
  }

  handleScroll() {
    const rect = this.container.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    const center = rect.top + rect.height * 0.5;
    const progress = THREE.MathUtils.clamp(1 - center / viewport, -1, 1);
    this.scrollTarget = progress;
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate);
    const elapsed = this.clock.getElapsedTime();

    if (this.model) {
      this.scrollInfluence = THREE.MathUtils.lerp(
        this.scrollInfluence,
        this.scrollTarget,
        0.08,
      );
      const base = this.baseRotation || new THREE.Euler();
      const sway = Math.sin(elapsed * 0.3) * 0.12;
      this.model.rotation.set(
        base.x - 0.05 + this.scrollInfluence * 0.2,
        base.y + sway + this.scrollInfluence * 0.25,
        base.z + Math.sin(elapsed * 0.12) * 0.03,
      );
      this.model.position.y = this.baseY + Math.sin(elapsed * 0.35) * 0.05;
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
    this.renderer.dispose();
    this.scene.traverse((child) => {
      if (!child.isMesh) return;
      child.geometry.dispose();
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      materials.forEach((mat) => {
        if (mat && typeof mat.dispose === "function") {
          mat.dispose();
        }
      });
    });
  }
}
