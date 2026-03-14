import Head from 'next/head'
import dynamic from 'next/dynamic'

// Load quiz client-side only (uses browser APIs like sessionStorage)
const MaxRxQuiz = dynamic(() => import('../components/MaxRxQuiz'), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#0d0d0d',
      color: '#555',
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '14px'
    }}>
      Loading...
    </div>
  )
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Men's Health Assessment | MenIQ.co</title>
        <meta name="description" content="Find out how you rank vs other men your age. Take the 30-second Men's Health Test — completely private." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

        {/* Open Graph — for Telegram/WhatsApp link previews */}
        <meta property="og:title" content="Most men score lower than they think." />
        <meta property="og:description" content="How do you rank vs other men your age? Take the 30-second Men's Health Test." />
        <meta property="og:url" content="https://meniq.co" />
        <meta property="og:type" content="website" />

        {/* Twitter/X card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="What's Your Men's Health Score?" />
        <meta name="twitter:description" content="Most men score lower than they think. Find out where you rank." />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Telegram WebApp compatibility */}
        <meta name="telegram:channel" content="@meniq" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <MaxRxQuiz />
    </>
  )
}
