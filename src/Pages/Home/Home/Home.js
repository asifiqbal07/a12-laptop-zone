import React from 'react';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <Stat></Stat>
        </div>
    );
};

export default Home;