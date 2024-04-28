import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from './assets/Logo/Logo.png'
import clsx from 'clsx';


const Navbar = () => {
  const [sidemenuOpen, setSidemenuOpen] = useState(false);

  return (
    <nav className="flex justify-between px-8 items-center py-4">
      <div className="flex items-center gap-8 ">
      <section className="flex items-center gap-4">
        {/* menu */}
        <CiMenuBurger onClick={() => setSidemenuOpen(true)} className="text-3xl lg:hidden"  />
      
        <Link to="/" className="text-4xl">
        <img src={Logo} alt="Logo" className="h-16 m-0" />
        </Link>
      </section>
        <Link to="CopperProduct/" className="hidden lg:block text-lg font-serif">Copper Collections</Link>
          <Link to="/" className="hidden lg:block text-lg font-serif">Brass Collections</Link>
          <Link to="/" className="hidden lg:block text-lg font-serif">Bronze Collections</Link>
          <Link to="/" className="hidden lg:block text-lg font-serif">Spiritual Collections</Link>
          <Link to="/" className="hidden lg:block text-lg font-serif">Idol Collections</Link>
      </div>
      {/* sidebar mobile menu */}
      <div className={clsx("fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transform transition-transform duration-300 z-50", {
        '-translate-x-full': !sidemenuOpen,
        'translate-x-0': sidemenuOpen
      })}>
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-56">
          <IoMdClose
            className="mt-0 mb-8 text-3xl cursor-pointer"
            onClick={() => setSidemenuOpen(false)}
          />
          <Link to="/" className="font-serif">Copper Collections</Link>
          <Link to="/" className="font-serif">Brass Collections</Link>
          <Link to="/" className="font-serif">Bronze Collections</Link>
          <Link to="/" className="font-serif">Spiritual Collections</Link>
          <Link to="/" className="font-serif">Idol Collections</Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
