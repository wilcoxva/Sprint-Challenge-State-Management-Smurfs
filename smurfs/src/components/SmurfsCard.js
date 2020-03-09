import React, { useContext } from 'react';
import { SmurfsContext } from './App';

const SmurfsCard = () => {
    const smurfs = useContext(SmurfsContext);
    console.log("smurfcard:", smurfs)
    return (
        <div>
            {smurfs.map(smurf => (
                <div>
                    <h1>{smurf.name}</h1>
                    <h2>{smurf.age}</h2>
                    <h2>{smurf.height}</h2>
                </div>
            ))}
        </div>
        );
};

export default SmurfsCard;