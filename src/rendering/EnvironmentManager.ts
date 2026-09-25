import * as THREE from "three";
import {
  COLOR_DARK_GREEN,
  COLOR_INK,
  COLOR_MID_GREEN,
  GAME_HEIGHT,
  GAME_WIDTH,
  THEME_PALETTES,
} from "../core/Constants";
import type { ThemeId } from "../core/Types";

interface Asteroid {
  mesh: THREE.Mesh;
  rotSpeed: THREE.Vector3;
}

interface DebrisItem {
  object: THREE.Object3D;
  rotSpeed: THREE.Vector3;
  speed: number;
}

export class EnvironmentManager {
  private readonly group = new THREE.Group();
  private readonly debrisGroup = new THREE.Group();
  private readonly planetGroup = new THREE.Group();

  // Far starfield
  private starGeometry!: THREE.BufferGeometry;
  private starPoints!: THREE.Points;
  private readonly starPositions: Float32Array;
  private readonly starCount = 60;
  private readonly starSpeed = 3.0; // units/sec

  // Distant Celestial Body
  private planetMesh!: THREE.Mesh;
  private planetRingMesh: THREE.Mesh | null = null;
  private readonly planetSpeed = 4.5; // units/sec

  // Mid-Distance Asteroids
  private readonly asteroids: Asteroid[] = [];
  private readonly asteroidSpeed = 16.0; // units/sec

  // Near Orbital Debris & Level Props
  private readonly debrisList: DebrisItem[] = [];
  private currentStage = 1;
  private currentTheme: ThemeId = "verdant";

  // Materials
  private starMaterial!: THREE.PointsMaterial;
  private planetMaterial!: THREE.MeshLambertMaterial;
  private asteroidMaterial!: THREE.MeshLambertMaterial;
  private debrisMaterial!: THREE.MeshLambertMaterial;
  private ringMaterial!: THREE.MeshLambertMaterial;

  // Lights
  private ambientLight!: THREE.AmbientLight;
  private dirLight!: THREE.DirectionalLight;

