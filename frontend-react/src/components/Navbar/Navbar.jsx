import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, useCycle, AnimatePresence } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  //useCycle from framer motion alike as UseState but purposely for toggle
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setIsOpen()} />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [300, 0] }}
              exit={{ opacity: 0, x: [0, 300] }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <HiX onClick={() => setIsOpen()} />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setIsOpen()}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default Navbar;
