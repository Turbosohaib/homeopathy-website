"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";


const BackgroundAnimation = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const particlesLoaded = useCallback(async () => {
        // no-op
    }, []);

    return init && (
        <Particles
            id="tsparticles"
            className="absolute inset-0 z-0"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fullScreen: false,
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: {
                            enable: true,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#91c788", "#a0d995", "#b5e48c"], // Soothing green palette
                    },
                    move: {
                        enable: true,
                        speed: 1, // Slightly faster
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                    number: {
                        value: 100, // Increased number
                        density: {
                            enable: true,
                            width: 900,
                        },
                    },
                    opacity: {
                        value: 0.35,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}


export default BackgroundAnimation