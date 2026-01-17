import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import me from '../../public/last.jpg';
import cv from '../../public/cv.pdf';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/motion';


const About = () => {

  const link = [
    {
      icon: <FaFacebook />,
      to: 'https://www.facebook.com/md.shahdat.hossain.547522/',
    },
    {
      icon: <FaTwitter />,
      to: 'https://x.com/MdShahdat25',
    },
    {
      icon: <FaInstagram />,
      to: 'https://www.instagram.com/sahadathossain85/',
    },
    {
      icon: <FaGithub />,
      to: 'https://github.com/MShahdat',
    },
    {
      icon: <FaLinkedin />,
      to: 'https://www.linkedin.com/in/md-shahdat-hossain/',
    }
  ]

  return (
    <div id='about' className='dark:bg-black bg-white text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-20 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <motion.div
            variants={fadeIn('up', .15)}
            initial = 'hidden'
            whileInView={'show'}
            viewport={defaultViewport}
            >
              <h2 className='text-2xl md:text-4xl font-medium'>About Shahdat</h2>
              <div className='w-[170px] md:w-[250px] mt-2'>
                <div className='w-full h-1 bg-amber-400 '></div>
                <div className='mt-1 w-[140px] md:w-[200px] h-1 bg-amber-400 '></div>
              </div>
            </motion.div>
            <motion.p
            variants={fadeIn('up', .15)}
            initial = 'hidden'
            whileInView={'show'}
            viewport={defaultViewport}
            className='mt-8 tracking-wider leading-relaxed text-justify text-black/70 dark:text-white/80'>I'm a dedicated Frontend Developer specializing in building modern, scalable, and user-centric web applications with a strong focus on accessibility, performance, and clean architecture. I enjoy translating complex requirements into intuitive and visually refined user experiences. Alongside frontend development, I have a growing interest in AI and Machine Learning, particularly in integrating intelligent functionality into interactive web platforms.</motion.p>

            <motion.div
            variants={fadeIn('up', .15)}
            initial = 'hidden'
            whileInView={'show'}
            viewport={defaultViewport}
            >
              <h3 className='mt-4 font-medium text-[17px]'>What I Do</h3>
            <div className='tracking-wider leading-relaxed text-justify text-black/70 dark:text-white/80'>
              <p>✅ Build scalable and well-structured frontend architectures</p>
              <p>✅ Focus on clean UI, accessibility, and smooth user interactions</p>
              <p>✅ Write maintainable, reusable, and production-ready code</p>
              <p>✅ Continuously learn and apply modern tools, frameworks, and best practices</p>
            </div>
            </motion.div>

            <motion.div
            variants={fadeIn('up', .15)}
            initial= 'hidden'
            whileInView={'show'}
            viewport={defaultViewport}
            >
              <div className='mt-8 flex gap-3'>
              {
                link.map((li, idx) => (
                  <a href={li.to} target='_blank' key={idx} className='flex flex-col items-center justify-center size-12 rounded-full bg-black/10 dark:bg-white/20'>
                    <span className='text-black dark:text-white text-3xl'>{li.icon}</span>
                  </a>
                ))
              }
            </div>

            <button onClick={() => {
              window.open(cv, '_blank', 'noopener, noreferrer');

            }} className='mt-8 rounded-full font-medium dark:bg-white/90 dark:text-black bg-black text-white px-4 py-1.5'>Download CV
            </button>
            </motion.div>
          
          </div>
          <motion.div
          variants={fadeIn('left', .15)}
            initial= 'hidden'
            whileInView={'show'}
            viewport={defaultViewport}
          className='min-h-[560px] px-6 bg-black/80 dark:bg-white/90 relative'>
            <img src={me} className='absolute -top-6 -left-6 w-full h-full object-fill' />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;