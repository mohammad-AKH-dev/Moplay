import React from 'react'

type socialBoxPropsType = {
    children: React.ReactNode
}

function SocialBox(props:socialBoxPropsType) {
    const {children} = props
  return (
    <div className='social-box cursor-pointer w-[45px] h-[45px] flex items-center justify-center rounded-full dark:bg-[#0A0D14] transition-all
    dark:hover:bg-link duration-200 text-link hover:text-white'>
       {children}
    </div>
  )
}

export default SocialBox
