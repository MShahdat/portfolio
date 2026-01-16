import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { MdContactPhone } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";

const link = [
  {
    icon: <FaFacebook className='size-5' />,
    to: '#',
  },
  {
    icon: <FaTwitter className='size-5' />,
    to: '#',
  },
  {
    icon: <FaInstagram className='size-5' />,
    to: '#',
  },
  {
    icon: <FaGithub className='size-5' />,
    to: '#',
  },
  {
    icon: <FaLinkedin className='size-5' />,
    to: '#',
  }
]

const nav = [
  {
    icon: <FaHome className='size-5' />,
    to: '#home',
    la: 'Home',
  },
  {
    icon: <MdManageAccounts className='size-5' />,
    to: '#about',
    la: 'About',
  },
  {
    icon: <LuNotebookPen className='size-5' />,
    to: '#skills',
    la: 'Skills',
  },
  {
    icon: <GrProjects className='size-5' />,
    to: '#projects',
    la: 'Projects',
  },
  {
    icon: <MdContactPhone className='size-5' />,
    to: '#contact',
    la: 'Contact',
  }
]

const Sidebar = () => {
  return (
    <div className=''>
      <div className='dark:bg-black bg-white dark:text-white text-black w-[300px] md:w-[350px] h-screen'>
        <div className='flex flex-col gap-10 py-8'>
          <div className='flex flex-col gap-4 items-center'>
            <img src='https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-32 w-32 rounded-full border-[6px] border-white/30 object-cover'></img>
            <h2 className='text-[24px] font-medium'>Md. Shahdat Hossain</h2>
            <div className='flex gap-3'>
              {
                link.map((li, idx) => (
                  <a href={li.to} key={idx} className='flex flex-col items-center justify-center size-9 rounded-full bg-black/5 dark:bg-white/20'>
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
              nav.map((item, idx) => (
                <a key={idx} href={item.to} className='flex items-center gap-3'>
                  {item.icon}
                  <h2 className='text-[16px] lg:text-[18px]'>{item.la}</h2>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;