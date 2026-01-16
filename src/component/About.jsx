import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const About = () => {

  const link = [
    {
      icon: <FaFacebook />,
      to: '#',
    },
    {
      icon: <FaTwitter/>,
      to: '#',
    },
    {
      icon: <FaInstagram/>,
      to: '#',
    },
    {
      icon: <FaGithub/>,
      to: '#',
    },
    {
      icon: <FaLinkedin />,
      to: '#',
    }
  ]


  return (
    <div id='about' className='dark:bg-black bg-white text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-20 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-2xl md:text-4xl font-medium'>About Shahdat</h2>
            <div className='w-[170px] md:w-[260px] mt-2'>
              <div className='w-full h-1 bg-amber-400 '></div>
              <div className='mt-1 w-[140px] md:w-[200px] h-1 bg-amber-400 '></div>
            </div>
            <p className='mt-8 tracking-wider leading-relaxed text-justify text-black/70 dark:text-white/80'>I'm a dedicated Frontend Developer specializing in building modern, scalable, and user-centric web applications with a strong focus on accessibility, performance, and clean architecture. I enjoy translating complex requirements into intuitive and visually refined user experiences. Alongside frontend development, I have a growing interest in AI and Machine Learning, particularly in integrating intelligent functionality into interactive web platforms.</p>

            <div className='mt-8 flex gap-3'>
              {
                link.map((li, idx) => (
                  <a href={li.to} key={idx} className='flex flex-col items-center justify-center size-12 rounded-full bg-black/10 dark:bg-white/20'>
                    <span className='text-black dark:text-white text-3xl'>{li.icon}</span>
                  </a>
                ))
              }
            </div>

            <button className='mt-8 rounded-full font-medium dark:bg-white/90 dark:text-black bg-black text-white px-4 py-1.5'>Download CV</button>
          </div>
          <div className='min-h-[460px] bg-black/80 dark:bg-white/90 relative'>
            <img src='https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='absolute -top-6 -left-6 w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;