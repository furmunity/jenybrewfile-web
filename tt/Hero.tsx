
'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-amber-50">
        <div className="container mx-auto px-6 text-center text-gray-900 max-w-4xl">
          <div className="mb-8">
            <h1 className="font-['Pacifico'] text-4xl md:text-6xl mb-4">JenyBrew</h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            커피 5분에 한잔! 아쉬운 매출!<br />
            <span className="text-amber-600">액상스틱 보이차 제안 어떠세요?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-80">
            번거로운 차도구, 기다림 NO!, 스틱 하나로 완성되는 99.9% 정통 보이차.<br />
            프리미엄 건강 음료로 고객선택을 넓히세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
              지금 바로 문의하기
            </button>
            <button className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
              제품 특징 보기
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Premium%20elegant%20Chinese%20tea%20ceremony%20setup%20with%20traditional%20teapot%20and%20cups%20on%20wooden%20table%2C%20warm%20golden%20lighting%2C%20peaceful%20zen%20atmosphere%2C%20high-end%20minimalist%20background%20with%20subtle%20steam%20rising%20from%20tea%2C%20professional%20product%20photography%20style%2C%20luxury%20branding%20aesthetic&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white max-w-4xl">
        <div className="mb-8">
          <h1 className="font-['Pacifico'] text-4xl md:text-6xl mb-4">JenyBrew</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        커피 5분에 한잔! 아쉬운 매출!<br />
          <span className="text-amber-400">액상스틱 보이차 제안은 어떠세요?</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          번거로운 차도구, 기다림 NO!, 스틱 하나로 완성되는 99.9% 정통 보이차.<br />
          프리미엄 건강 음료로 고객의 선택을 넓히세요.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            지금 바로 문의하기
          </button>
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            제품 특징 보기
          </button>
        </div>
      </div>
    </section>
  );
}
