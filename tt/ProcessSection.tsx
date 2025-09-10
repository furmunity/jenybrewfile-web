'use client';

export default function ProcessSection() {
  const processes = [
    {
      step: '01',
      title: '원료 선별',
      description: '운남성 보이현 최고급 찻잎 엄선 → 프리미엄 신뢰성 확보',
      icon: 'ri-leaf-line'
    },
    {
      step: '02',
      title: '독창 공법',
      description: '영양소 손실 없는 노하우 공법 → 웰니스 트렌드 맞춤',
      icon: 'ri-flask-line'
    },
    {
      step: '03',
      title: '농축 및 처리',
      description: '무첨가·5BRIX 농축 → 일정한 맛과 안정성 제공',
      icon: 'ri-settings-line'
    },
    {
      step: '04',
      title: '스틱 포장',
      description: '위생적 개별 포장 → 즉석 서비스·선물용 최적화',
      icon: 'ri-box-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-amber-600">JenyBrew</span> 제조 공정
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            원료 추출부터 스틱 포장까지, 품질과 영양을 보존하는 
            체계적인 생산 공정을 소개합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processes.map((process, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${process.icon} text-3xl text-amber-600`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {process.step}
                </div>
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-amber-200 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                품질 보증 시스템
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="ri-check-double-line text-xl text-green-600"></i>
                  <span className="text-gray-700">HACCP 인증 생산</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-double-line text-xl text-green-600"></i>
                  <span className="text-gray-700">전 공정 품질 관리 시스템 </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-double-line text-xl text-green-600"></i>
                  <span className="text-gray-700">무첨가, 무방부제 준수</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-double-line text-xl text-green-600"></i>
                  <span className="text-gray-700">원산지 인증서 및 시험성적서 제공</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20food%20processing%20facility%20with%20quality%20control%20systems%2C%20clean%20production%20environment%2C%20advanced%20tea%20processing%20equipment%2C%20quality%20assurance%20testing%20laboratory%2C%20professional%20food%20manufacturing%20standards&width=500&height=400&seq=process1&orientation=landscape"
                alt="품질 관리"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}