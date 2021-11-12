import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableProducts from '../AvailableProducts/AvailableProducts.js';

const Shop = () => {
    //const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AvailableProducts></AvailableProducts>
        </div>
    );
};

export default Shop;