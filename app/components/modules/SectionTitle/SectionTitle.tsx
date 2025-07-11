import React from 'react'
import Button from '../Button/Button'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


type sectionTitlePropsType = {
  title: string 
  href: string
}


function SectionTitle(props: sectionTitlePropsType) {

  const {title , href} = props
  
  return (
    <div className='section-title flex flex-wrap sm:flex-nowrap gap-y-4 gap-x-4 sm:gap-x-0 sm:gap-y-0 justify-between'>
       <h5 className='title capitalize text-[28px] font-bold'>{title}</h5>
       <Button title='view all' href={href} customStyle='bg-link uppercase font-bold hover:bg-red flex-row-reverse'>
           <MdKeyboardDoubleArrowRight className='text-[20px]'/>
       </Button>
    </div>
  )
}

export default SectionTitle
