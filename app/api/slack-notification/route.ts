import { NextRequest, NextResponse } from 'next/server';

interface SlackMessage {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  businessType: string;
  inquiryType: string[];
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: SlackMessage = await request.json();
    
    // Slack Webhook URL from environment variables
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (!slackWebhookUrl) {
      console.error('SLACK_WEBHOOK_URL environment variable is not set');
      return NextResponse.json(
        { error: 'Slack configuration is missing' },
        { status: 500 }
      );
    }

    // Format inquiry types
    const inquiryTypeText = formData.inquiryType.length > 0 
      ? formData.inquiryType.join(', ')
      : '없음';

    // Create Slack message payload
    const slackPayload = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🚨 JenyBrew 새로운 문의가 도착했습니다!',
            emoji: true
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*업체명:*\n${formData.companyName}`
            },
            {
              type: 'mrkdwn',
              text: `*담당자명:*\n${formData.contactName}`
            },
            {
              type: 'mrkdwn',
              text: `*연락처:*\n${formData.phone}`
            },
            {
              type: 'mrkdwn',
              text: `*이메일:*\n${formData.email}`
            }
          ]
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*사업 유형:*\n${getBusinessTypeLabel(formData.businessType)}`
            },
            {
              type: 'mrkdwn',
              text: `*관심 분야:*\n${getInquiryTypeLabels(formData.inquiryType)}`
            }
          ]
        }
      ]
    };

    // Add message section if message exists
    if (formData.message.trim()) {
      slackPayload.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*상세 문의사항:*\n${formData.message}`
        }
      });
    }

    // Add divider and timestamp
    slackPayload.blocks.push(
      {
        type: 'divider'
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `📅 접수 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}`
          }
        ]
      }
    );

    // Send to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackPayload),
    });

    if (!slackResponse.ok) {
      throw new Error(`Slack API error: ${slackResponse.status}`);
    }

    return NextResponse.json({ success: true, message: 'Slack notification sent successfully' });

  } catch (error) {
    console.error('Error sending Slack notification:', error);
    return NextResponse.json(
      { error: 'Failed to send Slack notification' },
      { status: 500 }
    );
  }
}

// Helper function to convert business type to Korean label
function getBusinessTypeLabel(businessType: string): string {
  const businessTypeMap: { [key: string]: string } = {
    'cafe': '카페',
    'restaurant': '레스토랑',
    'teahouse': '티하우스',
    'franchise': '프랜차이즈',
    'retail': '소매업',
    'wholesale': '도매업',
    'other': '기타'
  };
  
  return businessTypeMap[businessType] || businessType;
}

// Helper function to convert inquiry types to Korean labels
function getInquiryTypeLabels(inquiryTypes: string[]): string {
  const inquiryTypeMap: { [key: string]: string } = {
    'sample': '샘플 신청',
    'price': '가격 문의',
    'marketing': '마케팅 자료',
    'training': '직원 교육',
    'wholesale': '대량 구매',
    'partnership': '파트너십'
  };
  
  if (inquiryTypes.length === 0) {
    return '없음';
  }
  
  return inquiryTypes.map(type => inquiryTypeMap[type] || type).join(', ');
}

