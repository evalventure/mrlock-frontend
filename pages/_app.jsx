import { AppProps } from 'next/app';
import Router from 'next/router';
import React, {useEffect } from 'react';
import '../styles/globals.css'
import { GTMPageView } from '../utils/gtag';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
        Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />
}
