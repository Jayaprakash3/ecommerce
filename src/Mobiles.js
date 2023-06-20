


import React, { useState, useEffect } from 'react';
import jsonData from './mobile.json';
import  './Mobile.css'

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(jsonData);
    }, []);



    return (
        <div >
            <h1>Mobiles</h1>    
            <div className='overall'>

                {data.map((mobile, index) => (
                    <div className="child" key={index}>
                        <img src={`./images/${mobile.image}`} alt={mobile.name} />

                        <h2>{mobile.model}</h2>
                        <p>Price: {mobile.price}</p>
                        <p>RAM: {mobile.ram}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyComponent;
