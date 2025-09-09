
'use client';

export default function ProductFeatures() {
  const features = [
    {
      icon: 'ri-cup-line',
      title: '스틱형 간편함',
      description: '도구 필요 없는 즉시 완성, 빠른 회전율로 운영 효율 UP.',
      image: '/image/stick1.png.png'
    },
    {
      icon: 'ri-shield-check-line',
      title: '정품 원산지 보장',
      description: '중국 운남성 보이현 인증 99.9%, 고객 만족과 신뢰 확보.',
      image: 'https://readdy.ai/api/search-image?query=Yunnan%20province%20tea%20plantation%20landscape%20with%20tea%20farmers%20harvesting%20premium%20tea%20leaves%2C%20authentic%20Chinese%20tea%20growing%20region%2C%20traditional%20tea%20cultivation%2C%20misty%20mountains%20background%2C%20professional%20documentary%20style&width=400&height=300&seq=feature2&orientation=landscape'
    },
    {
      icon: 'ri-flask-line',
      title: '고품질 가공',
      description: '영양소 손실 없는 저온 농축 5BRIX의 깊은 맛.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tea%20processing%20facility%20with%20advanced%20extraction%20technology%2C%20clean%20laboratory%20environment%2C%20premium%20tea%20production%20equipment%2C%20professional%20food%20processing%20facility%2C%20quality%20control%20standards&width=400&height=300&seq=feature3&orientation=landscape'
    },
    {
      icon: 'ri-heart-line',
      title: '건강한 무첨가',
      description: '무설탕·무방부제·무첨가, 웰빙 트렌드 고객 겨냥.',
      image: 'https://readdy.ai/api/search-image?query=Natural%20herbal%20tea%20ingredients%20displayed%20beautifully%2C%20organic%20healthy%20lifestyle%20concept%2C%20clean%20eating%20aesthetic%2C%20wellness%20and%20health%20focused%20imagery%2C%20natural%20lighting%2C%20premium%20organic%20products&width=400&height=300&seq=feature4&orientation=landscape'
    },
    {
      icon: 'ri-gift-line',
      title: '프리미엄 선물 포장',
      description: 'VIP·기업 선물 시장까지 확장 가능한 고급 패키지.',
      image: '/image/gift.png'
    },
    {
      icon: 'ri-time-line',
      title: '즉석 제공 가능',
      description: '매장·행사 어디서든 신속한 제공으로 고객 만족 강화.',
      image: 'https://readdy.ai/api/search-image?query=Quick%20tea%20preparation%20in%20modern%20cafe%20setting%2C%20barista%20making%20instant%20tea%20with%20stick%20packet%2C%20professional%20coffee%20shop%20environment%2C%20efficient%20service%2C%20contemporary%20beverage%20preparation&width=400&height=300&seq=feature6&orientation=landscape'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            전통의 가치와 현대적 혁신을 하나로, <br/> 제니브루만의 <span className="text-amber-600">6가지 특별함</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            제니브루 보이차는 프리미엄 음료를 넘어 <br/>매출, 운영, 선물 시장까지 확장하는 B2B 성장 파트너입니다.

          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-amber-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 새로운 메뉴 가격 및 포지셔닝 섹션 추가 */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              커피만으로는 부족합니다.<br/> <span className="text-amber-600">보이차로 메뉴와 매출 UP!</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              성수·강남 등 프리미엄 지역 기준 제안 메뉴와 포지셔닝 전략
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-cup-line text-xl text-white"></i>
                </div>
                <span className="text-2xl font-bold text-blue-700">5,500~6,000원</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">보이차 스트레이트</h4>
              <p className="text-gray-600 mb-4">핫/아이스 모두 즉시 제공 (ZERO TIME)</p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">포지셔닝 포인트</p>
                <p className="text-sm text-gray-600">커피 대체 음료로 건강 지향 고객 타겟. <br/>기본이자 가장 안정적인 매출 카테고리.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-amber-200">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <i className="ri-cup-fill text-xl text-white"></i>
                </div>
                <span className="text-2xl font-bold text-amber-700">6,500~7,000원</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">보이차 라떼</h4>
              <p className="text-gray-600 mb-4">우유 베이스 크리미한 맛</p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">포지셔닝 포인트</p>
                <p className="text-sm text-gray-600">밀크티와 유사한 친숙함.<br/>20~30대 여성층에 인기.<br/>부드러운 맛으로 점심 디저트 매출 강화. <br/>카페 메뉴 확장의 핵심 아이템.</p>
              </div>
              <div className="mt-4 text-center">
                <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">추천 메뉴</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <i className="ri-star-line text-xl text-white"></i>
                </div>
                <span className="text-2xl font-bold text-purple-700">7,500~8,500원</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">보이차 시그니처</h4>
              <p className="text-gray-600 mb-4">꿀,크림폼, 콤부차 믹스 등</p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">포지셔닝 포인트</p>
                <p className="text-sm text-gray-600">스페셜티 이미지로 한정 메뉴 어필.<br/>성수·강남 등 트렌디한 지역 고객 대상</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}