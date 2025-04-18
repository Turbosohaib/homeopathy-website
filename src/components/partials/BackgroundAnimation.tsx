"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const BackgroundAnimation = () => {
    const [init, setInit] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // New state to track screen size

    useEffect(() => {
        // Check if the screen width is less than 768px
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Call the function on mount and resize
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Only initialize particles if not on mobile
        if (!isMobile) {
            initParticlesEngine(async (engine: Engine) => {
                await loadSlim(engine);
            }).then(() => setInit(true));
        }
    }, [isMobile]);

    const particlesLoaded = useCallback(async () => {
        // no-op
    }, []);

    return !isMobile && init ? (
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
                        },
                        resize: {
                            enable: true,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#a0ff8f", // firefly green
                    },
                    shadow: {
                        enable: true,
                        color: "#a0ff8f",
                        blur: 5, // soft glow effect
                        offset: {
                            x: 0,
                            y: 0,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                    number: {
                        value: 60,
                        density: {
                            enable: true,
                            width: 900,
                        },
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.7 },
                        animation: {
                            enable: true,
                            speed: 1,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 2, max: 4 },
                        animation: {
                            enable: true,
                            speed: 2,
                            sync: false,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                },
                detectRetina: true,
            }}
        />
    ) : null;
};

export default BackgroundAnimation;
