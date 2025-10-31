import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOptions = ({PricingPromise}) => {
    const pricingData=use(PricingPromise)
    console.log(pricingData);
    return (
        <div>
            <h1 className='text-5xl text-center'>Get Our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 m-4'>
                {
                    pricingData.map(pricing=><DaisyCard key={pricing.id} pricing={pricing}></DaisyCard>)
                }

                {/* {
                    pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}
            </div>
        </div>
    );
};

export default PricingOptions;