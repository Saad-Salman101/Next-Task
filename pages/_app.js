import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
// import BackGround from '../components/BackGroundCarousel';
// import BuyNow from '../components/BuyNow2'
import Home from '../components/Home';


function MyApp({ Component, pageProps }) {
  

  return (
    <div>
      <Home/>
      {/* <BackGround/> */}
      <Component {...pageProps} />
      {/* <BuyNow/> */}
    </div>
  );
}

export default MyApp;
