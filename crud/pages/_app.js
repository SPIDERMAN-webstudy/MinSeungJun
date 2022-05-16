import Layout from "../component/layout/Layout";
import { initializeApp } from "firebase/app";
function MyApp({ Component, pageProps }) {
  const firebaseConfig = {};

  // Initialize Firebase
  initializeApp(firebaseConfig);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
