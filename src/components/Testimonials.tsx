import React from 'react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  image: string;
};

function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <div className="font-semibold text-gray-800">{author}</div>
          <div className="text-gray-600 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Ils nous font confiance
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Waariko a transformé la façon dont je gère ma comptabilité. C'est simple et efficace !"
            author="Aminata Diallo"
            role="Entrepreneur, Dakar"
            image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80"
          />
          <TestimonialCard
            quote="Une solution adaptée aux besoins des entrepreneurs africains. Je recommande !"
            author="Kofi Mensah"
            role="Consultant, Accra"
            image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
}