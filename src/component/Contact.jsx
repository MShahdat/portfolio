import React, { useRef, useState } from 'react';
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/motion';
import emailjs from '@emailjs/browser';


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

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    console.log('asd')

    emailjs.sendForm('service_14h6jbl', 'template_glhotqd', form.current, {
        publicKey: 'JzPOWBOssaZtpLF6o',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setName('');
      setEmail('');
      setSub('');
      setMsg('');
      setNumber('');
  };

  return (
    <div id='contact' className='bg-white dark:bg-black text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <motion.div
          variants={fadeIn('up', .15)}
          initial='hidden'
          whileInView={'show'}
          viewport={defaultViewport}
        >
          <h3 className='text-2xl md:text-4xl font-medium'>Contact Me</h3>
          <div className='w-[130px] md:w-[190px] mt-2 pb-4'>
            <div className='w-full h-1 bg-amber-400 '></div>
            <div className='mt-1 w-[100px] md:w-[150px] h-1 bg-amber-400 '></div>
          </div>
        </motion.div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-4 gap-4'>
          {
            cont.map((con, idx) => (
              <motion.div
                variants={fadeIn('up', .20)}
                initial='hidden'
                whileInView={'show'}
                viewport={defaultViewport}
                key={idx} className='flex flex-col items-center justify-center'>
                <div className='bg-red-50 dark:bg-white/10 relative w-24 h-24 rounded-full'>
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <span className='text-4xl text-amber-500'>{con.icon}</span>
                  </div>
                </div>
                <p className='text-[16px] tracking-wide md:text-[17px] text-center leading-normal mt-2 dark:text-white/90 text-black/80'>{con.des}</p>
              </motion.div>
            ))
          }
        </div>

        <div className=' mt-16 grid grid-cols-1 md:grid-cols-2 rounded-lg'>
          <motion.div
          variants={fadeIn('right', .25)}
          initial='hidden'
          whileInView={'show'}
          viewport={defaultViewport}
          className='bg-amber-600 shadow-2xl text-white'>
            <div className='mt-0 p-8'>
              <form ref={form} onSubmit={sendEmail} className='mt-0 w-full '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='mt-0 block font-semibold text-[17px]'>Full Name</label>
                    <input onChange={(e) => setName(e.target.value)} type='text' name='name' value={name} placeholder='Full Name' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></input>
                  </div>

                  <div>
                    <label className='mt-0 block font-semibold text-[17px]'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' value={email} placeholder='example@gmail.com' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></input>
                  </div>

                  <div>
                    <label className='mt-0 block font-semibold text-[17px]'>Number</label>
                    <input onChange={(e) => setNumber(e.target.value)} type='text' name='number' value={number} placeholder='Number' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></input>
                  </div>

                  <div>
                    <label className='mt-0 block font-semibold text-[17px]'>Subject</label>
                    <input onChange={(e) => setSub(e.target.value)} type='text' name='sub' value={sub} placeholder='Subject' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></input>
                  </div>
                </div>

                <label className='mt-3 block font-semibold text-[17px] '>Message</label>
                <textarea onChange={(e) => setMsg(e.target.value)} type='text' name='msg' rows={3} value={msg} placeholder='Write message' required className='mt-1 outline-none text-[16px] bg-white text-black/70 font-medium px-3 py-2.5 w-full'></textarea>

                <button type='submit' className='bg-white w-full text-center text-amber-600 font-bold text[18px] px-6 rounded mt-2 py-1.5'>Submit</button>
              </form>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left', .25)}
          initial='hidden'
          whileInView={'show'}
          viewport={defaultViewport}
          className="w-full min-h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.03611072465634!2d90.49947640059956!3d23.69947466809364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6ef045b692f%3A0x72ac0cae5d660029!2sMFXX%2BRP4%2C%20Narayanganj%201361!5e1!3m2!1sen!2sbd!4v1764966094488!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>

      <hr className='border-t-[2px] border-white/70'></hr>
      <motion.div
      variants={fadeIn('up', .15)}
                  initial= 'hidden'
                  whileInView={'show'}
                  viewport={{once: false}}
      className='py-8 px-4 bg-black text-white/80 dark:text-white/80 leading-relaxed text-[15px] text-center'>
        Copyright ©2025 All rights reserved. This portfolio is made by Shahdat
      </motion.div>
    </div>
  );
};

export default Contact;