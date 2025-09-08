'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: '김민수',
      position: '카페 운영진',
      company: '서울 강남구 소재 카페',
      content: '커피숍에서 보이차를 제공할 수 있어서, 차 도구 관리나 직원 교육 없이도 바로 설치할 수 있었습니다. 고객들이 건강한 옵션이 있다고 매우 만족해합니다.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20cafe%20manager%20in%20modern%20coffee%20shop%20interior%2C%20friendly%20smile%2C%20business%20casual%20attire%2C%20warm%20lighting%2C%20contemporary%20cafe%20atmosphere%2C%20professional%20portrait%20photography&width=100&height=100&seq=testimonial1&orientation=squarish'
    },
    {
      name: '박영희',
      position: '구매 담당자',
      company: '대형 프랜차이즈 본부',
      content: '고객 반응이 정말 훌륭했습니다. 건강 음료 이미지를 강화하고 프리미엄 포인트로 선물도 받을 수 있어서 매출 증대에 큰 도움이 되었습니다.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20businesswoman%20in%20corporate%20office%20setting%2C%20confident%20expression%2C%20business%20suit%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20corporate%20portrait&width=100&height=100&seq=testimonial2&orientation=squarish'
    },
    {
      name: '이준호',
      position: '사장',
      company: '부산 해운대 티하우스',
      content: '전통 차의 품질은 그대로 유지하면서도 현대적인 편리함을 제공할 수 있어서 정말 만족합니다. 특히 일본 관광객들이 선물용으로 많이 구매해가세요.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Korean%20tea%20house%20owner%20in%20traditional%20yet%20modern%20tea%20shop%2C%20warm%20and%20welcoming%20atmosphere%2C%20traditional%20Korean%20interior%20design%20elements%2C%20professional%20business%20portrait&width=100&height=100&seq=testimonial3&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            실제 <span className="text-amber-600">고객 후기</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            제니브루를 도입한 B2B 고객들의 생생한 후기를 
            확인해보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-amber-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400"></i>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>검증된 후기</span>
                <i className="ri-verified-badge-line text-green-500"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
                <p className="text-gray-600">고객 만족도</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">250+</div>
                <p className="text-gray-600">도입 매장 수</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">4.9</div>
                <p className="text-gray-600">평균 평점</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}