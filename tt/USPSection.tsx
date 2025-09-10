'use client';

export default function USPSection() {
  const usps = [
    {
      icon: 'ri-time-line',
      title: '간편성',
      subtitle: '스틱 하나로 즉시 완성',
      description: '빠른 회전율·인건비 절감',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: '정품 보장',
      subtitle: '원산지 인증 보이차',
      description: '고객 신뢰 + 프리미엄 가격 정당화용',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: '건강 관리',
      subtitle: '갈산 · 카테켄 · 테아닌등 성본 보존',
      description: '웰니스 트렌드 대응, 재구매율 향상',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'ri-gift-line',
      title: '선물 가능성',
      subtitle: '프리미엄 포장',
      description: '기업·호텔·리조트 선물 시장 활용 가능',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-lightbulb-line',
      title: '혁신적 결합',
      subtitle: '전통과 현대의 만남',
      description: '카테고리 창출, 매장 차별화 강화',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            제니브루 USP <br/> <span className="text-amber-400">파트너와 고객 모두를 위한 차별화된 가치 제안</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            제니브루 USP(Unique Selling Point)는 단순한 제품 장점이 아닙니다.<br/>
            고객에게는 건강과 프리미엄 경험을,<br/>
            파트너에게는 운영 효율과 새로운 매출 기회를 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {usps.map((usp, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800 rounded-2xl p-8 h-full hover:bg-gray-700 transition-all duration-300 border border-gray-700">
                <div className={`w-16 h-16 bg-gradient-to-r ${usp.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${usp.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{usp.title}</h3>
                <p className="text-amber-400 font-semibold mb-4">{usp.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-600 text-gray-900 font-bold rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로, 제니브루를 선택해야 할 때입니다
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            단순한 차 제품이 아닌, <strong>제니브루는 매출,고객,운영 모두 혁신합니다.</strong>
            <br/>
            스틱 하나로 완성되는 프리미엄 티
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <i className="ri-arrow-up-line text-3xl text-white mb-3 block"></i>
              <h4 className="font-bold text-white mb-2">매출 증대</h4>
              <p className="text-white/80 text-sm">새로운 음료 카테고리로 메뉴 다각화, 객단가 상승, 신규 고객층 확보</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <i className="ri-user-smile-line text-3xl text-white mb-3 block"></i>
              <h4 className="font-bold text-white mb-2">고객 만족</h4>
              <p className="text-white/80 text-sm">건강·웰니스 트렌드 맞춤, 프리미엄 브랜드 이미지 강화</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <i className="ri-settings-line text-3xl text-white mb-3 block"></i>
              <h4 className="font-bold text-white mb-2">운영 효율</h4>
              <p className="text-white/80 text-sm">도구 불필요·즉시 제공, 인건비 절감 + 빠른 회전율</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}