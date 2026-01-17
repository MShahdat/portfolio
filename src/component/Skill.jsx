import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/motion';


const Skill = () => {

  const skills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 85 },
    { name: 'JavaScript', percent: 80 },
    { name: 'React', percent: 75 },
    { name: 'Tailwind CSS', percent: 85 },
    { name: 'Git', percent: 70 },
  ];

  return (
    <div id='skills' className='dark:bg-black bg-white text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <motion.div
          variants={fadeIn('up', .15)}
          initial='hidden'
          whileInView={'show'}
          viewport={defaultViewport}
        >
          <h2 className='text-2xl md:text-4xl font-medium'>Skills</h2>
          <div className='w-[60px] md:w-[100px] mt-2'>
            <div className='w-full h-1 bg-amber-400'></div>
            <div className='mt-1 w-[40px] md:w-[80px] h-1 bg-amber-400'></div>
          </div>
        </motion.div>


        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12'>
          {skills.map((skill, index) => (
            <motion.div
            variants={fadeIn('up', .25)}
          initial='hidden'
          whileInView={'show'}
          viewport={defaultViewport}
            key={index} className='flex flex-col'>
              <div className='flex text-[16px] md:text-[18px] lg:text-[20px] font-medium items-center justify-between mb-1 px-2'>
                <h1 className='font-medium'>{skill.name}</h1>
                <p>{skill.percent}%</p>
              </div>
              <progress
                className="progress progress-warning w-full h-3.5"
                value={skill.percent}
                max="100"
              ></progress>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skill;
