import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head lang="en">
        {/* Start Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-585VSPV4');`}}></script>
        {/* End Google Tag Manager */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2137178551510754"
        crossOrigin="true"></script>
        {/* <!-- Global site tag (gtag.js) - Google Ads: 10779330119 --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10779330119" ></script>

        <script dangerouslySetInnerHTML={{ __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10779330119');`}}></script>

        <script dangerouslySetInnerHTML={{ __html: `
          gtag('config', 'AW-10779330119/CBx1CPb6z8MDEMeM_pMo', {
            'phone_conversion_number': '+44 7979 374288'
          });`}}></script>
      </Head>
      <body>
          {/* Google Tag Manager (noscript) */}
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-585VSPV4"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
