import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (!slackWebhookUrl) {
      return NextResponse.json({
        status: 'error',
        message: 'SLACK_WEBHOOK_URL environment variable is not set',
        configured: false
      }, { status: 500 });
    }

    // Basic validation of webhook URL format
    if (!slackWebhookUrl.startsWith('https://hooks.slack.com/services/')) {
      return NextResponse.json({
        status: 'error',
        message: 'SLACK_WEBHOOK_URL format is invalid. Should start with https://hooks.slack.com/services/',
        configured: false
      }, { status: 400 });
    }

    // Test webhook with a simple ping message
    try {
      const testPayload = {
        text: '🔍 Health check from JenyBrew website - Slack integration is working!'
      };

      const response = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testPayload),
      });

      if (response.ok) {
        return NextResponse.json({
          status: 'success',
          message: 'Slack webhook is working correctly',
          configured: true,
          webhookStatus: 'active'
        });
      } else {
        return NextResponse.json({
          status: 'error',
          message: `Slack webhook test failed: ${response.status} ${response.statusText}`,
          configured: true,
          webhookStatus: 'inactive'
        }, { status: 502 });
      }
    } catch (webhookError) {
      return NextResponse.json({
        status: 'error',
        message: `Failed to connect to Slack webhook: ${webhookError instanceof Error ? webhookError.message : 'Unknown error'}`,
        configured: true,
        webhookStatus: 'unreachable'
      }, { status: 502 });
    }

  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: `Health check failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      configured: false
    }, { status: 500 });
  }
}

