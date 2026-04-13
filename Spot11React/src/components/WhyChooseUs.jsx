import React from 'react';
import { Sofa, Users, ChefHat, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <Sofa size={32} strokeWidth={1.5} />,
      title: "Comfortable Ambience",
      desc: "Designed with warm lighting, cozy seating, and a relaxing vibe for your perfect evening."
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: "Family-Friendly Space",
      desc: "A welcoming environment with dedicated seating for large groups and family celebrations."
    },
    {
      icon: <ChefHat size={32} strokeWidth={1.5} />,
      title: "Quality Ingredients",
      desc: "We source only premium, fresh ingredients to ensure every bite is authentic and flavorful."
    },
    {
      icon: <HeartHandshake size={32} strokeWidth={1.5} />,
      title: "Warm Service",
      desc: "Our staff is trained to provide attentive, personalized hospitality that makes you feel at home."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group p-8 border border-white/10 hover:border-brand-orange/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-brand-orange group-hover:-translate-y-2 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-white">{card.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
