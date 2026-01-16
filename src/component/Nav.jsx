import React, { useState, useEffect, useContext } from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';
import { IoIosSunny } from "react-icons/io";
import { IoMoon, IoMoonSharp } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import Sidebar from './Sidebar';

const Nav = () => {
  const option = [
    {
      icon: <IoIosSunny className='text-[18px]' />,
      name: 'light',
      lavel: 'Light',
    },
    {
      icon: <IoMoon className='text-[18px]' />,
      name: 'dark',
      lavel: 'Dark',
    },
    {
      icon: <FiMonitor className='text-[18px]' />,
      name: 'system',
      lavel: 'System',
    }
  ]

  const [open, setOpen] = useContext(dataContext);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  )

  const getThemeIcon = () => {
    if (theme === 'light') return <IoIosSunny className='text-[18px]' />
    if (theme === 'dark') return <IoMoonSharp className='text-[18px]' />
    return <FiMonitor className='text-[18px]' />
  }

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    const handleSystemTheme = () => {
      if (darkQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    if (theme === 'system') {
      handleSystemTheme();
      localStorage.removeItem('theme');
      darkQuery.addEventListener('change', handleSystemTheme);

      return () => {
        darkQuery.removeEventListener('change', handleSystemTheme);
      }
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navitem = [
    { path: '#home', link: 'Home' },
    { path: '#about', link: 'About' },
    { path: '#skills', link: 'Skills' },
    { path: '#projects', link: 'Projects' },
    { path: '#contact', link: 'Contact' },
  ]


  return (
    <div className={`fixed left-0 top-0 z-50 w-full transition duration-300 ease-in-out ${scrolled ? 'bg-white dark:bg-black dark:text-white shadow-2xl text-black' : 'bg-transparent text-white'}`}>
      <nav className='max-w-7xl px-4 py-4 mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div onClick={() => {
            setOpen(!open)
          }} className={`block md:hidden border-1 border-current/30 rounded-md px-2 py-0.5`}>
            {open ? <RxCross2 className='size-6 md:size-8' /> : <IoMdMenu className='size-6 md:size-8' />}
          </div>
          <a href='#home' className='text-xl sm:text-2xl lg:text-3xl font-bold uppercase'>
            <div className='flex gap-1 items-center'>
              <h3 className='tracking-wide flex flex-col leading-tight'>Shahdat <span className='text-[10px] sm:text-[12px] px-1'>Hossain</span></h3>
            </div>
          </a>
        </div>

        <div className='flex items-center gap-3 lg:gap-6'>
          {navitem.map((item, idx) => {
            return (
              <a
                key={idx}
                href={item.path}
                className='hidden md:block text-[16px] font-semibold tracking-[1px]'
              >
                {item.link}
              </a>
            )
          })}

        </div>

        <div className=''>
          <div className='flex items-center gap-1'>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1 min-h-0 h-[32px] bg-black px-2 text-[15px] border border-current/30">{getThemeIcon()} Theme</div>
              <ul tabIndex="-1" className="dropdown-content menu bg-black text-white text-[14px] rounded-box z-1 w-36 p-2 shadow">
                {
                  option.map((item, idx) => (
                    <li key={idx} className='text-white'>
                      <a onClick={() => {
                        setTheme(item.name)
                      }}>
                        {item.icon} {item.lavel}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

          </div>
        </div>

      </nav>

      {/* Mobile menu */}
      <div className={`fixed left-0  md:hidden transform transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar/>
      </div>

    </div>
  );
};

export default Nav;
