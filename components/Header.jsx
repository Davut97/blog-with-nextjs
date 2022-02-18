import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
const Header = () => {
  return (
    <div className='container mx-auto px-2 mb-8  sm:text-center'>
      <div className='w-full inline-block  py-8 text-[#E5A73E]'>
        <div className='md:float-left block sm:text-center'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-5xl text-[#E5A73E] sm:text-center'>
              pisirenadam
            </span>
          </Link>
        </div>
        <div className=' md:float-right md:contents sm:text-center md:pt-5'>
          <Link href={`/contact`}>
            <span className='md:float-right mt-2 align-right ml-4 font-semibold  cursor-pointer'>
              ILTESIM
            </span>
          </Link>
          <Link href={`/blogs`}>
            <span className='md:float-right mt-2 align-right ml-4 font-semibold  cursor-pointer'>
              BLOG
            </span>
          </Link>
          <Link href={`/`}>
            <span className='md:float-right mt-2 align-right ml-4 font-semibold  cursor-pointer'>
              ANA SAYFA
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
