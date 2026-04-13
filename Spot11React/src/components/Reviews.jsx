import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

const Reviews = () => {
  return (
    <section className="py-24 border-y border-brand-orange/10 bg-[#FFFCF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            What Our Guests <span className="italic text-brand-brown font-normal">Are Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-8 bg-white border border-brand-orange/10 shadow-sm hover:shadow-soft transition-shadow duration-300">
              <div className="flex gap-1 text-brand-orange mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 1.5} />
                ))}
              </div>
              <p className="font-serif italic text-xl text-gray-700 leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-brand-orange/20 rounded-full flex items-center justify-center font-serif text-brand-orange bg-brand-light">
                  {review.name.charAt(0)}
                </div>
                <div className="text-sm font-semibold text-brand-dark tracking-wide uppercase">
                  {review.name}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
