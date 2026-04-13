import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, Music } from 'lucide-react';

const VideoReel = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FFFCF6] flex flex-col items-center justify-center">
      
      <div className="text-center max-w-xl mx-auto mb-12 px-4">
        <h4 className="text-brand-orange uppercase tracking-widest text-sm font-semibold mb-2">Watch it Live</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
          Experience <span className="italic font-normal text-brand-brown">the Vibe</span>
        </h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center h-[480px] sm:h-[550px] md:h-[650px] overflow-hidden lg:overflow-visible">
        
        {/* Previous Reel Skeleton (Left) - Hidden on mobile for focus */}
        <div className="hidden sm:flex absolute -left-[40%] md:left-2 lg:left-[10%] w-[320px] md:w-[360px] aspect-[9/16] rounded-[2rem] opacity-40 sm:opacity-60 blur-[1px] scale-95 origin-right transition-all flex-col justify-end p-2 border-2 border-brand-orange/20 z-0">
          <div className="w-full h-full rounded-2xl overflow-hidden relative grayscale select-none pointer-events-none">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" alt="Previous Reel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-4 right-8 space-y-3">
              <div className="w-10 h-10 rounded-full bg-white/20"></div>
              <div className="w-3/4 h-3 bg-white/30 rounded-full"></div>
              <div className="w-1/2 h-3 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Next Reel Skeleton (Right) - Hidden on mobile for focus */}
        <div className="hidden sm:flex absolute -right-[40%] md:right-2 lg:right-[10%] w-[320px] md:w-[360px] aspect-[9/16] rounded-[2rem] opacity-40 sm:opacity-60 blur-[1px] scale-95 origin-left transition-all flex-col justify-end p-2 border-2 border-brand-orange/20 z-0">
          <div className="w-full h-full rounded-2xl overflow-hidden relative grayscale select-none pointer-events-none">
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" alt="Next Reel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-4 right-8 space-y-3">
              <div className="w-10 h-10 rounded-full bg-white/20"></div>
              <div className="w-3/4 h-3 bg-white/30 rounded-full"></div>
              <div className="w-1/2 h-3 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Active Reel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-[90%] max-w-[340px] md:max-w-[380px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white bg-black group"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            loading="lazy"
            poster="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          >
            <source src="https://cdn.pixabay.com/video/2020/03/12/33580-398284591_large.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlays for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

          {/* Reels Sidebar Actions */}
          <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-20">
            <button className="flex flex-col items-center gap-1 group/btn">
              <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-hover/btn:text-red-500 transition-colors shadow-lg">
                <Heart size={24} />
              </div>
              <span className="text-white text-xs font-semibold drop-shadow-md">12K</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 group/btn">
              <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-hover/btn:text-brand-orange transition-colors shadow-lg">
                <MessageCircle size={24} />
              </div>
              <span className="text-white text-xs font-semibold drop-shadow-md">402</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 group/btn">
              <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-hover/btn:text-blue-400 transition-colors shadow-lg">
                <Send size={24} />
              </div>
              <span className="text-white text-xs font-semibold drop-shadow-md">Share</span>
            </button>
          </div>

          {/* Info Area */}
          <div className="absolute left-4 bottom-6 right-16 z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full border border-white/50 bg-brand-orange flex items-center justify-center text-white font-bold text-xs shadow-md">
                S11
              </div>
              <span className="text-white font-bold text-sm drop-shadow-md">@spot11enjoy</span>
              <button className="px-3 py-1 rounded-full border border-white text-white text-xs font-semibold ml-2 hover:bg-white hover:text-black transition-colors">
                Follow
              </button>
            </div>
            
            <p className="text-white text-sm font-light mb-3 drop-shadow-md line-clamp-2">
              Weekends look a lot like this. Come grab a drink! 🍻🔥 #spot11 #punenightlife #dinein
            </p>

            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 w-max">
              <Music size={12} className="text-white" />
              <span className="text-white text-xs">Original Audio - Spot11</span>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Directional Cue */}
      <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Next: Experience Spot11</span>
                <motion.span 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-brand-orange text-lg"
                >
                    👇
                </motion.span>
            </div>
        </div>

    </section>
  );
};

export default VideoReel;
