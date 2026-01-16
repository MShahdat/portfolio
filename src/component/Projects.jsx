import React from 'react';
import { LuLink } from "react-icons/lu";
import { FaCalendarAlt, FaGithubSquare } from "react-icons/fa";
import veltrio from '../../public/veltrio.png';
import kidder from '../../public/kidder.png';
import boimela from '../../public/e-boimela.png';
import fly from '../../public/fly.png';
import school from '../../public/school.png';
import teste from '../../public/teste.io.png';



const Projects = () => {
  const project = [
    {
      cover: 'https://images.unsplash.com/photo-1757439402296-000be181e38b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Velrio Real Estate Website',
      live: 'https://veltrio-real-estate-website.netlify.app/',
      github: 'https://github.com/MShahdat/Veltrio-Estates---A-Real-Estate-Website',
      date: '31 December, 2025'
    },
    {
      cover: 'https://images.unsplash.com/photo-1605012464390-45820d1f7bdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Kider Kids School Website',
      live: 'https://kider-school-website.netlify.app/',
      github: 'https://github.com/MShahdat/Kidder-Kids-School-Website',
      date: '15 December, 2025'
    },
    {
      cover: 'https://images.unsplash.com/photo-1643391448862-881a06885f90?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Modern School Website',
      live: 'https://dania-collage.netlify.app/',
      github: 'https://github.com/MShahdat/Modern-School-Website',
      date: '25 September, 2025'
    },
    {
      cover: 'https://images.unsplash.com/photo-1761515397118-49463b25289b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Teste.io Restaurent Website',
      live: 'https://teste-io-restaurent.netlify.app/',
      github: 'https://github.com/MShahdat/Teste.io_Restaurant',
      date: '09 December 2025',
    },
    {
      cover: 'https://images.unsplash.com/photo-1722182877533-7378b60bf1e8?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'E-boimela Library Website',
      live: 'https://e-boimela.netlify.app/',
      github: 'https://github.com/MShahdat/E-boimela-online-book-shop-website',
      date: '23 August, 2025'
    },
    {
      cover: 'https://images.unsplash.com/photo-1487637419635-a2a471ff5c7b?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'FlyQuest Destination Website',
      live: 'https://fly-quest-destination.netlify.app/',
      github: 'https://github.com/MShahdat/FlyQuest-Destination-Travel-Agency-Website',
      date: '3 August, 2025',
    },
  ]
  return (
    <div id='projects' className='bg-white dark:bg-black text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <h2 className='text-2xl md:text-4xl font-medium'>My Projects</h2>
        <div className='w-[130px] md:w-[200px] mt-2'>
          <div className='w-full h-1 bg-amber-400 '></div>
          <div className='mt-1 w-[100px] md:w-[160px] h-1 bg-amber-400 '></div>
        </div>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4'>
          {
            project.map((item, idx) => {
              return (
                <div key={idx} className={idx === 0 || idx === 5 ? "lg:col-span-4" : 'lg:col-span-3'}>
                  <div className='dark:border border-white/60'>
                    <div className='relative'>
                      <img src={item.cover} className={`h-[300px] md:h-[320px] w-full object-cover hover:scale-102 duration-500 transform rounded`}></img>
                      <a href={item.live} target='_blank' className='cursor-pointer absolute top-4 right-4 bg-white dark:text-black w-8 h-8 rounded-full text-center flex items-center justify-center'>
                        <LuLink />
                      </a>
                      <div className='absolute bottom-4 left-4 right-2 text-white flex flex-col gap-2'>
                        <h2 className='text-xl font-medium leading-tight line-clamp-1'>{item.title}</h2>
                        <div className='flex items-center gap-3 text-[14px]'>
                          <a href={item.github} target='_blank' className='flex items-center gap-1'>
                            <FaGithubSquare />
                            <p className='font-medium'>Github</p>
                          </a>
                          <div className='flex items-center gap-1'>
                            <FaCalendarAlt />
                            <p className='font-medium'>{item.date}</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;