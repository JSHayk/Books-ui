import './Layout.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useEffect, useState } from 'react';
import Loading from '../components/loading/Loading';

const Layout = ({children}) => {

/////
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep a reference to the timeout ID
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 0);

    // Cleanup function to clear the timeout when the component unmounts or when the effect re-runs
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
/////

  return (
    <>
      <Header />
      <main>
        {loading ?  <Loading /> : null}
        {!loading ? children : null}
      </main>
      <Footer />
    </>
  )
}

export default Layout
