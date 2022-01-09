import React from 'react';
import Reviews from '../../Dashboard/Reviews/Reviews.js';
//import Review from '../../Dashboard/Review/Review.js';
//import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection.js';
import Products from '../Products/Products.js';
import Footer from '../../Shared/Footer/Footer.js';
//import Navigation from '../../Shared/Navigation/Navigation.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ExtraSection></ExtraSection>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;