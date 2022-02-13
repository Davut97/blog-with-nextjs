import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='w-full inline-block  py-8 text-[#E5A73E]'>
        <div className='md:float-left block md:text-center'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-[#E5A73E]'>pisirenadam</span>
          </Link>
        </div>
        <div className=' md:float-right md:contents md:text-center md:pt-5 '>
          <Link href={`/`}>
            <span className='md:float-right mt-2 align-right ml-4 font-semibold  cursor-pointer'>
              ANA SAYFA
            </span>
          </Link>
          <Link href={`/blogs`}>
            <span className='md:float-right mt-2 align-right ml-4 font-semibold  cursor-pointer'>
              BLOG
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
