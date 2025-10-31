import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex my-2'><CircleCheckBig  className='mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeatures;