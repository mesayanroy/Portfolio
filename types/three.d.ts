// Stub type declarations for three.js module
declare module "three" {
  export class Vector3 {
    constructor(x?: number, y?: number, z?: number)
    x: number
    y: number
    z: number
  }

  export class Color {
    constructor(hex?: number | string)
    r: number
    g: number
    b: number
    multiplyScalar(s: number): Color
    setHSL(h: number, s: number, l: number): Color
  }

  export class Mesh {
    position: Vector3
    rotation: { x: number; y: number; z: number }
    scale: Vector3
  }

  export class Geometry {}
  export class BoxGeometry extends Geometry {
    constructor(width: number, height: number, depth: number)
  }

  export class Material {}
  export class MeshStandardMaterial extends Material {
    constructor(props?: any)
    color: Color
  }

  export class Light {}
  export class AmbientLight extends Light {
    constructor(color?: number | string, intensity?: number)
  }

  export class PointLight extends Light {
    constructor(color?: number | string, intensity?: number)
    position: Vector3
  }

  export class Camera {}
  export class PerspectiveCamera extends Camera {
    constructor(fov?: number, aspect?: number, near?: number, far?: number)
    position: Vector3
  }

  export * from "three"
}



