import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name,price,features}=pricing;
    return (
        <div className='flex flex-col bg-amber-500 mb-3 p-6 rounded-lg'>
            {/* pricing header */}
            <div>
                <h1 className='text-5xl'>{name}</h1>
                <p>{price}</p>
            </div>
            {/* features list */}
            <div>
                <h2 className='text-3xl my-4'>Features:</h2>
                <ul className='my-4 bg-amber-300 p-4 rounded-lg flex-1'>
                    {
                        features.map((feature,index)=><PricingFeatures key={index} feature={feature}></PricingFeatures>)
                    }
                </ul>
                <button className='btn btn-primary w-full'>Subscribe</button>
            </div>
        </div>
    );
};

export default PricingCard;