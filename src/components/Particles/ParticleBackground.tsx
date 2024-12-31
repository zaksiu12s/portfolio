import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <>
            <div style={{ position: 'relative' }}>
                <Particles
                    className="absolute top-0 left-0 w-full h-full"
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        fpsLimit: 150,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 0, // Reduce number of particles on click
                                },
                                repulse: {
                                    distance: 170,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2, // Slower movement speed
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 3000, // Reduce particle density (spread them out)
                                },
                                value: 150, // Fewer particles
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 }, // Smaller particles
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </>

    );
};
