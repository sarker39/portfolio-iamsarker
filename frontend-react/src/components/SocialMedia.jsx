import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <BsLinkedin/>
    </div>
    <div>
      <BsGithub />
    </div>
  </div>
);

export default SocialMedia;