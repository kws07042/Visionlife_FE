// import {useRef} from 'react';
import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Header from '../../layout/Header/Header.tsx';
import WhyUsSection from './components/WhyUsSection.tsx';
// import Hero from './components/Hero.tsx';
import GlobalBusiness from './components/GlobalBusiness.tsx';
import Media from './components/Media.tsx';
import Hero from './components/Hero/Hero.tsx';
import GridLayout from '../../layout/Grid/GridLayout.tsx';

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
 return (
  <>
   <Header />
   <main className='min-h-screen w-full text-center bg-white'>
    <GridLayout>
     <Hero />
     <WhyUsSection />
     <GlobalBusiness />
     <Media />
    </GridLayout>
   </main>
  </>
 );
};

export default Home;