import React from 'react';
import CardFeatures from './CardFeatures';

const DaisyCard = ({pricing}) => {
    const {name,price,features,popular}=pricing;
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                {
                    popular && <span className="badge badge-xs badge-warning">Most Popular</span>
                }
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">{price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        features.map((feature,index)=><CardFeatures key={index} feature={feature}></CardFeatures>)
                    }
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default DaisyCard;