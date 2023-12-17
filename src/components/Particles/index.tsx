// if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useColorScheme } from '@mui/joy';
import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const MyParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  const { mode } = useColorScheme();

  return (
    <>
      <Particles
        id="tsparticles"
        style={{ zIndex: 0 }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: mode === 'dark' ? '#FAF0E6' : '#352F44'
            }
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: mode === 'dark' ? '#352F44' : '#FAF0E6'
            },
            links: {
              color: mode === 'dark' ? '#352F44' : '#FAF0E6',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce'
              },
              random: false,
              speed: 3,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 100
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: 'trinagle'
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
    </>
  );
};

export default MyParticles;
