import { FaGithub, FaLinkedin } from 'react-icons/fa';

import BenyankomThumbnail from '@/public/Benyankom_thumbnail.png';
import CoStudyThumbnail from '@/public/CoStudy_thumbnail.png';
import FirebaseIcon from '@/public/firebase.svg';
import JavascriptIcon from '@/public/javascript.svg';
import MongoDbIcon from '@/public/mongodb.svg';
import NextIcon from '@/public/nextjs.svg';
import NodeIcon from '@/public/nodejs02.svg';
import ReactIcon from '@/public/react.svg';
import TailwindIcon from '@/public/tailwind.svg';
import TypescriptIcon from '@/public/typescript.svg';

import Image from 'next/image';

import { MdInsertLink } from 'react-icons/md';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import MouseScroll from '@/components/MouseScroll';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A-AllaaEddine',
  description:
    'm Allaa Eddine, your friendly neighbourhood full-stack developer, navigating the vast and exciting realms of code',
};

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      <div
        id="top"
        className="relative bg-[url('/home_bg.svg')] w-full md:h-screen bg-cover
        flex flex-col justify-center items-center gap-20 mt-28 md:mt-0"
      >
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-7xl font-bold font-sans text-white">
          Hey there!
        </h1>
        <p className="w-5/6 md:w-2/3 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sans text-white">
          I am
          <span className="font-semibold"> Allaa Eddine</span>, your friendly
          neighbourhood full-stack developer, navigating the vast and exciting
          realms of code.
        </p>
        <div className="w-auto h-10 flex justify-center items-center gap-5">
          <Link href={'https://github.com/A-AllaaEddine'} target="_blank">
            <FaGithub className="w-8 h-8 md:w-10 md:h-10 hover:cursor-pointer text-white" />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/allaa-eddine-riad-amiar/'}
            target="_blank"
          >
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 hover:cursor-pointer text-white" />
          </Link>
        </div>
        <MouseScroll />
      </div>
      <div
        id="stack"
        className="w-full h-screen bg-cover
      flex flex-col justify-center items-center gap-32 text-white"
      >
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-7xl font-bold font-sans ">
          Stack
        </h1>
        <div className="w-2/3 flex flex-wrap justify-center items-center gap-5">
          <Image
            src={JavascriptIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
          />
          <Image
            src={TypescriptIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
          />
          <Image
            src={ReactIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
          />
          <Image
            src={NextIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-10 h-10 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
          />
          <Image
            src={TailwindIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
          />
          {/* <Image
            src={SassIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-16 h-16 md:w-24 md:h-24"
          /> */}
          <Image
            src={NodeIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
          />
          <Image
            src={FirebaseIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
          />
          <Image
            src={MongoDbIcon}
            alt="javascript"
            width={100}
            height={100}
            quality={100}
            unoptimized
            priority
            className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
          />
        </div>
      </div>
      <div
        id="projects"
        className="w-full min-h-screen bg-cover
        flex flex-col justify-center items-center gap-32"
      >
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-7xl font-bold font-sans text-white">
          Projects
        </h1>

        <div className="w-auto h-auto flex flex-wrap justify-center items-center gap-16">
          <Card className="bg-[#202020] w-4/5 max-w-[23rem] md:w-[23rem] h-auto border-none rounded-3xl">
            <CardHeader>
              {/* <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription> */}
              <Image
                src={BenyankomThumbnail}
                alt="benyankom"
                width={100}
                height={100}
                unoptimized
                priority
                className="w-full h-auto"
              />
            </CardHeader>
            <CardContent className="w-full h-auto flex flex-col justify-start items-start gap-3">
              <div className="w-full h-10 flex justify-between items-center">
                <p className="text-2xl text-white font-bold">Benyankom</p>
                <Link
                  href={'https://benyankom.com'}
                  target="_blank"
                  className="w-auto h-8 flex justify-center items-center gap-2
                hover:cursor-pointer text-white hover:bg-white hover:text-black rounded-xl px-2"
                >
                  <p className="">visit</p>
                  <MdInsertLink className="w-8 h-8 " />
                </Link>
              </div>
              <p className="text-md  text-white">
                A platform to connect clients with skilled craftsmen in Algeria.
              </p>
            </CardContent>
            <CardFooter className="w-full h-10 flex justify-start items-center gap-3">
              <p className="text-[#fa4d61]">#nextjs</p>
              <p className="text-[#00BDF9]">#tailwindcss</p>
              <p className="text-[#05BA79]">#mongodb</p>
            </CardFooter>
          </Card>
          <Card className="bg-[#202020] w-4/5 max-w-[23rem] md:w-[23rem] h-auto border-none rounded-3xl">
            <CardHeader>
              {/* <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription> */}
              <Image
                src={CoStudyThumbnail}
                alt="costudy"
                width={100}
                height={100}
                unoptimized
                priority
                className="w-full h-auto"
              />
            </CardHeader>
            <CardContent className="w-full h-auto flex flex-col justify-start items-start gap-3">
              <div className="w-full h-10 flex justify-between items-center">
                <p className="text-2xl text-white font-bold">CoSutdy</p>
                <Link
                  href={'https://costudy-flame.vercel.app/'}
                  target="_blank"
                  className="w-auto h-8 flex justify-center items-center gap-2
                hover:cursor-pointer  text-white hover:bg-white hover:text-black rounded-xl px-2"
                >
                  <p className="">visit</p>
                  <MdInsertLink className="w-8 h-8 " />
                </Link>
              </div>
              <p className="text-md  text-white">
                A platform that let students study together in a shared session.
              </p>
            </CardContent>
            <CardFooter className="w-full h-10 flex justify-start items-center gap-3">
              <p className="text-[#fa4d61]">#nextjs</p>
              <p className="text-[#00BDF9]">#tailwindcss</p>
              <p className="text-[#05BA79]">#mongodb</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div
        id="contact"
        className="w-full h-screen bg-cover
        bg-[url('/contact_bg.svg')]
        px-12
        flex flex-col justify-center items-center"
      >
        <div
          className="w-full md:w-auto h-auto flex flex-col justify-start items-center gap-24
        bg-black bg-opacity-50 p-8 md:p-20 rounded-lg"
        >
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-7xl font-bold font-sans text-white text-center">
            {"Let's talk more about your project."}
          </h1>

          <p className="text-transparent bg-clip-text text-md md:text-xl lg:text-2xl xl:text-3xl font-bold inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-2 rounded-full">
            a.allaaeddine.riad@gmail.com
          </p>
          <div className="w-auto h-10 flex justify-center items-center gap-5">
            <Link href={'https://github.com/A-AllaaEddine'} target="_blank">
              <FaGithub className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 hover:cursor-pointer text-white" />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/allaa-eddine-riad-amiar/'}
              target="_blank"
            >
              <FaLinkedin className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 hover:cursor-pointer text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
