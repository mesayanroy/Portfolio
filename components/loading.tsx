"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { motion } from "framer-motion"

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.Camera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const planeRef = useRef<THREE.Group | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    sceneRef.current = scene

    // Camera setup
    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000)
    camera.position.set(0, 25, 60)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(100, 150, 100)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.far = 500
    directionalLight.shadow.camera.left = -200
    directionalLight.shadow.camera.right = 200
    directionalLight.shadow.camera.top = 200
    directionalLight.shadow.camera.bottom = -100
    scene.add(directionalLight)

    // Runway - Full width
    const runwayGeometry = new THREE.PlaneGeometry(300, 40)
    const runwayMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a3a4a,
      roughness: 0.7,
      metalness: 0.1,
    })
    const runway = new THREE.Mesh(runwayGeometry, runwayMaterial)
    runway.rotation.x = -Math.PI / 2
    runway.position.z = 0
    runway.receiveShadow = true
    scene.add(runway)

    // Runway markings
    const lineGeometry = new THREE.PlaneGeometry(300, 0.8)
    const lineMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      emissive: 0x333333,
    })

    // Center line (dashed)
    for (let i = -150; i < 150; i += 8) {
      const line = new THREE.Mesh(lineGeometry.clone(), lineMaterial.clone())
      line.rotation.x = -Math.PI / 2
      line.position.set(0, 0.01, i)
      line.scale.z = 0.4
      scene.add(line)
    }

    // Side lines
    for (let side of [-19, 19]) {
      const sideLineGeometry = new THREE.PlaneGeometry(300, 0.5)
      const sideLine = new THREE.Mesh(sideLineGeometry, lineMaterial)
      sideLine.rotation.x = -Math.PI / 2
      sideLine.position.set(side, 0.01, 0)
      scene.add(sideLine)
    }

    // Create airplane
    const planeGroup = new THREE.Group()
    planeRef.current = planeGroup
    scene.add(planeGroup)

    // Fuselage (main body)
    const fuselageGeometry = new THREE.CylinderGeometry(1.2, 1, 20, 16)
    const fuselageMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 0.7,
      roughness: 0.2,
    })
    const fuselage = new THREE.Mesh(fuselageGeometry, fuselageMaterial)
    fuselage.castShadow = true
    fuselage.receiveShadow = true
    fuselage.rotation.z = Math.PI / 2
    planeGroup.add(fuselage)

    // Cockpit
    const cockpitGeometry = new THREE.SphereGeometry(1.5, 8, 8)
    const cockpitMaterial = new THREE.MeshStandardMaterial({
      color: 0x404050,
      metalness: 0.5,
      roughness: 0.3,
    })
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial)
    cockpit.position.x = -8
    cockpit.scale.set(1, 0.8, 0.9)
    cockpit.castShadow = true
    planeGroup.add(cockpit)

    // Windows
    const windowGeometry = new THREE.SphereGeometry(0.4, 4, 4)
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0x87ceeb,
      metalness: 0.8,
      roughness: 0.1,
    })
    const window1 = new THREE.Mesh(windowGeometry, windowMaterial)
    window1.position.set(-6, 0.8, 0.3)
    planeGroup.add(window1)

    // Main Wings - Realistic design
    const wingGeometry = new THREE.BufferGeometry()
    
    // Create wing with taper and airfoil-like shape
    const wingVertices = new Float32Array([
      // Left wing
      -12, 0.3, 0,    // root top
      -12, -0.3, 0,   // root bottom
      0, 0.15, 4,     // tip top
      0, -0.15, 4,    // tip bottom
      
      // Right wing
      12, 0.3, 0,     // root top
      12, -0.3, 0,    // root bottom
      0, 0.15, -4,    // tip top
      0, -0.15, -4,   // tip bottom
    ])
    
    const wingIndices = new Uint32Array([
      // Left wing top
      0, 2, 1,
      1, 2, 3,
      // Left wing sides
      0, 3, 2,
      // Right wing top
      4, 5, 6,
      5, 7, 6,
      // Right wing sides
      4, 6, 7,
    ])
    
    wingGeometry.setAttribute('position', new THREE.BufferAttribute(wingVertices, 3))
    wingGeometry.setIndex(new THREE.BufferAttribute(wingIndices, 1))
    wingGeometry.computeVertexNormals()
    
    const wingMaterial = new THREE.MeshStandardMaterial({
      color: 0xb0b0b0,
      metalness: 0.6,
      roughness: 0.3,
      side: THREE.DoubleSide,
    })
    const wing = new THREE.Mesh(wingGeometry, wingMaterial)
    wing.castShadow = true
    planeGroup.add(wing)

    // Wing tips (winglets) - for realism
    const wingletGeometry = new THREE.BoxGeometry(0.3, 1.5, 0.8)
    const wingletMaterial = new THREE.MeshStandardMaterial({
      color: 0xa0a0a0,
      metalness: 0.65,
      roughness: 0.25,
    })
    
    const wingletLeft = new THREE.Mesh(wingletGeometry, wingletMaterial)
    wingletLeft.position.set(0, 0.5, 3.8)
    wingletLeft.castShadow = true
    planeGroup.add(wingletLeft)
    
    const wingletRight = new THREE.Mesh(wingletGeometry, wingletMaterial)
    wingletRight.position.set(0, 0.5, -3.8)
    wingletRight.castShadow = true
    planeGroup.add(wingletRight)

    // Tail
    const tailGeometry = new THREE.BoxGeometry(8, 0.3, 2)
    const tailMaterial = new THREE.MeshStandardMaterial({
      color: 0xa0a0a0,
      metalness: 0.65,
      roughness: 0.25,
    })
    const tail = new THREE.Mesh(tailGeometry, tailMaterial)
    tail.position.x = 12
    tail.castShadow = true
    planeGroup.add(tail)

    // Vertical stabilizer
    const stabilizerGeometry = new THREE.BoxGeometry(0.3, 3, 2)
    const stabilizer = new THREE.Mesh(stabilizerGeometry, tailMaterial)
    stabilizer.position.set(12, 1.8, 0)
    planeGroup.add(stabilizer)

    // Landing gear
    const gearGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 8)
    const gearMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.8,
      roughness: 0.4,
    })
    
    const gearLeft = new THREE.Mesh(gearGeometry, gearMaterial)
    gearLeft.position.set(-3, -1.5, -3)
    gearLeft.castShadow = true
    planeGroup.add(gearLeft)

    const gearRight = new THREE.Mesh(gearGeometry, gearMaterial)
    gearRight.position.set(-3, -1.5, 3)
    gearRight.castShadow = true
    planeGroup.add(gearRight)

    const nosegear = new THREE.Mesh(gearGeometry, gearMaterial)
    nosegear.position.set(-10, -1.5, 0)
    nosegear.scale.y = 0.8
    nosegear.castShadow = true
    planeGroup.add(nosegear)

    // Engines (cylinders on wings)
    for (let sidePos of [-12, 12]) {
      const engineGeometry = new THREE.CylinderGeometry(1.2, 1.2, 3.5, 16)
      const engineMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a2a2a,
        metalness: 0.7,
        roughness: 0.5,
      })
      const engine = new THREE.Mesh(engineGeometry, engineMaterial)
      engine.position.set(0, 0, sidePos)
      engine.rotation.z = Math.PI / 2
      engine.castShadow = true
      planeGroup.add(engine)

      // Engine glow
      const glowGeometry = new THREE.SphereGeometry(1.5, 8, 8)
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6b35,
        transparent: true,
        opacity: 0.3,
      })
      const engineGlow = new THREE.Mesh(glowGeometry, glowMaterial)
      engineGlow.position.set(2, 0, sidePos)
      planeGroup.add(engineGlow)
    }

    // Initial plane position
    planeGroup.position.set(-120, 2, 0)

    // Animation timeline
    let animationTime = 0
    const animationDuration = 4.3 // 4.3 seconds total

    const animate = () => {
      animationTime += 0.016 // ~60fps
      const progress = Math.min(animationTime / animationDuration, 1)

      if (planeGroup) {
        // Speed takeoff animation
        if (progress < 0.75) {
          // Acceleration on runway towards center (0-0.75)
          const runwayProgress = progress / 0.75
          const speedCurve = runwayProgress * runwayProgress // Quadratic acceleration
          planeGroup.position.x = -120 + speedCurve * 120
          planeGroup.position.y = 2
          planeGroup.rotation.z = 0
        } else {
          // Rapid takeoff and climb from center (0.75-1)
          const takeoffProgress = (progress - 0.75) / 0.25
          planeGroup.position.x = 0 + takeoffProgress * 100
          planeGroup.position.y = 2 + takeoffProgress * takeoffProgress * 180 // Exponential climb
          planeGroup.position.z = -takeoffProgress * 60
          planeGroup.rotation.z = takeoffProgress * (Math.PI / 3.5) // Smooth pitch up
        }
      }

      renderer.render(scene, camera)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = containerRef.current?.clientWidth || width
      const newHeight = containerRef.current?.clientHeight || height
      
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />

      {/* UI Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-16 pointer-events-none">
        {/* Loading indicator */}
        <motion.div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(148, 163, 184, 1) 0%, rgba(107, 114, 128, 1) 100%)",
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-gray-500 text-xs md:text-sm font-mono tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          PREPARING FOR TAKEOFF...
        </motion.p>
      </div>
    </div>
  )
}
