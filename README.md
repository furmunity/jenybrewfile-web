This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup

### Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
# Slack Integration
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK/URL/HERE
```

### Slack Webhook Setup

To receive form submissions in Slack:

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps)
2. Create a new app or select an existing app
3. Navigate to "Incoming Webhooks" and enable it
4. Create a new webhook URL for your desired channel
5. Copy the webhook URL and add it to your `.env.local` file

## Deployment

### Environment Variables for Production

For production deployment, you need to set the `SLACK_WEBHOOK_URL` environment variable on your hosting platform:

#### Vercel
1. Go to your project dashboard on [Vercel](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Add `SLACK_WEBHOOK_URL` with your Slack webhook URL
4. Deploy or redeploy your application

#### Netlify
1. Go to your site dashboard on [Netlify](https://netlify.com)
2. Navigate to **Site settings** → **Environment variables**
3. Add `SLACK_WEBHOOK_URL` with your Slack webhook URL
4. Deploy or redeploy your application

#### AWS (Amplify/Elastic Beanstalk)
1. In your AWS console, navigate to your application
2. Go to **Environment** → **Configuration** → **Software**
3. Add environment property: `SLACK_WEBHOOK_URL`
4. Deploy your application

#### Docker
Add environment variable to your Dockerfile or docker-compose.yml:
```dockerfile
ENV SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK/URL/HERE
```

#### Other Platforms
- **Railway**: Project Settings → Environment → Add Variable
- **Render**: Environment → Add Environment Variable
- **Heroku**: Settings → Config Vars → Add

### Testing Slack Integration

After deployment, you can test if Slack integration is working by visiting:
```
https://your-domain.com/api/health-check/slack
```

This endpoint will:
- ✅ Check if the environment variable is set
- ✅ Validate the webhook URL format  
- ✅ Send a test message to your Slack channel
- ✅ Return detailed status information

### Important Notes
- The form will continue to work even if Slack integration fails (it will fallback to JotForm only)
- Check your browser console for detailed error messages during testing
- Use the health check endpoint to verify Slack integration after deployment
- The health check will send a test message to your Slack channel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
