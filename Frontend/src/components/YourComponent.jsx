import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollAnimation = () => {
  const controls = useAnimation();
  const elementRef = useRef(null);

  const handleScroll = () => {
    const scrollSpeed = parseFloat(elementRef.current?.getAttribute('data-scroll-speed')) || 1;
    const elementOffset = elementRef.current?.offsetTop || 0;
    const scrollPosition = window.scrollY || window.pageYOffset;
    const distance = scrollPosition - elementOffset;
    const translateY = distance / scrollSpeed;

    controls.start({ y: translateY }, { duration: 0.1 }); // Adjust duration for smoother motion
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh', overflow: 'hidden' }}> {/* Adding overflow to hide excess scroll */}
      <div
        ref={elementRef}
        data-scroll-speed="5"
        style={{ marginTop: '50vh' }} // Adding margin for visibility
      >
        <motion.div
          initial={{ opacity: 1, y: 50 }}
          animate={controls}
        >
          <h1>hello</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
