'use client';

export default function USPSection() {
  const usps = [
    {
      icon: 'ri-time-line',
      title: '간편성',
      subtitle: '도구·시간 절약',
      description: '물만 있으면 바로 제공되는 스틱형 제품으로 운영 효율성 극대화',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-shield-check-line',
      title: '정품 보장',
      subtitle: '윈남성 보이현 정품',
      description: '원산지에서 직접 수입한 검증된 프리미엄 차잎 사용',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: '건강 관리',
      subtitle: '무첨가 추출 방식',
      description: '특허받은 추출 방식으로 영양소 보존, 무첨가 건강 음료',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'ri-gift-line',
      title: '선물 가능성',
      subtitle: '프리미엄 포장',
      description: '고급 포장으로 고객 선물용으로 바로 활용 가능한 완성도',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-lightbulb-line',
      title: '혁신적 결합',
      subtitle: '전통과 현대의 만남',
      description: '커피 고객에게 새로운 경험을 제공하는 전통적 가치의 현대적 해석',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            제니브루만의 <span className="text-amber-400">독특한 가치</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            다른 제품과 차별화되는 제니브루만의 고유한 판매 제안(USP)을 
            확인해보세요.
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

        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            왜 지금 제니브루를 선택해야 할까요?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            단순한 차 제품이 아닌, <strong>고객 경험의 혁신</strong>입니다. 
            기존 커피 고객에게 새로운 건강 음료 옵션을 제공하면서도, 
            운영의 편리함과 프리미엄 이미지를 동시에 실현할 수 있습니다.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <i className="ri-arrow-up-line text-3xl text-white mb-3 block"></i>
              <h4 className="font-bold text-white mb-2">매출 증대</h4>
              <p className="text-white/80 text-sm">새로운 음료 카테고리로 매출 다각화</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <i className="ri-user-smile-line text-3xl text-white mb-3 block"></i>
              <h4 className="font-bold text-white mb-2">고객 만족</h4>
              <p className="text-white/80 text-sm">건강하고 특별한 음료 경험 제공</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <i className="ri-settings-line text-3xl text-white mb-3 block"></i>
              <h4 className="font-bold text-white mb-2">운영 효율</h4>
              <p className="text-white/80 text-sm">간편한 준비와 서빙으로 효율성 증대</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}