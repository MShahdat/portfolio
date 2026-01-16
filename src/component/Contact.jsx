import React, { useState } from 'react';
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const cont = [
  {
    icon: <FaLocationDot />,
    des: 'Noorbug, Shiddirganj, Narayanganj, Bangladesh',
  },
  {
    icon: <MdEmail />,
    des: 'mdshahdat2504@gmail.com',
  },
  {
    icon: <MdAddCall />,
    des: '+8801885374041',
  }
]
const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sub, setSub] = useState('');
  const [msg, setMsg] = useState('');
  const [number, setNumber] = useState('');

  const formhandle = () => {

  }

  return (
    <div id='contact' className='bg-white dark:bg-black text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <h3 className='text-2xl md:text-4xl font-medium'>Tools and Skills</h3>
        <div className='w-[170px] md:w-[250px] mt-2 pb-4'>
          <div className='w-full h-1 bg-amber-400 '></div>
          <div className='mt-1 w-[130px] md:w-[200px] h-1 bg-amber-400 '></div>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-4 gap-4'>
          {
            cont.map((con, idx) => (
              <div key={idx} className='flex flex-col items-center justify-center'>
                <div className='bg-red-50 dark:bg-white/10 relative w-24 h-24 rounded-full'>
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-4xl text-amber-500'>{con.icon}</span>
                  </div>
                </div>
                <p className='text-[16px] tracking-wide md:text-[17px] text-center leading-normal mt-2 dark:text-white/90 text-black/80'>{con.des}</p>
              </div>
            ))
          }
        </div>

        <div className=' mt-16 grid grid-cols-1 md:grid-cols-2 rounded-lg'>
          <div className='bg-amber-600 shadow-2xl text-white'>
            <div className='mt-0 p-8'>
              <form onSubmit={formhandle} className='mt-0 w-full '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='mt-0 block font-semibold text-[17px]'>Full Name</label>
                    <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Full Name' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></input>
                  </div>

                  <div>
                    <label className='mt-0 block font-semibold text-[17px]'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='example@gmail.com' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></input>
                  </div>

                  <div>
                    <label className='mt-0 block font-semibold text-[17px]'>Number</label>
                    <input onChange={(e) => setNumber(e.target.value)} type='text' value={number} placeholder='Number' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></input>
                  </div>

                  <div>
                    <label className='mt-0 block font-semibold text-[17px]'>Subject</label>
                    <input onChange={(e) => setSub(e.target.value)} type='text' value={sub} placeholder='Subject' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></input>
                  </div>
                </div>

                <label className='mt-3 block font-semibold text-[17px] '>Message</label>
                <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={3} value={msg} placeholder='Write message' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></textarea>

                <button type='submit' className='bg-white w-full text-center text-amber-600 font-bold text[18px] px-6 rounded mt-2 py-1.5'>Submit</button>
              </form>
            </div>
          </div>
          <div className="w-full min-h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.03611072465634!2d90.49947640059956!3d23.69947466809364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6ef045b692f%3A0x72ac0cae5d660029!2sMFXX%2BRP4%2C%20Narayanganj%201361!5e1!3m2!1sen!2sbd!4v1764966094488!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className='py-6 px-4 text-black/80 dark:text-white/80 leading-relaxed text-[14px] text-center'>
        <hr className='border-t pb-4'></hr>
        Copyright ©2025 All rights reserved. This portfolio is made by Shahdat
      </div>
    </div>
  );
};

export default Contact;