import React, { useState } from 'react'
import ContactUsMain from '../components/contactUS/ContactUsMain'
import Header from '../components/header/Header';
import Menu from '../components/menu/Menu';

export default function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div className="home-contactus" style={{ position: "relative"}}>
      {isOpen&&<Menu  handleOpenMenu={handleOpenMenu} isOpen={isOpen}/>}
      <div style={{ position: "absolute", width: "100%"}}>
        <Header handleOpenMenu={handleOpenMenu} isOpen={isOpen} />
      </div>
      <ContactUsMain/>
    </div>
  )
}
