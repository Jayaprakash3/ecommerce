import React from 'react';
import { Link } from 'react-router-dom';
// import MobileForm from './Addpage'

import './Menus.css';



 const Menus=()=>{



    return(
<div >
<ul className="navbar">

  <li>      <Link to="/Addpage">Go to Registration</Link>
</li>
  <li><a href="#">About</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact</a></li>
</ul>



</div>
    )
 }
export  default Menus;



