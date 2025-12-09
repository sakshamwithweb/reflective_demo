import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/Addons.js'

const path = (name) => `${process.env.PUBLIC_URL}/modelss/${name}.fbx`

export const FbxModel = () => {
    const fbx = useLoader(FBXLoader, `${process.env.PUBLIC_URL}/modelss/model.fbx`)
    const mixer = new THREE.AnimationMixer(fbx)
    // const gui = new GUI()

    useFrame(({clock}) => {
        mixer?.update(1)
    })
    const [bellyDance, goofyRunning, sambaDance] = useLoader(FBXLoader, [path("Bellydancing"), path("goofyRunning"), path("sambaDance")])

    useEffect(() => {
        fbx.scale.set(0.008, 0.008, 0.008)
        // const mixer = new THREE.AnimationMixer(fbx)
        const ac = mixer.clipAction(sambaDance.animations[0])
        ac.timeScale = 0.015
        // ac.sp
        ac.play()
    }, [fbx, bellyDance, goofyRunning, sambaDance])


    return <primitive object={fbx} />
}