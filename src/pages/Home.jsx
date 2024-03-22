import EarnLiquidity from '../feauture/earnliquidity/EarnLiquidity';
import Explore from '../feauture/explore/Explore';
import Hero from '../feauture/hero/Hero';
import LiquidityProvisioning from '../feauture/liquidyprovisioning/LiquidityProvisioning';
import LongVolatility from '../feauture/longvolatility/LongVolatility';
import NavFootLayout from '../layouts/NavFootLayout';

const Home = () => {
  return (
    <div className='h-screen w-full overflow-x-hidden '>
      <NavFootLayout>
        <Hero />
        <LiquidityProvisioning />
        <LongVolatility />
        <EarnLiquidity />
        <Explore />
      </NavFootLayout>
    </div>
  );
};

export default Home;
