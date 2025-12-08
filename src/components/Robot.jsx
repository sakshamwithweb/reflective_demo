/*
Source: https://sketchfab.com/3d-models/assassin-autotrooper-81fa17bd0e514dfeb7a97d8b4507ca14
*/

import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const Robot = (props) => {
  const gltf = useLoader(GLTFLoader, `${process.env.PUBLIC_URL}/models/thug_robot.glb`)
  useEffect(() => {
    gltf.scene.scale.set(0.4, 0.4, 0.4)
    // gltf.scene.rotateY(-0.5 * Math.PI)
    gltf.scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true
        object.receiveShadow = true
        object.material.envMapIntensity = 20
        object.material.emissiveIntensity = 20
      }
    })
  }, [gltf])
  return <primitive object={gltf.scene} />
}
