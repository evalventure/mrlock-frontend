import Head from "next/head";

export function WebsiteHead() {
  return (
    <Head>
      <title lang="en-GB">Mr Lock 24/7 | West Midlands Autolocksmith</title>
      <meta name="description" content="Your keys has been locked inside the car? No panic. Call us on 07979374288 and we will get it back to you without any vehicle damages." />

      <meta property="og:url" content="https://www.mrlock247.co.uk/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mr Lock 24/7" />
      <meta property="og:description" content="Your keys has been locked inside the car? No panic. Call us on 07979374288 and we will get it back to you without any vehicle damages." />
      <meta property="og:image" content="share-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="mrlock-demo.surge.sh" />
      <meta property="twitter:url" content="https://www.mrlock247.co.uk/" />
      <meta name="twitter:title" content="Car key replacement in Birmingham" />
      <meta name="twitter:description" content="Your keys has been locked inside the car? No panic. Call us on 07979374288 and we will get it back to you without any vehicle damages." />
      <meta name="twitter:image" content="share-image.png" />

      <meta name="language" content="en-GB" />
      <meta name="revisit-after" content="2 days" />
      <meta name="rating" content="GENERAL" />
      <meta name="robots" content="all" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
}
