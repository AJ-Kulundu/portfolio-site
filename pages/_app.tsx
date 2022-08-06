import "../src/theme/styles.css";
import "@styles/globals.css"
import Layout from "@components/Layout";
import Navbar from "@components/Navbar";
import Header from '@components/Header';
import Footer from '@components/Footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type {AppProps} from 'next/app';


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
