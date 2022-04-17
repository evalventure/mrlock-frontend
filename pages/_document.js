import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <script
          dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer', "GTM-K9ZHLKG");`,
          }}
      />
      {/* End Google Tag Manager */}
      {/* Google Tag Manager (noscript) */}
      <noscript
          dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9ZHLKG" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
      />
      {/* End Google Tag Manager (noscript) */}
      <Head lang="en" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
