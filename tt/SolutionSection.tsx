'use client';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              JenyBrew 보이차. <br></br>시간이 만드는 프리미엄.<br />
              <span className="text-amber-600">글로벌이 선택한 가치.</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-map-pin-line text-xl text-amber-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">원산지 프리미엄</h3>
                  <p className="text-gray-600">
                    운남성 정통 보이차. 시간이 지날수록 깊어지는 와인 같은 가치.
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
                    전통과 품격을 담아 고급 수집품으로 인정받는 차.
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
                    일본·대만·한국등  웰니스·선물 시장에서 빠르게 성장, 글로벌 경쟁력 입증.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/image/total.jpg"
              alt="보이차 전통"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center"></div>
          <div className="relative flex justify-center items-center h-full"></div>
    <div className="text-center mb-6">
      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">JenyBrew 주요 효능</h3>
      <span className="text-amber-600"> 특히, 숙취해소에 좋습니다!.</span>
        <div className="relative w-full max-w-2x1">
            <img 
              src="/image/effect.png"
              alt="보이차 효능"
              className="w-[70%] mx-auto rounded-2xl shadow-2xl w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
      </div>
    </section>
    );
}