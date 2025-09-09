
'use client';

export default function ComparisonTable() {
  const comparisons = [
    {
      category: '제품 형태',
      traditional: '찻잎 또는 티백형',
      jenybrew: '물에 바로 타는 스틱형'
    },
    {
      category: '준비 방식',
      traditional: '차 도구 필요, 우림 시간 필요',
      jenybrew: '도구 불필요, 즉시 제공 가능'
    },
    {
      category: '차잎 원산지',
      traditional: '일반적인 보이차 잎',
      jenybrew: '윈남성 보이현 정품 차잎'
    },
    {
      category: '가공 방식',
      traditional: '전통적인 건조 방식',
      jenybrew: '특허 추출 공법, 무첨가'
    },
    {
      category: '포장 및 선물용',
      traditional: '일반 포장, 선물용 제한적',
      jenybrew: '프리미엄 포장, 선물용 최적화'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            왜 <span className="text-amber-600">JenyBrew</span>인가요?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전통 보이차와 다른, 제니브루만의 확실한 차별점
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 text-lg font-bold text-gray-700">비교 항목</th>
                <th className="text-center py-4 px-6 text-lg font-bold text-gray-700">전통 보이차</th>
                <th className="text-center py-4 px-6 text-lg font-bold text-amber-600 bg-amber-50 rounded-t-2xl">
                  JenyBrew 스틱형
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-white/50 transition-colors">
                  <td className="py-6 px-6 font-semibold text-gray-900">
                    {item.category}
                  </td>
                  <td className="py-6 px-6 text-center text-gray-600">
                    {item.traditional}
                  </td>
                  <td className="py-6 px-6 text-center bg-amber-50 font-semibold text-amber-800">
                    <div className="flex items-center justify-center gap-2">
                      <i className="ri-check-line text-green-600"></i>
                      {item.jenybrew}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-amber-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              제니브루로 "더 건강하게, 더 편리하고, 더 프리미엄하게!""
            </h3>
            <p className="text-lg text-gray-700">
              제니브루 스틱형 보이차는 전통의 가치를 지키면서도 <br/>
              <span className="font-bold text-amber-600"> ZERO TIME의 편리함과 프리미엄 이미지</span> 
              를 동시에 제공합니다. <br/> 고객에게는 건강하고 특별한 경험을, 매장에는 운영 효율과 새로운 매출 기회를 선사합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
