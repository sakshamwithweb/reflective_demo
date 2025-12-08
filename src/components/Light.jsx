import { useHelper } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { SpotLightHelper } from 'three'

export const Light = ({ color, decay = 1, intensity, position }) => {
    const light = useRef()
    // useHelper(light, SpotLightHelper, "cyan")
    return <spotLight angle={0.6} penumbra={0.5} castShadow shadow-bias={-0.0001} ref={light} color={color} decay={decay} intensity={intensity} position={position} />
}
