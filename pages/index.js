import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../components/Home'), { ssr: false });

const index = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default index;
