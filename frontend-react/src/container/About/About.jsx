import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';

const abouts = [
  {
    title: 'Front-end Development',
    description: 'I am a good Front-end developer',
    imgUrl: images.about01,
  },
  {
    title: 'Back-end Development',
    description: 'I am a good Back-end developer',
    imgUrl: images.about02,
  },
  {
    title: 'Fullstack Development',
    description: 'I am a good Fullstack developer',
    imgUrl: images.about03,
  },
  {
    title: 'UI/UX',
    description: 'I am a good UI/UX developer',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Great Development</span>
        <br />
        means <span>Great Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default About;
