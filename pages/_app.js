import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
import { JobProvider } from "../context/JobContext";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script  strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Q5DYQV3TYT"/>
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-Q5DYQV3TYT');`}
  </Script>
      <AuthProvider>
      <JobProvider>
        <Component {...pageProps} />
      </JobProvider>
    </AuthProvider>
    </>
  );
}

export default MyApp;
