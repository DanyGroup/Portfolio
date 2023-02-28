import React from 'react';
import {  BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin,AiFillYoutube  } from 'react-icons/ai';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/DanyGroup" target="blank"><AiFillGithub/></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/dany-group-824044268/" target="blank"><AiFillLinkedin/></a>
    </div>
    <div>
      <a href='https://instagram.com/danygroup.official' target='blank'><BsInstagram/></a>
    </div>
    <div>
      <a href='https://m.youtube.com/@danygroup.official' target='blank'><AiFillYoutube/></a>
    </div>
  </div>
);

export default SocialMedia;