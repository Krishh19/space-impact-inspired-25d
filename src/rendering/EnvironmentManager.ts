import * as THREE from "three";
import { COLOR_DARK_GREEN, COLOR_INK, COLOR_MID_GREEN, GAME_HEIGHT, GAME_WIDTH } from "../core/Constants";

interface Asteroid {
  mesh: THREE.Mesh;
  rotSpeed: THREE.Vector3;
}

interface OrbitalDebris {
  mesh: THREE.Mesh;
  rotSpeedZ: number;
}

export class EnvironmentManager {
  private readonly group = new THREE.Group();

  // Far starfield
  private starGeometry!: THREE.BufferGeometry;
  private starPoints!: THREE.Points;
  private readonly starPositions: Float32Array;
  private readonly starCount = 60;
  private readonly starSpeed = 3.0; // units/sec

  // Distant Low-Poly Planet
  private planet!: THREE.Mesh;
  private readonly planetSpeed = 5.0; // units/sec

  // Mid-Distance Asteroids
  private readonly asteroids: Asteroid[] = [];
  private readonly asteroidSpeed = 16.0; // units/sec

  // Near Orbital Debris / Props
  private readonly debrisList: OrbitalDebris[] = [];
  private readonly debrisSpeed = 32.0; // units/sec

  // Materials
  private starMaterial!: THREE.PointsMaterial;
  private planetMaterial!: THREE.MeshLambertMaterial;
  private asteroidMaterial!: THREE.MeshLambertMaterial;
  private debrisMaterial!: THREE.MeshLambertMaterial;

  // Lights
  private ambientLight!: THREE.AmbientLight;
  private dirLight!: THREE.DirectionalLight;

  constructor(scene: THREE.Scene) {
    scene.add(this.group);

    // Setup Lighting for 3D low-poly facets
    this.ambientLight = new THREE.AmbientLight(0x8cb896, 1.4);
    this.group.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    this.dirLight.position.set(50, 60, 40);
    this.group.add(this.dirLight);

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
    this.starMaterial = new THREE.PointsMaterial({
      color: COLOR_DARK_GREEN,
      size: 2.0,
      sizeAttenuation: false,
    });
    this.starPoints = new THREE.Points(this.starGeometry, this.starMaterial);
    this.group.add(this.starPoints);

    // 2. Distant Low-Poly Faceted Planet (Z = -9)
    const planetGeo = new THREE.IcosahedronGeometry(18, 1);
    this.planetMaterial = new THREE.MeshLambertMaterial({
      color: COLOR_MID_GREEN,
      flatShading: true,
    });
    this.planet = new THREE.Mesh(planetGeo, this.planetMaterial);
    this.planet.position.set(130, 60, -9);
    this.group.add(this.planet);

    // 3. Mid-Distance Asteroid Field (Z = -6)
    this.asteroidMaterial = new THREE.MeshLambertMaterial({
      color: COLOR_DARK_GREEN,
      flatShading: true,
    });
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

    // 4. Near Floating Orbital Debris / Industrial Beams (Z = -3)
    this.debrisMaterial = new THREE.MeshLambertMaterial({
      color: COLOR_INK,
      flatShading: true,
    });
    for (let i = 0; i < 4; i++) {
      const length = 12 + Math.random() * 12;
      const thickness = 1.5 + Math.random() * 1.5;
      const geo = new THREE.BoxGeometry(length, thickness, thickness);
      const mesh = new THREE.Mesh(geo, this.debrisMaterial);

      mesh.position.set(
        Math.random() * (GAME_WIDTH + 80),
        8 + Math.random() * (GAME_HEIGHT - 16),
        -3
      );
      mesh.rotation.z = Math.random() * Math.PI;

      this.debrisList.push({
        mesh,
        rotSpeedZ: (Math.random() - 0.5) * 0.4,
      });
      this.group.add(mesh);
    }
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

    // 2. Update Distant Planet
    this.planet.position.x -= this.planetSpeed * dt;
    this.planet.rotation.y += dt * 0.08;
    this.planet.rotation.z += dt * 0.03;
    if (this.planet.position.x < -30) {
      this.planet.position.x = GAME_WIDTH + 40;
      this.planet.position.y = 25 + Math.random() * 45;
    }

    // 3. Update Asteroids
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

    // 4. Update Near Orbital Debris
    for (let i = 0; i < this.debrisList.length; i++) {
      const deb = this.debrisList[i];
      deb.mesh.position.x -= this.debrisSpeed * dt;
      deb.mesh.rotation.z += deb.rotSpeedZ * dt;

      if (deb.mesh.position.x < -30) {
        deb.mesh.position.x = GAME_WIDTH + 30 + Math.random() * 40;
        deb.mesh.position.y = 8 + Math.random() * (GAME_HEIGHT - 16);
      }
    }
  }

  dispose(): void {
    this.starGeometry.dispose();
    this.starMaterial.dispose();
    this.planet.geometry.dispose();
    this.planetMaterial.dispose();
    for (const a of this.asteroids) {
      a.mesh.geometry.dispose();
    }
    this.asteroidMaterial.dispose();
    for (const d of this.debrisList) {
      d.mesh.geometry.dispose();
    }
    this.debrisMaterial.dispose();
  }
}
