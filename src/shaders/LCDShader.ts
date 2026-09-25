import * as THREE from "three";

export const LCDShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    tPrevious: { value: null as THREE.Texture | null },
    uResolution: { value: new THREE.Vector2(320, 180) },
    uGhosting: { value: 0.14 },
    uGridIntensity: { value: 0.12 },
    uVignette: { value: 0.22 },
    uColorInk: { value: new THREE.Color(0x0f2a1d) },
    uColorDark: { value: new THREE.Color(0x265c3f) },
    uColorMid: { value: new THREE.Color(0x528f65) },
    uColorLight: { value: new THREE.Color(0x92b7a0) },
  },

  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,

  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform sampler2D tPrevious;
    uniform vec2 uResolution;
    uniform float uGhosting;
    uniform float uGridIntensity;
    uniform float uVignette;
    uniform vec3 uColorInk;
    uniform vec3 uColorDark;
    uniform vec3 uColorMid;
    uniform vec3 uColorLight;

    varying vec2 vUv;

    void main() {
      // 1. Texture sampling
      vec4 curSample = texture2D(tDiffuse, vUv);
      vec4 prevSample = texture2D(tPrevious, vUv);

      // 2. Liquid-crystal response persistence (ghosting)
      vec3 blended = mix(curSample.rgb, prevSample.rgb, uGhosting);

      // 3. Luminance calculation
      float lum = dot(blended, vec3(0.299, 0.587, 0.114));

      // 4. Monochrome 4-level quantization with accent retention
      float maxC = max(blended.r, max(blended.g, blended.b));
      float minC = min(blended.r, min(blended.g, blended.b));
      float sat = maxC > 0.001 ? (maxC - minC) / maxC : 0.0;

      vec3 lcdCol;
      // Retain warm amber / red accents for powerups or warning indicators
      if (sat > 0.4 && blended.r > blended.g * 1.15) {
        lcdCol = blended;
      } else {
        if (lum < 0.04) {
          lcdCol = uColorInk;
        } else if (lum < 0.13) {
          lcdCol = uColorDark;
        } else if (lum < 0.30) {
          lcdCol = uColorMid;
        } else {
          lcdCol = uColorLight;
        }
      }

      // 5. Subtle subpixel LCD grid boundary lines
      vec2 cell = fract(vUv * uResolution);
      float cellBorder = step(0.08, cell.x) * step(0.08, cell.y);
      lcdCol = mix(lcdCol * (1.0 - uGridIntensity), lcdCol, cellBorder);

      // 6. Restrained handheld LCD vignette
      vec2 uvOffset = (vUv - 0.5) * 1.35;
      float vig = 1.0 - dot(uvOffset, uvOffset) * uVignette;
      lcdCol *= clamp(vig, 0.0, 1.0);

      gl_FragColor = vec4(lcdCol, 1.0);
    }
  `,
};
