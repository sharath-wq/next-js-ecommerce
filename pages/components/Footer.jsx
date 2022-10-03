import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container' >
      <p>2022 XX Headphones All rights reserved</p>
      <p className='icons' >
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillGithub />
      </p>
    </div>
  )
}

export default Footer;