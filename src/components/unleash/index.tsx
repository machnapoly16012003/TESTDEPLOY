import { useAnimations, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import imgUnleash from '../../assets/images/unpleash.png'

interface ModelProps {
  model: { name: string }
  rotationY: number
  scale: [number, number, number]
  position: [number, number, number]
}

const MyModel = ({ model, rotationY, scale, position }: ModelProps) => {
  const modelRef = useRef<THREE.Object3D>(null)
  const modelUrl = '/models/' + model?.name
  const { scene, animations } = useGLTF(modelUrl)

  const { actions, names } = useAnimations(animations, modelRef)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationY
      modelRef.current.scale.set(scale[0], scale[1], scale[2])
      modelRef.current.position.set(position[0], position[1], position[2])
    }
  })

  useEffect(() => {
    names.forEach((k) => {
      actions[k]?.play()
    })
  }, [names, actions])

  return <primitive ref={modelRef} object={scene} />
}

const Unleash = () => {
  const [rotationY, setRotationY] = useState(0)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (!isMobileOrTablet && scrollY > 2780 && scrollY < 2950) {
        setRotationY(scrollY * -0.0085)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileOrTablet])

  useEffect(() => {
    const handleResize = () => {
      const isMobileOrTablet = window.innerWidth <= 1024
      const isDesktop = window.innerWidth > 1024 && window.innerWidth <= 1920
      setIsMobileOrTablet(isMobileOrTablet)
      setIsDesktop(isDesktop)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='unleash-the-power container-wrapper relative flex h-screen flex-col items-center gap-[24px] py-[80px] md:py-[100px] lg:flex-row'>
      <div className='absolute z-[1000] flex w-[100%] flex-col'>
        <h2 className='title-wrap font-semibold tracking-[-2px] md:text-[40px] lg:text-[56px]'>Unleash The Power</h2>
        <h1 className='mt-[-10px] text-[70px] font-bold md:text-[56px] lg:flex lg:max-w-[700px] lg:justify-end lg:text-[104px]'>
          Of Offline
        </h1>
        <h2 className='title-wrap mt-[-10px] font-semibold tracking-[-2px] md:text-[40px] lg:flex lg:max-w-[700px] lg:justify-end lg:text-[56px] lg:font-semibold'>
          Commerce
        </h2>
        <div className='mt-[20px] flex max-w-[600px] flex-col items-start md:mt-[50px] md:items-end'>
          <span>
            We offer a 24/7 AI Assistant for shop monitoring . It detects issues like theft, employee misconduct, and
            unhappy customers, providing instant alerts. It tracks employee performance, calculates hours and bonuses,
            and analyzes CRM and POS data for real-time insights.
          </span>
          <button className='btn-gradien-astronaut mt-8 flex items-center justify-center'>
            <Link to='http://pre.fi.ai' className='h-full'>
              start with AI
            </Link>
            <GoArrowRight />
          </button>
        </div>
      </div>
      <div className='relative top-[450px] ml-auto h-full w-[100%] md:top-[300px] lg:top-[0px] lg:w-[45%]'>
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -100%)',
            width: '100%',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <img src={imgUnleash} alt='' width='100%' style={{ height: isDesktop ? '300px' : '450px' }} />
        </div>
        <Canvas
          shadows
          camera={{
            position: isMobileOrTablet ? [0, 0, 6] : [6, 2, 8]
            // fov: 35,
            // near: 1,
            // far: 30
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          <MyModel
            model={{ name: 'IHVtsHAQU7cF91LAuAlKN5.glb' }}
            rotationY={rotationY}
            scale={isMobileOrTablet ? [0.6, 0.6, 0.6] : [1.5, 1.5, 1.6]}
            position={isMobileOrTablet ? [0, -1, 0] : [0, -6, 0]}
          />
        </Canvas>
      </div>
    </div>
  )
}

export default Unleash
