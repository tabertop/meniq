/* BUILD: 2026-03-15T21:14:35.058Z */
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
        <title>MENIQ - Men's Performance Test | MenIQ.co</title>
        <meta name="description" content="See how you rank vs other men your age. Free 30-second men's health assessment." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://meniq.co" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta property="og:title" content="MENIQ — Men's Performance Test" />
        <meta property="og:description" content="See how you rank vs other men your age." />
        <meta property="og:url" content="https://meniq.co" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://meniq.co/images/meniq-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MENIQ — Men's Performance Test" />
        <meta name="twitter:description" content="See how you rank vs other men your age." />
        <meta name="twitter:image" content="https://meniq.co/images/meniq-preview.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};ttq.load('D6QVB5JC77UD56GIEVNG');ttq.page();}(window, document, 'ttq');` }} />
      </Head>
      <>
      <div style={{position:'fixed',bottom:4,right:4,background:'#c0392b',color:'#fff',fontSize:'9px',padding:'2px 5px',borderRadius:3,zIndex:9999,fontFamily:'monospace',opacity:0.7}}>
        v{new Date('2026-03-15T21:14:35.058Z').toISOString().slice(0,16).replace('T',' ')}
      </div><MaxRxQuiz /></>
    </>
  )
}