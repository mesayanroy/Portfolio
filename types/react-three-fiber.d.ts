// React Three Fiber JSX declarations for three.js components
import type React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & any
      group: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & any
      boxGeometry: any
      meshStandardMaterial: any
      ambientLight: any
      pointLight: any
      perspectiveCamera: any
      [elemName: string]: any
    }
  }
}

export {}

