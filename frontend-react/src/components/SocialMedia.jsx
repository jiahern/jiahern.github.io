import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/jordanleejiahern/">
      <div>
        <BsLinkedin />
      </div>
    </a>

    <a href="https://github.com/jiahern">
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
