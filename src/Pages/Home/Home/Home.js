import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <Advertisement></Advertisement>
            <Stat></Stat>
        </div>
    );
};

export default Home;