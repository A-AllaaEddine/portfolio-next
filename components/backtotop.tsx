'use client';

import { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const BackToTop = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const landingPageHeight = document.getElementById('top')?.offsetHeight;
      const scrollThreshold = landingPageHeight! * 0.8; // Adjust this value based on your requirement

      if (scrollPosition > scrollThreshold) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {showElement ? (
        <div
          className="bg-white text-black fixed left-0 right-0  bottom-10 m-auto w-10 h-10 rounded-full
          flex justify-center items-center hover:cursor-pointer"
          onClick={() => {
            document
              .getElementById('top')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <BiArrowToTop className="w-2/3 h-2/3" />
        </div>
      ) : null}
    </>
  );
};

export default BackToTop;
