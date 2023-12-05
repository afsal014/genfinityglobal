import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motions'

function Hero() {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.9, 1.5)}
      initial="hidden"
      whileInView="show"
      className='box'
      style={{ width: "100%", height: "100vh", background:"url('https://youtu.be/FurugvpjXNM?si=5zsM9c9bNCQGTJLj')"}}
    >
      <h1 className='heading' data-scroll data-scroll-speed="2" style={{ fontSize: "150px", fontFamily:"'Teko', sans-serif", fontWeight:"700px", letterSpacing:"1rem"}}>THE</h1>
      <h1 className='heading' data-scroll data-scroll-speed="3" style={{ fontSize: "150px", fontFamily:"'Teko', sans-serif", fontWeight:"700px", letterSpacing:"1rem"}}>BEGINS</h1>
      <h1 className='heading' data-scroll data-scroll-speed="1" style={{ fontSize: "150px", fontFamily:"'Teko', sans-serif", fontWeight:"700px", letterSpacing:"1rem"}}>HERE</h1>
    </motion.div>
  )
}

export default Hero
