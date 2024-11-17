import React from 'react'

export default function GeneralButton({text,onClickHandle,backGroundColor}) {
  return (
    
        <button style={{background:backGroundColor}} className='general-btn' onClick={onClickHandle}>{text}</button>
    
  )
}
