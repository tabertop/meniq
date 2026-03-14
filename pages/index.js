import Head from 'next/head'
import dynamic from 'next/dynamic'

const MaxRxQuiz = dynamic(() => import('../components/MaxRxQuiz'), {
  ssr: false,
  loading: () => (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',background:'#0d0d0d',color:'#555',fontFamily:'DM Sans,sans-serif',fontSize:'14px'}}>
      Loading...
    </div>
  )
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Men's Health Quiz | Free Online Assessment | MenIQ.co</title>
        <meta name="description" content="Take the free 30-second men's health assessment. Find out how you score for ED, hair loss, and testosterone compared to men your age. Private, instant results." />
        <meta name="keywords" content="men's health quiz, erectile dysfunction test, hair loss assessment, testosterone quiz, men's health assessment, ED quiz, online health screening" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MenIQ.co" />
        <link rel="canonical" href="https://meniq.co" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meniq.co" />
        <meta property="og:site_name" content="MenIQ.co" />
        <meta property="og:title" content="Most men score lower than they think. What's your score?" />
        <meta property="og:description" content="Free 30-second men's health test. Compare your score against men your age. Private and instant results." />
        <meta property="og:image" content="https://meniq.co/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@meniqco" />
        <meta name="twitter:title" content="Most men score lower than they think." />
        <meta name="twitter:description" content="Free 30-second men's health test. Find out how you rank vs other men your age." />
        <meta name="twitter:image" content="https://meniq.co/og-image.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "MenIQ Men's Health Assessment",
          "url": "https://meniq.co",
          "description": "Free online men's health quiz covering erectile dysfunction, hair loss, and testosterone levels. Private, instant personalized results.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "provider": { "@type": "Organization", "name": "MenIQ.co", "url": "https://meniq.co" }
        })}} />
      </Head>
      <MaxRxQuiz />
    </>
  )
}