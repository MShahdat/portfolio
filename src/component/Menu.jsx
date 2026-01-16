import React, { useContext } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';

const Menu = () => {
  const [
    open,
    setOpen,
  ] = useContext(dataContext);
  return (
    <div>
      <div onClick={() => {
        setOpen(!open)
      }} 
      className='block lg:hidden bg-white/90 backdrop-blur-3xl px-2 py-1 rounded '>
        {open ? <RxCross2 className='size-5'/> : <IoMenu className='size-5'/>}
      </div>
    </div>
  );
};

export default Menu;