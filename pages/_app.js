import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar.js";
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
