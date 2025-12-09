import { useFrame, useLoader } from '@react-three/fiber'
import { GUI } from 'dat.gui'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/Addons.js'

const path = (name) => `${process.env.PUBLIC_URL}/modelss/${name}.fbx`

export const FbxModel = () => {
    const fbx = useLoader(FBXLoader, path('model'))
    const animations = useLoader(FBXLoader, [
        path('Bellydancing'),
        path('goofyRunning'),
        path('sambaDance')
    ])
    const mixerRef = useRef()
    const actionsRef = useRef([])

    useEffect(() => {
        if (!fbx) return
        const mixer = new THREE.AnimationMixer(fbx)
        mixerRef.current = mixer

        fbx.scale.set(0.008, 0.008, 0.008)

        const actions = animations.map((anim) => {
            const clip = anim.animations[0]
            return mixer.clipAction(clip)
        })
        actionsRef.current = actions

        const gui = new GUI()
        const animationFolder = gui.addFolder("Animations")

        const switchAnimation = (next) => {
            let prev;
            actionsRef.current.forEach((action) => {
                if (action.isRunning()) prev = action
            }) // prev action
            if (prev === next) return
            if (prev) prev?.crossFadeTo(next, 2)
            next.reset().play()
        }

        const settings = {
            Bellydancing: () => { switchAnimation(actions[0]) },
            goofyRunning: () => { switchAnimation(actions[1]) },
            sambaDance: () => { switchAnimation(actions[2]) }
        }
        const names = ["Bellydancing", "goofyRunning", "sambaDance"]
        names.forEach((name) => animationFolder.add(settings, name))
        animationFolder.open()
    }, [fbx, animations])

    useFrame(() => {
        mixerRef.current?.update(1 / 60) // 60 fps
    })

    return <primitive object={fbx} />
}