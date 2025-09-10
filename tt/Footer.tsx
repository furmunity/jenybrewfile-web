'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-['Pacifico'] text-3xl text-amber-400 mb-4">JenyBrew</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              전통적인 보이차의 가치와 현대적인 편리함을 결합한 
              프리미엄 스틱형 보이차로 새로운 음료 경험을 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                <i className="ri-youtube-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                <i className="ri-kakao-talk-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">제품 정보</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">제품 특징</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">품질 보증</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">원산지 인증</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">영양 성분</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">고객 지원</h4>
            <ul className="space-y-2">
              <li><a href="#contact-form" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">문의하기</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">샘플 신청</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">가격 문의</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer">배송 정보</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 JenyBrew. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors cursor-pointer">개인정보처리방침</a>
              <a href="#" className="hover:text-amber-400 transition-colors cursor-pointer">이용약관</a>
              <a href="#" className="hover:text-amber-400 transition-colors cursor-pointer">사업자정보</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}