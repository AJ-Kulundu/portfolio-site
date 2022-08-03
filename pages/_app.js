import "../src/theme/styles.css";
import Layout from "../components/Layout.tsx";
import Navbar from "../components/Navbar.tsx";
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function MyApp({ Component, pageProps }) {
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
