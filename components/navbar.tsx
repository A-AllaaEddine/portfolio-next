'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <div
      className="fixed font-sans w-full h-14 flex justify-center items-center gap-3 md:gap-5
    bg-[#100F0F] z-50"
    >
      <p
        className="text-[#A3A3A3] text-sm md:text-xl hover:text-white hover:cursor-pointer"
        onClick={() => {
          document
            .getElementById('top')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Home
      </p>
      <p
        className="text-[#A3A3A3] text-sm md:text-xl hover:text-white hover:cursor-pointer"
        onClick={() => {
          document
            .getElementById('stack')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Stack
      </p>
      <p
        className="text-[#A3A3A3] text-sm md:text-xl hover:text-white hover:cursor-pointer"
        onClick={() => {
          document
            .getElementById('projects')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Projects
      </p>
      <p
        className="text-[#A3A3A3] text-sm md:text-xl hover:text-white hover:cursor-pointer"
        onClick={() => {
          document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Contact
      </p>
      <Link
        href="https://drive.google.com/file/d/1AUG6uxuvobeotXBvJT-Z6mU6ry_kB4_r/view?usp=sharing"
        target="_blank"
        className="text-[#A3A3A3] text-sm md:text-xl hover:text-white hover:cursor-pointer"
      >
        Resume
      </Link>
    </div>
  );
};

export default Navbar;
