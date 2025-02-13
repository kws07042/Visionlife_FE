import '../index.css';
import Navigation from './Navigation.tsx';
import Footer from './Footer.tsx';
import {Outlet} from 'react-router-dom';

function RootLayout() {
  return (
    <div className="container mx-auto h-full w-full max-w-[1440px]">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
