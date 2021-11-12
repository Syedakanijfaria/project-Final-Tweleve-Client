import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection.js';
import Products from '../Products/Products.js';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;