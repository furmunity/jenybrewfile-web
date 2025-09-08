'use client';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              보이차의 가치와<br />
              <span className="text-amber-600">해외 시장 확장</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-map-pin-line text-xl text-amber-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">원산지의 프리미엄</h3>
                  <p className="text-gray-600">
                    중국 윈난성 원산지의 정통 보이차로, 시간에 따라 가치가 증가하는 특별한 차입니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-trophy-line text-xl text-amber-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">수집품 가치</h3>
                  <p className="text-gray-600">
                    전통 보이차는 와인처럼 가치가 인정받는 고급 수집품으로 인식되고 있습니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-global-line text-xl text-amber-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">아시아 시장 확산</h3>
                  <p className="text-gray-600">
                    일본, 대만, 한국 등 동아시아에서 건강 음료로 각광받으며, 
                    고급 선물용 시장으로 확장되고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Traditional%20Chinese%20pu-erh%20tea%20ceremony%20with%20aged%20tea%20cakes%20and%20elegant%20tea%20cups%2C%20warm%20wooden%20background%2C%20traditional%20Chinese%20tea%20culture%20atmosphere%2C%20professional%20product%20photography%2C%20premium%20packaging%20display%2C%20luxury%20gift%20presentation&width=600&height=700&seq=solution1&orientation=portrait"
              alt="보이차 전통"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}