  constructor(scene: THREE.Scene) {
    scene.add(this.group);
    this.group.add(this.planetGroup);
    this.group.add(this.debrisGroup);

    // Setup Lighting for 3D low-poly facets
    this.ambientLight = new THREE.AmbientLight(0x8cb896, 1.4);
    this.group.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    this.dirLight.position.set(50, 60, 40);
    this.group.add(this.dirLight);

    // Common Materials
    this.starMaterial = new THREE.PointsMaterial({
      color: COLOR_DARK_GREEN,
      size: 2.0,
      sizeAttenuation: false,
    });
    this.planetMaterial = new THREE.MeshLambertMaterial({
      color: COLOR_MID_GREEN,
      flatShading: true,
    });
    this.asteroidMaterial = new THREE.MeshLambertMaterial({
      color: COLOR_DARK_GREEN,
      flatShading: true,
    });
    this.debrisMaterial = new THREE.MeshLambertMaterial({
      color: COLOR_INK,
      flatShading: true,
    });
    this.ringMaterial = new THREE.MeshLambertMaterial({
      color: COLOR_DARK_GREEN,
      flatShading: true,
      side: THREE.DoubleSide,
    });

    // 1. Far Stars (Z = -12)
    this.starPositions = new Float32Array(this.starCount * 3);
    for (let i = 0; i < this.starCount; i++) {
      this.starPositions[i * 3] = (Math.random() - 0.1) * (GAME_WIDTH + 40);
      this.starPositions[i * 3 + 1] = Math.random() * GAME_HEIGHT;
      this.starPositions[i * 3 + 2] = -12;
    }
    this.starGeometry = new THREE.BufferGeometry();
    this.starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.starPositions, 3)
    );
    this.starPoints = new THREE.Points(this.starGeometry, this.starMaterial);
    this.group.add(this.starPoints);

    // 2. Mid-Distance Asteroid Field (Z = -6)
    for (let i = 0; i < 7; i++) {
      const radius = 2.5 + Math.random() * 3.0;
      const geo = new THREE.DodecahedronGeometry(radius, 0);
      const mesh = new THREE.Mesh(geo, this.asteroidMaterial);

      mesh.position.set(
        Math.random() * (GAME_WIDTH + 60),
        10 + Math.random() * (GAME_HEIGHT - 20),
        -6
      );

      const rotSpeed = new THREE.Vector3(
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 1.5
      );

      this.asteroids.push({ mesh, rotSpeed });
      this.group.add(mesh);
    }

    // 3. Build Stage 1 Celestial & Debris by default
    this.buildCelestialForStage(1);
    this.rebuildDebrisForStage(1);
  }

  setStage(stageNumber: number): void {
    const targetStage = Math.max(1, Math.min(3, stageNumber));
    if (this.currentStage === targetStage && this.debrisList.length > 0) return;
    this.currentStage = targetStage;
    this.buildCelestialForStage(targetStage);
    this.rebuildDebrisForStage(targetStage);
    this.setTheme(this.currentTheme);
  }

  private buildCelestialForStage(stage: number): void {
    // Clean up existing planet meshes
    while (this.planetGroup.children.length > 0) {
      const child = this.planetGroup.children[0] as THREE.Mesh;
      this.planetGroup.remove(child);
      child.geometry?.dispose();
    }
    this.planetRingMesh = null;

    if (stage === 1) {
      // Stage 1 // Verdant Orbit: Faceted Terrestrial World
      const geo = new THREE.IcosahedronGeometry(18, 1);
      this.planetMesh = new THREE.Mesh(geo, this.planetMaterial);
      this.planetMesh.position.set(130, 58, -9);
      this.planetGroup.add(this.planetMesh);
    } else if (stage === 2) {
      // Stage 2 // Iron Foundry: Ringed Smelter Gas Giant
      const planetGeo = new THREE.IcosahedronGeometry(16, 1);
      this.planetMesh = new THREE.Mesh(planetGeo, this.planetMaterial);
      this.planetMesh.position.set(130, 56, -9);

      // Low-poly planetary ring
      const ringGeo = new THREE.RingGeometry(21, 29, 20);
      this.planetRingMesh = new THREE.Mesh(ringGeo, this.ringMaterial);
      this.planetRingMesh.rotation.x = Math.PI / 2.6;
      this.planetRingMesh.rotation.y = Math.PI / 6.0;
      this.planetMesh.add(this.planetRingMesh);

      this.planetGroup.add(this.planetMesh);
    } else {
      // Stage 3 // Cyber Abyss: Geometric Void Singularity & Outer Resonance Ring
      const coreGeo = new THREE.OctahedronGeometry(15, 1);
      this.planetMesh = new THREE.Mesh(coreGeo, this.planetMaterial);
      this.planetMesh.position.set(130, 55, -9);

      const ringGeo = new THREE.TorusGeometry(21, 0.9, 6, 20);
      this.planetRingMesh = new THREE.Mesh(ringGeo, this.ringMaterial);
      this.planetRingMesh.rotation.x = Math.PI / 4;
      this.planetRingMesh.rotation.y = Math.PI / 3;
      this.planetMesh.add(this.planetRingMesh);

      this.planetGroup.add(this.planetMesh);
    }
  }

  private rebuildDebrisForStage(stage: number): void {
    // Dispose previous stage debris
    while (this.debrisGroup.children.length > 0) {
      const child = this.debrisGroup.children[0];
      this.debrisGroup.remove(child);
      child.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
        }
      });
    }
    this.debrisList.length = 0;

    const initialXPositions = [25, 68, 112, 155];

    if (stage === 1) {
      // Stage 1 // Verdant Orbit: Orbital Satellites, Solar Arrays & Relay Dishes
      // Prop 1: Communication Satellite (Core body + 2 Solar Wing Panels)
      const satGroup = new THREE.Group();
      const bodyMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 3.6, 6),
        this.debrisMaterial
      );
      const wingMesh = new THREE.Mesh(
        new THREE.BoxGeometry(9.0, 0.4, 2.2),
        this.debrisMaterial
      );
      const dishMesh = new THREE.Mesh(
        new THREE.ConeGeometry(1.6, 1.2, 6),
        this.debrisMaterial
      );
      dishMesh.position.y = 2.4;
      dishMesh.rotation.x = Math.PI;
      satGroup.add(bodyMesh, wingMesh, dishMesh);
      satGroup.position.set(initialXPositions[0], 25, -3);
      this.addDebrisItem(satGroup, 30.0, new THREE.Vector3(0.3, 0.5, 0.2));

      // Prop 2: Long Solar Array Mast with cross struts
      const mastGroup = new THREE.Group();
      const truss = new THREE.Mesh(
        new THREE.BoxGeometry(16, 1.2, 1.0),
        this.debrisMaterial
      );
      const strut1 = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 5.5, 0.4),
        this.debrisMaterial
      );
      const strut2 = strut1.clone();
      strut1.position.x = -4.5;
      strut2.position.x = 4.5;
      mastGroup.add(truss, strut1, strut2);
      mastGroup.position.set(initialXPositions[1], 65, -3);
      this.addDebrisItem(mastGroup, 32.0, new THREE.Vector3(0.1, 0.2, -0.3));

      // Prop 3: Deep-Space Sensor Dish Relay
      const dishRelay = new THREE.Group();
      const parabola = new THREE.Mesh(
        new THREE.CylinderGeometry(3.2, 0.8, 1.6, 8),
        this.debrisMaterial
      );
      const feedHorn = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 3.2, 4),
        this.debrisMaterial
      );
      feedHorn.position.y = 1.6;
      dishRelay.add(parabola, feedHorn);
      dishRelay.position.set(initialXPositions[2], 40, -3);
      this.addDebrisItem(dishRelay, 28.0, new THREE.Vector3(0.4, -0.2, 0.4));

      // Prop 4: Navigational Beacon Cube with diagonal mast
      const beacon = new THREE.Group();
      const bCube = new THREE.Mesh(
        new THREE.BoxGeometry(3.0, 3.0, 3.0),
        this.debrisMaterial
      );
      const bMast = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 7.5, 0.4),
        this.debrisMaterial
      );
      bMast.rotation.z = Math.PI / 4;
      beacon.add(bCube, bMast);
      beacon.position.set(initialXPositions[3], 72, -3);
      this.addDebrisItem(beacon, 33.0, new THREE.Vector3(-0.2, 0.4, 0.3));
    } else if (stage === 2) {
      // Stage 2 // Iron Foundry: Heavy Industrial I-Beams, Conduit Pipes, Gears & Cargo Pods
      // Prop 1: Heavy Industrial I-Beam Girder
      const girder = new THREE.Group();
      const web = new THREE.Mesh(
        new THREE.BoxGeometry(18, 3.2, 1.8),
        this.debrisMaterial
      );
      const flangeL = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 5.4, 2.2),
        this.debrisMaterial
      );
      const flangeR = flangeL.clone();
      flangeL.position.x = -8.5;
      flangeR.position.x = 8.5;
      girder.add(web, flangeL, flangeR);
      girder.position.set(initialXPositions[0], 30, -3);
      this.addDebrisItem(girder, 31.0, new THREE.Vector3(0.1, 0.3, -0.4));

      // Prop 2: Smelter Conduit Pipe (Open cylinder with collar rings)
      const pipeGroup = new THREE.Group();
      const pipe = new THREE.Mesh(
        new THREE.CylinderGeometry(2.4, 2.4, 15, 8, 1, true),
        this.debrisMaterial
      );
      pipe.rotation.z = Math.PI / 3;
      const collar1 = new THREE.Mesh(
        new THREE.CylinderGeometry(2.7, 2.7, 1.2, 8),
        this.debrisMaterial
      );
      collar1.position.y = -4;
      collar1.rotation.z = Math.PI / 3;
      const collar2 = collar1.clone();
      collar2.position.y = 4;
      pipeGroup.add(pipe, collar1, collar2);
      pipeGroup.position.set(initialXPositions[1], 62, -3);
      this.addDebrisItem(pipeGroup, 34.0, new THREE.Vector3(0.3, -0.2, 0.3));

      // Prop 3: Foundry Slag Container Pod
      const slagMesh = new THREE.Mesh(
        new THREE.DodecahedronGeometry(3.8, 0),
        this.debrisMaterial
      );
      slagMesh.position.set(initialXPositions[2], 18, -3);
      this.addDebrisItem(slagMesh, 27.0, new THREE.Vector3(0.6, 0.5, 0.3));

      // Prop 4: Heavy Industrial Sprocket Gear
      const gear = new THREE.Group();
      const cog = new THREE.Mesh(
        new THREE.CylinderGeometry(4.0, 4.0, 1.4, 8),
        this.debrisMaterial
      );
      cog.rotation.x = Math.PI / 2;
      gear.add(cog);
      gear.position.set(initialXPositions[3], 48, -3);
      this.addDebrisItem(gear, 32.0, new THREE.Vector3(0.2, 0.4, 0.6));
    } else {
      // Stage 3 // Cyber Abyss: Crystalline Monoliths, Warp Gate Arcs & Void Shards
      // Prop 1: Floating Crystalline Octahedron Monolith
      const crystal1 = new THREE.Mesh(
        new THREE.OctahedronGeometry(4.5, 0),
        this.debrisMaterial
      );
      crystal1.position.set(initialXPositions[0], 28, -3);
      this.addDebrisItem(crystal1, 29.0, new THREE.Vector3(0.4, 0.5, 0.3));

      // Prop 2: Ancient Warp Gateway Ring Fragment
      const gateArch = new THREE.Mesh(
        new THREE.TorusGeometry(5.6, 1.2, 6, 14, Math.PI * 0.85),
        this.debrisMaterial
      );
      gateArch.position.set(initialXPositions[1], 60, -3);
      this.addDebrisItem(gateArch, 33.0, new THREE.Vector3(0.2, -0.3, 0.5));

      // Prop 3: Void Pyramid Obelisk
      const obelisk = new THREE.Mesh(
        new THREE.ConeGeometry(2.4, 14, 4),
        this.debrisMaterial
      );
      obelisk.rotation.z = Math.PI / 6;
      obelisk.position.set(initialXPositions[2], 22, -3);
      this.addDebrisItem(obelisk, 30.0, new THREE.Vector3(0.5, 0.2, -0.4));

      // Prop 4: Prismatic Tetrahedron Void Shard
      const shard = new THREE.Mesh(
        new THREE.TetrahedronGeometry(4.8, 0),
        this.debrisMaterial
      );
      shard.position.set(initialXPositions[3], 70, -3);
      this.addDebrisItem(shard, 35.0, new THREE.Vector3(-0.4, 0.6, 0.2));
    }
  }

  private addDebrisItem(
    object: THREE.Object3D,
    speed: number,
    rotSpeed: THREE.Vector3
  ): void {
    this.debrisGroup.add(object);
    this.debrisList.push({ object, rotSpeed, speed });
  }

  update(dt: number): void {
    // 1. Update Starfield
    const pos = this.starPositions;
    for (let i = 0; i < this.starCount; i++) {
      pos[i * 3] -= this.starSpeed * dt;
      if (pos[i * 3] < -10) {
        pos[i * 3] += GAME_WIDTH + 30;
        pos[i * 3 + 1] = Math.random() * GAME_HEIGHT;
      }
    }
    this.starGeometry.attributes.position.needsUpdate = true;

    // 2. Update Distant Celestial Body & Accessories
    if (this.planetMesh) {
      this.planetMesh.position.x -= this.planetSpeed * dt;
      this.planetMesh.rotation.y += dt * 0.08;
      this.planetMesh.rotation.z += dt * 0.03;

      if (this.planetRingMesh) {
        // Counter-rotation / precession for planetary ring
        this.planetRingMesh.rotation.z += dt * 0.12;
      }

      if (this.planetMesh.position.x < -35) {
        this.planetMesh.position.x = GAME_WIDTH + 45;
        this.planetMesh.position.y = 25 + Math.random() * 45;
      }
    }

    // 3. Update Mid-Distance Asteroids
    for (let i = 0; i < this.asteroids.length; i++) {
      const ast = this.asteroids[i];
      ast.mesh.position.x -= this.asteroidSpeed * dt;
      ast.mesh.rotation.x += ast.rotSpeed.x * dt;
      ast.mesh.rotation.y += ast.rotSpeed.y * dt;
      ast.mesh.rotation.z += ast.rotSpeed.z * dt;

      if (ast.mesh.position.x < -20) {
        ast.mesh.position.x = GAME_WIDTH + 25 + Math.random() * 30;
        ast.mesh.position.y = 10 + Math.random() * (GAME_HEIGHT - 20);
      }
    }

    // 4. Update Level-Specific Floating Debris
    for (let i = 0; i < this.debrisList.length; i++) {
      const deb = this.debrisList[i];
      deb.object.position.x -= deb.speed * dt;
      deb.object.rotation.x += deb.rotSpeed.x * dt;
      deb.object.rotation.y += deb.rotSpeed.y * dt;
      deb.object.rotation.z += deb.rotSpeed.z * dt;

      if (deb.object.position.x < -30) {
        deb.object.position.x = GAME_WIDTH + 30 + Math.random() * 40;
        deb.object.position.y = 8 + Math.random() * (GAME_HEIGHT - 16);
      }
    }
  }

  setTheme(themeId: ThemeId): void {
    this.currentTheme = themeId;
    const palette = THEME_PALETTES[themeId] || THEME_PALETTES.verdant;
    this.ambientLight.color.setHex(palette.mid);
    this.dirLight.color.setHex(palette.accent);
    this.starMaterial.color.setHex(palette.dark);
    this.planetMaterial.color.setHex(palette.mid);
    this.asteroidMaterial.color.setHex(palette.dark);
    this.debrisMaterial.color.setHex(palette.ink);
    this.ringMaterial.color.setHex(palette.dark);
  }

  dispose(): void {
    this.starGeometry.dispose();
    this.starMaterial.dispose();
    this.planetMaterial.dispose();
    this.asteroidMaterial.dispose();
    this.debrisMaterial.dispose();
    this.ringMaterial.dispose();

    for (const a of this.asteroids) {
      a.mesh.geometry.dispose();
    }

    while (this.planetGroup.children.length > 0) {
      const child = this.planetGroup.children[0] as THREE.Mesh;
      this.planetGroup.remove(child);
      child.geometry?.dispose();
    }

    while (this.debrisGroup.children.length > 0) {
      const child = this.debrisGroup.children[0];
      this.debrisGroup.remove(child);
      child.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
        }
      });
    }
  }
}
