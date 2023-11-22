'use client';

const MouseScroll = () => {
  return (
    <>
      <div
        className="w-10 h-10 md:w-16 md:h-16 bg-transparent text-white absolute left-0 right-0  bottom-[-100px] md:bottom-20 m-auto
      flex justify-center items-center "
      >
        {/* <Image
          src={MouseBorder}
          alt="scroll"
          width={100}
          height={100}
          unoptimized
          priority
          quality={100}
          className="w-full h-full"
        /> */}
        <div
          className="bg-[url('/mouse_border.svg')]  bg-no-repeat bg-contain
          w-5 h-10 md:w-7 md:h-14 flex justify-center items-center "
        >
          <div
            className="bg-[url('/mouse_wheel.svg')] bg-contain bg-no-repeat
            w-1 h-2 md:w-2 md:h-4 animate-scroll"
          ></div>
        </div>
      </div>
    </>
  );
};

export default MouseScroll;
