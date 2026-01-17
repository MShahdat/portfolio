import React, { useContext } from 'react';
import { IoMenu } from "react-icons/io5";
import { dataContext } from '../context/Context';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Name from './Name';

const Hero = () => {
  const [open, setOpen] = useContext(dataContext);

  return (
    <div id='home' className="w-screen h-screen relative overflow-hidden bg-black">
      {/* <img
        src='https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className="absolute inset-0 opacity-100 w-full h-full object-cover"
        alt=""
      /> */}
      <img
        src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className="absolute inset-0 opacity-100 w-full h-full object-contain"
        alt=""
      />
      {/* <img
        src='https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className="absolute inset-0 opacity-100 w-full h-full object-cover"
        alt=""
      />

      <div className="relative h-full px-4 mx-auto">
        <div className="absolute inset-0 top-3/8  flex flex-col items-center gap-0 md:gap-4  text-white">
          <h3 className="text-3xl flex items-center gap-2 md:text-5xl xl:text-7xl font-bold uppercase text-center leading-tight">
           <span>Hello, </span><Name/>
          </h3>
          <p className="mt-4 text-center text-lg lg:text-xl">
            I'm a professional front-end web developer!
          </p>
          <div className="mt-4 flex items-center gap-6">
            <button className="px-4 sm:px-8 py-2 bg-amber-500 font-medium text-[14px] rounded-full">
              Download CV
            </button>
            <a href='#contact' className="px-4 sm:px-8 py-2 bg-[#140d3d] font-medium text-[14px] rounded-full">
              Contact Me
            </a>
          </div>
        </div>

      </div> */}
    </div>
  );
};


export default Hero;