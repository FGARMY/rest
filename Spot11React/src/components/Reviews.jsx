import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

const Reviews = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">
              Google <span className="font-normal text-brand-brown">Reviews</span>
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">4.8</span>
              <div className="flex text-[#FBBC04]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-gray-500 font-medium">1,248 reviews</span>
            </div>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors">
            Write a review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-blue-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 leading-tight">
                    {review.name}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-[#FBBC04]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 1} className={i >= review.rating ? "text-gray-300" : ""} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-1">
                {review.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
