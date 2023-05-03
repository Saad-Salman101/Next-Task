import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import BackGround from '../components/BackGround';
import BuyNow from '../components/BuyNow'


function MyApp({ Component, pageProps }) {
  

  return (
    <div>
      <BackGround/>
      <Component {...pageProps} />
      <BuyNow/>
    </div>
  );
}

export default MyApp;
