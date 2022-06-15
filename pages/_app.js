import "../src/theme/styles.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar.js";
import Header from '../components/Header';
import Footer from '../components/Footer';
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
