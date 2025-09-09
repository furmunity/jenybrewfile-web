'use client';

export default function ProblemSection() {
  const problems = [
    {
      icon: 'ri-time-line',
      title: '준비 시간 부담',
      description: '차를 준비할 시간조차 없어 고객 응대가 늦어집니다.'
    },
    {
      icon: 'ri-tools-line',
      title: '도구 관리의 어려움',
      description: '찻잔 세척과 보관, 인력 관리까지 번거롭습니다.'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: '건강 음료 니즈',
      description: '커피만으로는 부족하다는 고객 요구가 늘고 있습니다.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            이런 고민 매일 겪고 있으신가요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            기존 고객에게 새로운 건강 음료를 제안하고 싶지만, 
            준비 부담과 운영의 복잡함 때문에 망설이고 계시나요?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className={`${problem.icon} text-2xl text-red-600`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <i className="ri-lightbulb-line text-4xl text-amber-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              해결책이 필요하시죠!
            </h3>
            <p className="text-lg text-gray-600">
              제니브루 스틱 하나면 충분합니다.<br />
              준비도, 도구도 필요없는 <span className="font-bold text-amber-600">99.9% 정통 보이차.</span> <br /> 고객에게는 새로운 건강 경험! 매장은 더 높은 매출&효율을 얻습니다!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}