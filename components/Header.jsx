import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className='container mx-auto px-2 mb-8  sm:text-center'>
      <div className='w-full inline-block  py-8 text-[#E5A73E] text-center'>
        <div className='md:float-left  text-center  mb-4 lg:float-left sm:float-none '>
          <Link href='/'>
            <span className='cursor-pointer font-bold md:text-center text-5xl text-[#E5A73E] sm:text-center '>
              pisirenadam
            </span>
          </Link>
        </div>

        <div className=' md:text-center  lg:float-right md:pt-5'>
          <Link href={`/`}>
            <span className='md:text-center place-self-start mt-2  ml-4 font-semibold  cursor-pointer'>
              Anasayfa
            </span>
          </Link>
          <Link href={`/blogs`}>
            <span className='md:text-center sm:text-center mt-2 ml-4 font-semibold  cursor-pointer'>
              Blog
            </span>
          </Link>

          <a href='https://mercure.nmq.digital/news/' target='_blank'>
            <span className='md:text-center sm:text-center mt-2 ml-4 font-semibold  cursor-pointer'>
              Shop
            </span>
          </a>
          <Link href={`/contact`}>
            <span className='md:text-center sm:text-center mt-2  ml-4 font-semibold  cursor-pointer'>
              İletişim
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
