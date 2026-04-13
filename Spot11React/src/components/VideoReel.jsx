import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoReel = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative h-[250px] md:h-[80vh] md:min-h-[500px] overflow-hidden bg-brand-dark flex items-center justify-center">
      
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          loading="lazy"
          poster="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover opacity-60"
        >
          {/* Using a generic high quality pexels/unsplash restaurant b-roll proxy */}
          <source src="https://cdn.pixabay.com/video/2020/03/12/33580-398284591_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8"
        >
          <Play className="text-white fill-white ml-2" size={32} />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-6xl font-bold text-white tracking-wide"
        >
          Experience <span className="italic font-normal text-brand-orange">the Vibe</span>
        </motion.h2>
      </div>

    </section>
  );
};

export default VideoReel;
