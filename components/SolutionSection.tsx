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

      
      {/* 효능 섹션 */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">JenyBrew 주요 효능</h3>
          <p className="text-xl text-amber-600">특히, 숙취해소에 좋습니다!</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* 왼쪽 열 */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <i className="ri-heart-pulse-line text-amber-600"></i>
                    </span>
                    숙취해소
                  </h4>
                  <div className="ml-11 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">주요 작용</p>
                      <p className="text-gray-600 text-sm">알코올 분해 및 해독 촉진, 간 기능 보조</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">기대 효과</p>
                      <p className="text-gray-500 text-sm">숙취 감소, 두통 완화, 피로 회복</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">핵심 성분</p>
                      <p className="text-gray-500 text-sm">갈산, 테아닌</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <i className="ri-scales-line text-amber-600"></i>
                    </span>
                    체지방 감소
                  </h4>
                  <div className="ml-11 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">주요 작용</p>
                      <p className="text-gray-600 text-sm">세포 손상 예방, 항균 및 항염 작용</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">기대 효과</p>
                      <p className="text-gray-500 text-sm">체중 감소, 체지방 관리</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">핵심 성분</p>
                      <p className="text-gray-500 text-sm">갈산</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <i className="ri-shield-check-line text-amber-600"></i>
                    </span>
                    심혈관 건강
                  </h4>
                  <div className="ml-11 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">주요 작용</p>
                      <p className="text-gray-600 text-sm">혈관 노페물 개선, 혈압 조절, 소화 기능 향상</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">기대 효과</p>
                      <p className="text-gray-500 text-sm">심혈관 기능 강화, 혈압 안정, 소화 장애 완화</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">핵심 성분</p>
                      <p className="text-gray-500 text-sm">갈산 외 복합 작용</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 오른쪽 열 */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <i className="ri-brain-line text-amber-600"></i>
                    </span>
                    항산화 작용
                  </h4>
                  <div className="ml-11 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">주요 작용</p>
                      <p className="text-gray-600 text-sm">세포 손상 예방, 향균 및 항염 작용</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">기대 효과</p>
                      <p className="text-gray-500 text-sm">면역력 강화, 노화 예방</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">핵심 성분</p>
                      <p className="text-gray-500 text-sm">카테킨</p>
                    </div>  
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <i className="ri-drop-line text-amber-600"></i>
                    </span>
                    스트레스 완화
                  </h4>
                  <div className="ml-11 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">주요 작용</p>
                      <p className="text-gray-600 text-sm">신경 안정, 스트레스 반응 완화</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">기대 효과</p>
                      <p className="text-gray-500 text-sm">심리적 편안함, 집중력 향상</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">핵심 성분</p>
                      <p className="text-gray-500 text-sm">테아닌</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}