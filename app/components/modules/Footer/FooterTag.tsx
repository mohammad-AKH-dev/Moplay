import React from 'react'

type FooterTagPropsType = {
    title: string
}

function FooterTag({title}:FooterTagPropsType ) {
  return (
    <div className='footer-tag text-[15px] hover:text-link 
    hover:border-link transition-all cursor-pointer text-footer border border-[rgba(117,127,149,.25)] rounded-3xl px-3 py-1'>
      {title}
    </div>
  )
}

export default FooterTag
