import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SessionProvider } from "next-auth/react"; 
import Script from 'next/script';
import Sidebar from '../components/layouts/sidebar';
import Head from 'next/head';

function MyApp({ 
    Component, 
    pageProps: { session, ...pageProps } 
  }) {
  
  if (Component.getLayout){
    return Component.getLayout(
      <>
        <Head>
          <title>Instagram Clone Project</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </>
    )
  }
  
  return (
    <>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js' />
      <Head>
        <title>Instagram Clone Project</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
          <Sidebar />
          <Component {...pageProps} />
      </SessionProvider>
    </>
    )
}

export default MyApp
