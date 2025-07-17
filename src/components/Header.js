import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div>
        <div className="container0">
    <div className="container">
<div className="row">
<div className="col">
<nav>
  <ul className="list-inline pt-4">
    <li className="list-inline-item ps-4">
      <Link to="/product">
        Products</Link>
    </li>
    <li className="list-inline-item ps-4"><Link to="/outstory">Out Story</Link></li>
    <li className="list-inline-item ps-4"><Link to="/integrents">Ingredients</Link></li>
      
  </ul>
</nav>
</div>
<div class="col pt-4">
  <ul>
    <li className="list-inline-item ps-4 ">
<h1 className="s text-primary">
  <Link to="/">partake</Link>
  </h1>
  </li>
</ul>
</div>
<div class="col">
<ul class="pt-4 ">
  {/* <li className="list-inline-item ps-4"><Link to="#">Find Us</Link></li>
  <li className="list-inline-item ps-4"><Link to="#">Blog</Link></li> */}
  <li className="list-inline-item ps-1">
    <Link to="#">
  <i className='bx bx-search'></i>
  </Link>
  </li>
   <li className="list-inline-item ps-1"><Link to="/o">Upload</Link>
   </li>
   <li className="list-inline-item ps-1">
    <Link to="/register">Getdelete</Link>
   </li>
    <li className="list-inline-item ps-1">
    <Link to="/register">Register</Link>
   </li>
  <li className="list-inline-item ">
    <Link to="/login">Login</Link>
   </li>
   <li className="list-inline-item ">
    <Link to="/validation">Validation</Link>
   </li>
   {/* <li className="list-inline-item ps-4">
    <Link to="edit/:id">Edit</Link>
   </li> */}
</ul>
</div>
</div>
    <div className="container1">
      <div className="item3">
     <h1>Crunch into <br/>Flavor, Anytime, <br/>Anywhere</h1>
     <p>Savor the perfect balance of bold flavors and irresistible <br/>crunch—ideal for snacking, sharing, or enjoying all on<br/> your own!</p>
    <button>LEARN MORE</button>  
    </div> 
    </div>
       </div>

</div>

       </div>
    
  )
}

export default Header