import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

import '../styles/globals.scss'

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", GA_ID, {
          page_path: url,
        });
      }
    };
    
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
    
  )
}

export default MyApp
