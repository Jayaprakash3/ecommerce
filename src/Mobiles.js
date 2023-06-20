// import React, { useState, useEffect } from 'react';

// const MyComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await fetch('/mobile.json');
//         // const jsonData = await response.json();
//         // setData(jsonData);
//         setData([
//           {
//             "model": "iPhone 13",
//             "price": "$999",
//             "ram": "6GB",
//             "image": "/home/ds/Ecomercepage/ecommerce/src/samsung11.jpeg"
//           }
//         //   ,
//         //   {
//         //     "model": "Samsung Galaxy S21",
//         //     "price": "$899",
//         //     "ram": "8GB",
//         //     "image": "https://example.com/galaxys21.jpg"
//         //   },
//         //   {
//         //     "model": "Google Pixel 6",
//         //     "price": "$799",
//         //     "ram": "6GB",
//         //     "image": "https://example.com/pixel6.jpg"
//         //   }
//         ]);
//       } catch (error) {
//         console.error('Error fetching JSON data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Mobiles</h1>
//       {data.map((mobile, index) => (
//         <div key={index}>
//           <h2>{mobile.model}</h2>
//           <p>Price: {mobile.price}</p>
//           <p>RAM: {mobile.ram}</p>
//           <img src={mobile.image} alt={mobile.model} />
//         </div>
//       ))}

//     </div>
//   );
// };

// export default MyComponent;


//until now working


// import React from 'react';
// import mobil from './mobile.json'
// // import samsung1 from './samsung11.jpeg'
// const MyComponent = () => {
//     // const [data, setData] = useState([]);



//     return (
//             <div>
//             <h1>Mobiles</h1>

//             {/* <img src={samsung1} alt=" not working" /> */}

//             {mobil && mobil.map((mobile, index) => (
//                 <div key={index}>
//                     <h4>{mobile.model}</h4>
//                     <p>{mobile.price}</p>
//                     <p>{mobile.ram}</p>
//                     {/* <img src={mobile.image} alt={mobile.model} /> */}

//                     <img src={require(`./${mobile.image}`).default} alt={mobile.model} />



//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MyComponent;

/// its is working good. i used maximum




// import React, { useState, useEffect } from 'react';
// import jsonData from './mobile.json'; // Replace with the path to your JSON file

// const MyComponent = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         setData(jsonData);
//     }, []);

//     return (
//         <div>
//             <h1>Mobiles</h1>
//             {data.map((mobile, index) => (
//                 <div key={index}>
//                     <h2>{mobile.model}</h2>
//                     <p>Price: {mobile.price}</p>
//                     <p>RAM: {mobile.ram}</p>
//                     {/* <img src={require(`./${mobile.image}`).default} alt={mobile.model} /> */}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MyComponent;






// import React, { useState, useEffect } from 'react';
// import jsonData from './mobile.json'; // Replace with the path to your JSON file

// const MyComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(jsonData);
//   }, []);

//   return (
//     <div>
//       <h1>Mobiles</h1>
//       {data.map((mobile, index) => (
//         <div key={index}>
//           <h2>{mobile.model}</h2>
//           <p>Price: {mobile.price}</p>
//           <p>RAM: {mobile.ram}</p>
//           <img src={mobile.image} alt={mobile.model} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;


import React, { useState, useEffect } from 'react';
import jsonData from './mobile.json';
import styles from './Mobile.css'

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
