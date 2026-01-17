import React, { useState, useEffect, useContext } from 'react';
import { IoMdMenu, IoIosSunny } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';
import { IoMoon, IoMoonSharp } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaHome } from "react-icons/fa";
import { MdManageAccounts, MdContactPhone } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import me from '../../public/last.jpg';


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
  const [activeSection, setActiveSection] = useState('#home');


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

      // Update active section based on scroll position
      const sections = navitem.map(item => item.path.substring(1));
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  const navitem = [
    { path: '#home', link: 'Home', icon: <FaHome /> },
    { path: '#about', link: 'About', icon: <MdManageAccounts /> },
    { path: '#skills', link: 'Skills', icon: <LuNotebookPen /> },
    { path: '#projects', link: 'Projects', icon: <GrProjects /> },
    { path: '#contact', link: 'Contact', icon: <MdContactPhone /> },
  ]

  const link = [
    {
      icon: <FaFacebook className='size-5' />,
      to: 'https://www.facebook.com/md.shahdat.hossain.547522/',
    },
    {
      icon: <FaTwitter className='size-5' />,
      to: 'https://x.com/MdShahdat25',
    },
    {
      icon: <FaInstagram className='size-5' />,
      to: 'https://www.instagram.com/sahadathossain85/',
    },
    {
      icon: <FaGithub className='size-5' />,
      to: 'https://github.com/MShahdat',
    },
    {
      icon: <FaLinkedin className='size-5' />,
      to: 'https://www.linkedin.com/in/md-shahdat-hossain/',
    }
  ]


  return (
    <div className={`fixed left-0 top-0 z-50 w-full transition duration-500 ease-in-out ${scrolled ? 'bg-white dark:bg-black dark:text-white shadow-2xl text-black shadow-2xl' : 'bg-transparent text-white'}`}>
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
                onClick={() => setActiveSection(item.path)}
                className={`hidden md:block text-[16px] font-semibold tracking-[1px] transition-colors ${activeSection === item.path ? 'text-amber-400' : ''
                  }`}
              >
                {item.link}
              </a>
            )
          })}

        </div>

        <div className=''>
          <div className='flex items-center gap-1'>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1 min-h-0 h-[32px] bg-black px-4 text-[15px] border border-current/30">{getThemeIcon()}  Theme</div>
              <ul tabIndex="-1" className="dropdown-content menu bg-black text-white text-[14px] rounded-box z-1 w-30 p-2 shadow">
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
        <div className=''>
          <div className='dark:bg-black bg-white dark:text-white text-black w-[300px] md:w-[350px] h-screen'>
            <div className='flex flex-col gap-10 py-8'>
              <div className='flex flex-col gap-4 items-center'>
                <img src={me} className='h-32 w-32 rounded-full border-[6px] border-white/30 object-fill'></img>
                <h2 className='text-[24px] font-medium'>Md. Shahdat Hossain</h2>
                <div className='flex gap-3'>
                  {
                    link.map((li, idx) => (
                      <a href={li.to} target='_blank' key={idx} className='flex flex-col items-center justify-center size-9 rounded-full bg-black/5 dark:bg-white/20'>
                        {
                          li.icon
                        }
                      </a>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-col gap-6 px-10 md:px-16'>
                {
                  navitem.map((item, idx) => (
                    <a onClick={() => {
                      setOpen(!open)
                    }} key={idx} href={item.path} className={`flex items-center gap-3 ${activeSection === item.path ? 'text-amber-400' : ''
                      }`}>
                      <span className='text-[18px]'>{item.icon}</span>
                      <h2 className='text-[16px] font-medium'>{item.link}</h2>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Nav;
