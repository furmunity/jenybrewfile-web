'use client';

export default function MarketAnalysis() {
  const marketData = [
    {
      country: '일본',
      percentage: '35%',
      description: '웰니스 음료·선물 문화 성장',
      icon: 'fi fi-jp'
    },
    {
      country: '대만',
      percentage: '28%',
      description: '전통 차 문화 기반, 프리미엄 보이차 시장 성숙',
      icon: 'fi fi-tw'
    },
    {
      country: '한국',
      percentage: '22%',
      description: '건강·프리미엄 음료 수요 급증',
      icon: 'fi fi-kr'
    },
    {
      country: '기타',
      percentage: '15%',
      description: '동남아·북미·유럽 시장 확대 중',
      icon: 'ri-global-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-amber-600">보이차 해외시장 분석</span>과 특별한 기회
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            보이차는 글로벌 시장에서 웰니스와 프리미엄을 동시에 선도하는 차세대 건강 음료 카테고리입니다.

          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketData.map((data, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`${data.icon} text-2xl text-amber-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{data.country}</h3>
                <div className="text-3xl font-bold text-amber-600 mt-2">{data.percentage}</div>
              </div>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {data.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              특별한 기회
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-gift-line text-amber-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">선물용 패키지 등 활용</h4>
                  <p className="text-gray-600 text-sm">직원/ 거래처 명절 선물 등으로 활용가능 </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-heart-line text-amber-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">건강 및 전통 중시</h4>
                  <p className="text-gray-600 text-sm">커피·밀크티 대체 가능한 글로벌 친화력</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-building-line text-amber-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">B2B 거래 확장</h4>
                  <p className="text-gray-600 text-sm">기업 간 거래에서도 고급 티 브랜드로 인정 가능</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Japanese%20tea%20ceremony%20modern%20interpretation%20with%20traditional%20elements%2C%20elegant%20Japanese%20interior%20design%2C%20premium%20tea%20service%20in%20contemporary%20setting%2C%20cultural%20bridge%20between%20tradition%20and%20modernity%2C%20sophisticated%20Japanese%20aesthetic&width=600&height=500&seq=market1&orientation=landscape"
              alt="일본 차 문화"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}