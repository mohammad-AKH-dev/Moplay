import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import SocialBox from './SocialBox';
import { AiFillInstagram } from "react-icons/ai";
import { FaVimeoV } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";






function CopyRightSection() {
  return (
    <div className='copy-right__section flex flex-col md:flex-row gap-y-4 items-center justify-start md:justify-between container py-6'>
       <p className='dark:text-white text-[16px]'>© Copyright 2025 <span className='text-link'>moplay</span> All Rights Reserved.</p>
       <div className="socials flex flex-wrap items-center gap-x-4">
          <SocialBox>
            <FaSquareFacebook className='text-[20px]'/>
          </SocialBox>
          <SocialBox>
            <AiFillInstagram className='text-[20px]'/>
          </SocialBox>
          <SocialBox>
            <FaVimeoV className='text-[20px]'/>
          </SocialBox>
          <SocialBox>
             <FaTiktok className='text-[20px]'/>
          </SocialBox>
          <SocialBox>
            <FaVk className='text-[20px]'/>
          </SocialBox>
       </div>
    </div>
  )
}

export default CopyRightSection
