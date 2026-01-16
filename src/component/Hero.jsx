import React, { useContext } from 'react';
import { IoMenu } from "react-icons/io5";
import { dataContext } from '../context/Context';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Name from './Name';

const Hero = () => {
  const [open, setOpen] = useContext(dataContext);

  return (
    <div id='home' className="w-screen h-screen relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1498798821241-1f327af804fe?q=80&w=1171&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
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

      </div>
    </div>
  );
};


export default Hero;