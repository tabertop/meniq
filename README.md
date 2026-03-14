# MenIQ.co — Men's Health Quiz Funnel

## Stack
- Next.js 14
- React 18
- Deployed on Vercel

## Project Structure
```
meniq/
├── components/
│   └── MaxRxQuiz.jsx     ← Main quiz component (all logic here)
├── pages/
│   ├── _app.js           ← App wrapper
│   └── index.js          ← Entry point
├── styles/
│   └── globals.css       ← Global styles + font imports
├── public/
│   └── favicon.ico       ← Add your favicon here
├── next.config.js
├── vercel.json
└── package.json
```

## Deploy to Vercel

### Option A — GitHub (recommended)
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import from GitHub
3. Select the repo → Deploy
4. Add custom domain: meniq.co

### Option B — Vercel CLI
```bash
npm install -g vercel
cd meniq
vercel
```

## Update CTA URLs
All landing page URLs are in `components/MaxRxQuiz.jsx`:
- Line ~37: ED → `gomaxrx.com/mens-health-consult`
- Line ~164: Hair → `gomaxrx.com/treatments/male-hair-loss`
- Line ~291: Testosterone → `gomaxrx.com/products/edge`
- Line ~429: Partner → `gomaxrx.com/products/edge`

## Update Webhook URL
In `components/MaxRxQuiz.jsx` near the top:
```js
const WEBHOOK_URL = "your-apps-script-url";
```

## Environment Variables (optional — for future API routes)
Create `.env.local`:
```
WEBHOOK_URL=your-google-apps-script-url
```
