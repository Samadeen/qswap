/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/buttons/Button';
import Logo from '../logo/Logo';
import { NavAnimations } from '../../utils/motion';
import { IconContext } from 'react-icons';
const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
};

function NavbarFixed() {
  return (
    <header className=' h-[12vh] bg-[#010415] flex items-center '>
      <div className='w-full fixed z-10   '>
        <div className='max-w-[1440px] mx-auto'>
          <nav className=' sm:px-[4%] px-[6%] '>
            <div className='w-full flex flex-row justify-between items-center'>
              <Logo />
              <nav className='sm:flex hidden border border-[#303030] bg-[#FFFFFF08] px-7 py-4 rounded-[100px]'>
                <ul className='flex items-center space-x-8 text-white font-extrabold text-xl'>
                  <li>Blog</li>
                  <li>Changelog</li>
                  <li>Documentation</li>
                </ul>
              </nav>
              <div className='sm:flex hidden'>
                <Button variant={'anime'}>Launch App</Button>
              </div>

              <div className='sm:hidden flex'>
                <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                  <HiOutlineMenu />
                </IconContext.Provider>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavbarScroll({ isScrolling }) {
  return (
    <motion.nav
      key={1}
      initial='initial'
      animate={isScrolling ? 'animate' : 'initial'}
      exit='exit'
      variants={NavAnimations}
      className='fixed z-[999]  justify-between  bg-[#FFFFFF08] px-7 sm:py-2 py-1 rounded-[100px] ts-bg left-1/2 top-10'
    >
      <ul className='flex items-center sm:space-x-8 space-x-6 text-white font-extrabold text-[15px] sm:text-xl'>
        <li>Blog</li>
        <li>Changelog</li>
        <li>Documentation</li>
        <button className='sm:flex hidden px-4 sm:py-2  text-white bg-[black] rounded-full text-[15px] sm:text-md '>
          Launch App
        </button>
        <button className='sm:hidden flex px-5 py-2.5 text-white bg-[black] rounded-full text-[15px] sm:text-md '>
          Launch
        </button>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
