'use client';

import { useState } from 'react';

interface FormData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  businessType: string;
  inquiryType: string[];
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    businessType: '',
    inquiryType: [],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      inquiryType: checked 
        ? [...prev.inquiryType, value]
        : prev.inquiryType.filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    let slackSuccess = false;
    let jotformSuccess = false;

    // Send to Slack (with individual error handling)
    try {
      console.log('Sending to Slack...', formData);
      const slackResponse = await fetch('/api/slack-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      slackSuccess = slackResponse.ok;
      if (slackSuccess) {
        console.log('✅ Slack notification sent successfully');
      } else {
        console.error('❌ Slack notification failed:', slackResponse.status, slackResponse.statusText);
        const errorText = await slackResponse.text().catch(() => 'Unknown error');
        console.error('Slack error response:', errorText);
        
        // Check if it's a configuration issue
        if (slackResponse.status === 500) {
          try {
            const errorData = JSON.parse(errorText);
            if (errorData.error === 'Slack configuration is missing') {
              console.warn('⚠️ Slack webhook URL is not configured. Please set SLACK_WEBHOOK_URL environment variable.');
            }
          } catch {
            // Ignore parsing errors, just log the original error
          }
        }
      }
    } catch (error) {
      console.error('❌ Slack request failed:', error);
      slackSuccess = false;
    }

    // Send to JotForm (with individual error handling)
    try {
      console.log('Sending to JotForm...');
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('companyName', formData.companyName);
      formDataToSubmit.append('contactName', formData.contactName);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('businessType', formData.businessType);
      formDataToSubmit.append('inquiryType', formData.inquiryType.join(', '));
      formDataToSubmit.append('message', formData.message);

      const jotformResponse = await fetch('https://submit.jotform.com/api/233642986928072', {
        method: 'POST',
        body: formDataToSubmit
      });

      jotformSuccess = jotformResponse.ok;
      if (jotformSuccess) {
        console.log('✅ JotForm submission successful');
      } else {
        console.error('❌ JotForm submission failed:', jotformResponse.status, jotformResponse.statusText);
        const errorText = await jotformResponse.text().catch(() => 'Unknown error');
        console.error('JotForm error response:', errorText);
      }
    } catch (error) {
      console.error('❌ JotForm request failed:', error);
      jotformSuccess = false;
    }

    // Handle final result
    if (slackSuccess || jotformSuccess) {
      const message = '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다!';
      
      // Log final status for debugging
      console.log(`📊 Final status - Slack: ${slackSuccess ? '✅' : '❌'}, JotForm: ${jotformSuccess ? '✅' : '❌'}`);
      
      setSubmitStatus(message);
      setFormData({
        companyName: '',
        contactName: '',
        phone: '',
        email: '',
        businessType: '',
        inquiryType: [],
        message: ''
      });
    } else {
      console.error('❌ Both Slack and JotForm submissions failed');
      setSubmitStatus('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            지금 바로 <span className="text-amber-400">JenyBrew</span> 도입을 문의하세요!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            샘플 신청부터 가격 문의, 마케팅 자료까지 
            필요한 모든 정보를 제공해드립니다.
          </p>
        </div>

        <div className="bg-gray-800 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} data-readdy-form id="jenybrew-inquiry">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="companyName">
                  업체명 *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none text-white"
                  placeholder="업체명을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="contactName">
                  담당자명 *
                </label>
                <input
                  type="text"
                  id="contactName" 
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none text-white"
                  placeholder="담당자명을 입력하세요"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none text-white"
                  placeholder="010-0000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none text-white"
                  placeholder="example@company.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="businessType">
                사업 유형 *
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none text-white pr-8"
              >
                <option value="">사업 유형을 선택하세요</option>
                <option value="cafe">카페</option>
                <option value="restaurant">레스토랑</option>
                <option value="teahouse">티하우스</option>
                <option value="franchise">프랜차이즈</option>
                <option value="retail">소매업</option>
                <option value="wholesale">도매업</option>
                <option value="other">기타</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                관심 분야 (복수 선택 가능)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { value: 'sample', label: '샘플 신청' },
                  { value: 'price', label: '가격 문의' },
                  { value: 'marketing', label: '마케팅 자료' },
                  { value: 'training', label: '직원 교육' },
                  { value: 'wholesale', label: '대량 구매' },
                  { value: 'partnership', label: '파트너십' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.inquiryType.includes(option.value)}
                      onChange={handleCheckboxChange}
                      className="mr-3 w-4 h-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">
                상세 문의사항
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                maxLength={500}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none text-white resize-none"
                placeholder="궁금한 점이나 요청사항을 자세히 적어주세요 (최대 500자)"
              ></textarea>
              <div className="text-right text-sm text-gray-400 mt-1">
                {formData.message.length}/500자
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  전송 중...
                </span>
              ) : (
                '문의 신청하기'
              )}
            </button>

            {submitStatus && (
              <div className={`mt-4 p-4 rounded-lg text-center ${
                submitStatus.includes('성공') 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-amber-600"></i>
              </div>
              <h4 className="font-semibold mb-2">전화 문의</h4>
              <p className="text-gray-300">02-1234-5678</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl text-amber-600"></i>
              </div>
              <h4 className="font-semibold mb-2">이메일</h4>
              <p className="text-gray-300">contact@jenybrew.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-amber-600"></i>
              </div>
              <h4 className="font-semibold mb-2">상담 시간</h4>
              <p className="text-gray-300">평일 09:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}