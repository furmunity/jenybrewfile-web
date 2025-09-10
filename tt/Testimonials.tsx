'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: '김민0',
      position: '남, 30대 ',
      company: '카페 운영자, 서울 강남 ',
      content: '"커피만 팔던 매장에 제니브루를 추가했더니, 건강 음료 찾는 고객이 늘어 객단가가 확실히 올랐습니다."',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20cafe%20manager%20in%20modern%20coffee%20shop%20interior%2C%20friendly%20smile%2C%20business%20casual%20attire%2C%20warm%20lighting%2C%20contemporary%20cafe%20atmosphere%2C%20professional%20portrait%20photography&width=100&height=100&seq=testimonial1&orientation=squarish'
    },
    {
      name: '박영0',
      position: '여, 40대 ',
      company: '프랜차이즈 구매 담당자',
      content: '"도구 없이 바로 제공 가능해 매뉴얼 교육도 쉽고, 매출 효율이 좋아 전 매장 도입을 검토 중입니다."',
      rating: 4,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20businesswoman%20in%20corporate%20office%20setting%2C%20confident%20expression%2C%20business%20suit%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20corporate%20portrait&width=100&height=100&seq=testimonial2&orientation=squarish'
    },
    {
      name: '이준0',
      position: '남, 50대',
      company: '부산 해운대 티하우스 사장',
      content: '"외국인 관광객들이 선물용으로 많이 구매합니다. 전통 차의 품격과 현대적 편리함이 결합된 느낌입니다."',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Korean%20tea%20house%20owner%20in%20traditional%20yet%20modern%20tea%20shop%2C%20warm%20and%20welcoming%20atmosphere%2C%20traditional%20Korean%20interior%20design%20elements%2C%20professional%20business%20portrait&width=100&height=100&seq=testimonial3&orientation=squarish'
    },
    {
      name: '박선0',
      position: '남, 30대 ',
      company: '스타트업 CEO, 성수',
      content: '"사무실 비치용으로 두니 직원들이 커피 대신 자주 마십니다. 집중력도 높아지고 복지 효과도 있어요"',
      rating: 4,
      image:'/image/spy-fill.png'
      },
      {
      name: '최재0',
      position: '남, 50대',
      company: '골프장 회원, 용인',
      content: '"라운드 시작전 클럽하우스에서 커피대신 제니브루를 마셨는데, 시원하고 개운했습니다.숙취 해소에도 좋아 동반자들에게 큰 호응을 얻었습니다.”',
      rating: 5,
      image:'/image/spy-fill.png'
      },
      {
      name: '김지0',
      position: '여, 50대',
      company: '대기업 임원, 서울',
      content: '"선물용 패키지가 고급스러워 거래처에 전달했는데 반응이 정말 좋았습니다.특히 ‘부담 없는 건강 차’라는 이미지 덕분에 신뢰가 높아졌습니다.”',
      rating: 5,
      image: '/image/pa.jpg'
      },
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
                <div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div>
                <p className="text-gray-600">평균 평점</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}