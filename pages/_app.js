import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import BackGround from '../components/BackGroundCarousel';
import BuyNow from '../components/BuyNow2'


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
