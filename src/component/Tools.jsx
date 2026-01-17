import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/motion';

const Tools = () => {
  const gitSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#F05032" d="M23.546 10.93L13.07.454a1.55 1.55 0 00-2.19 0L8.71 2.63l2.76 2.76a1.84 1.84 0 012.33 2.35l2.66 2.66a1.84 1.84 0 11-1.11 1.05l-2.48-2.48v6.53a1.84 1.84 0 11-1.52-.05V8.94a1.84 1.84 0 01-1-2.41L6.74 3.91.454 10.19a1.55 1.55 0 000 2.19l10.48 10.48a1.55 1.55 0 002.19 0l10.42-10.42a1.55 1.55 0 000-2.19z" />
    </svg>
  );

  const githubSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#181717" d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.61-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0012 .3z" />
    </svg>
  );

  const figmaSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#0ACF83" d="M12 12a3 3 0 110 6 3 3 0 010-6z" />
      <path fill="#A259FF" d="M9 6a3 3 0 013-3h3a3 3 0 110 6h-3a3 3 0 01-3-3z" />
      <path fill="#F24E1E" d="M9 18a3 3 0 013-3h3a3 3 0 110 6h-3a3 3 0 01-3-3z" />
      <path fill="#FF7262" d="M9 12a3 3 0 013-3h3a3 3 0 110 6h-3a3 3 0 01-3-3z" />
      <path fill="#1ABCFE" d="M9 6a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  );

  const vscodeSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#007ACC" d="M23.15 2.85l-4.7-2.1L7.3 11.9 3.1 8.3 0 10.5l4.1 4L0 18.5l3.1 2.2 4.2-3.6 11.15 11.2 4.7-2.1V2.85z" />
    </svg>
  );

  const firebaseSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#FFA000" d="M3.89 15.67L12 1.8l8.11 13.87L12 22.2z" />
      <path fill="#FFCA28" d="M12 1.8l3.4 7.2-3.4 13.2z" />
    </svg>
  );

  const netlifySvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#00C7B7" d="M6 18l6-12 6 12z" />
    </svg>
  );

  const vercelSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#000000" d="M12 2L2 20h20z" />
    </svg>
  );

  const latexSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <text x="2" y="18" fontSize="14" fill="#008080">LaTeX</text>
    </svg>
  );

  const msOfficeSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#D83B01" d="M4 4l10-2v20l-10-2z" />
    </svg>
  );


  const tool = [
    { icon: gitSvg, label: 'Git' },
    { icon: githubSvg, label: 'GitHub' },
    { icon: figmaSvg, label: 'Figma' },
    { icon: vscodeSvg, label: 'VS Code' },
    { icon: firebaseSvg, label: 'Firebase' },
    { icon: netlifySvg, label: 'Netlify' },
    { icon: vercelSvg, label: 'Vercel' },
    { icon: latexSvg, label: 'LaTeX' },
    { icon: msOfficeSvg, label: 'MS Office' },
  ];

  const assemblySvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="#6B7280">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" stroke="#6B7280" strokeWidth="2" />
    </svg>
  );

  const cSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <circle cx="12" cy="12" r="10" fill="#00599C" />
      <text x="7" y="16" fontSize="10" fill="white" fontWeight="bold">C</text>
    </svg>
  );

  const javaSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#5382A1" d="M12 2c1 2-2 3-1 5s4 1 3-2-1-3-2-3z" />
      <path fill="#E76F00" d="M8 18c0 2 8 2 8 0" />
    </svg>
  );

  const bashSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <rect width="24" height="24" rx="4" fill="#4EAA25" />
      <text x="5" y="16" fontSize="10" fill="white">$</text>
      <text x="10" y="16" fontSize="8" fill="white">_</text>
    </svg>
  );

  const pythonSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#3776AB" d="M12 2c-4 0-4 3-4 3v3h8v2H8c-4 0-4 3-4 3v3c0 0 0 3 4 3h3v-4h2v4h3c4 0 4-3 4-3v-3h-8v-2h8c4 0 4-3 4-3V8c0 0 0-3-4-3z" />
    </svg>
  );

  const htmlSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#E34F26" d="M3 2l2 18 7 2 7-2 2-18z" />
      <path fill="#fff" d="M7 6h10l-.3 3H7zM7.3 11h9.1l-.5 5-3.9 1-3.9-1z" />
    </svg>
  );

  const cssSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#1572B6" d="M3 2l2 18 7 2 7-2 2-18z" />
      <path fill="#fff" d="M7 6h10l-.3 3H7zM7.5 11h9l-.4 4-3.6 1-3.6-1z" />
    </svg>
  );

  const jsSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <rect width="24" height="24" fill="#F7DF1E" />
      <text x="5" y="17" fontSize="10" fill="#000" fontWeight="bold">JS</text>
    </svg>
  );

  const reactSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20" fill="none">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="2" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="2" />
    </svg>
  );

  const tailwindSvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <path fill="#38BDF8" d="M4 9c2-4 6-4 8 0s6 4 8 0c-2 6-6 6-8 4s-6-4-8-4z" />
    </svg>
  );

  const daisySvg = (
    <svg viewBox="0 0 24 24" className="w-20 h-20">
      <circle cx="12" cy="12" r="10" fill="#FF69B4" />
      <circle cx="12" cy="12" r="4" fill="white" />
    </svg>
  );


  const skill = [
    { icon: cSvg, label: 'C' },
    { icon: assemblySvg, label: 'Assembly' },
    { icon: javaSvg, label: 'Java' },
    { icon: bashSvg, label: 'Shell Script (Bash)' },
    { icon: pythonSvg, label: 'Python' },
    { icon: htmlSvg, label: 'HTML' },
    { icon: cssSvg, label: 'CSS' },
    { icon: jsSvg, label: 'JavaScript' },
    { icon: reactSvg, label: 'React' },
    { icon: daisySvg, label: 'DaisyUI' },
    { icon: tailwindSvg, label: 'Tailwind CSS' },
  ];




  return (
    <div id='skills' className='dark:bg-black bg-white text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <div>
          <motion.div
            variants={fadeIn('up', .15)}
            initial='hidden'
            whileInView={'show'}
            viewport={defaultViewport}
          >
            <h3 className='text-2xl md:text-4xl font-medium'>Tools and Technologies</h3>
            <div className='w-[250px] md:w-[380px] mt-2 pb-4'>
              <div className='w-full h-1 bg-amber-400 '></div>
              <div className='mt-1 w-[200px] md:w-[300px] h-1 bg-amber-400 '></div>
            </div>
          </motion.div>

          <Marquee
            speed={100}
            direction='left'
            pauseOnHover={false}
            gradient={true}
            gradientWidth={30}
            play={true}
          >
            <div className='py-10 mx-auto flex justify-between gap-16'>
              {
                tool.map((item, idx) => {
                  return (
                    <div key={idx} className={`flex flex-col items-center`}>
                      <span className={`text-4xl`}>
                        {item.icon}
                      </span>
                      <p className='font-medium'>{item.label}</p>
                    </div>
                  )
                })
              }
            </div>
          </Marquee>
          <Marquee
            speed={100}
            direction='right'
            pauseOnHover={false}
            gradient={true}
            gradientWidth={30}
            play={true}
          >
            <div className='mt-8 py-10 mx-auto flex justify-between gap-16'>
              {
                skill.map((item, idx) => {
                  return (
                    <div key={idx} className={`flex flex-col items-center`}>
                      <span className={`text-4xl`}>
                        {item.icon}
                      </span>
                      <p className='font-medium'>{item.label}</p>
                    </div>
                  )
                })
              }
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Tools;
