import React from 'react';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import Submenu from '../components/Submenu';

import { useMediaQuery } from 'react-responsive';
import MobileNav from '../components/mobile/MobileNav';
import SearchBar from '../components/mobile/SearchBar';
import MobileProducts from '../components/mobile/Products';
import Tab from '../components/mobile/Tab';

const Homepage = () => {
  const isSmall = useMediaQuery({
    query: '(min-width: 450px)',
  });

  const isBig = useMediaQuery({
    query: '(max-width: 401px)',
  });

  return (
    <div className="homepage">
      {isSmall ? (
        <>
          <NavBar />
          <div className="content">
            <Submenu />
            <Products />
          </div>
        </>
      ) : (
        <>
          <MobileNav />
          <div className="content">
            <SearchBar />
            <Tab />
            <MobileProducts />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
