import './Navbar.css';
import {Link} from 'react-router-dom';

import {useSelector} from 'react-redux';

const Navbar = ({click}) => {
//from here
  const cart =useSelector(state => state.cart);
  const {cartItems} = cart;

  const getCartCount = () =>{
    return cartItems.reduce((qty, item)=> qty+Number(item.qty),0);
  }
//till here and getCartCount 
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Techno Cart</h2>
      </div>
      
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__links">
            { /* Icon */ }
            <i className="fa-solid fa-cart-shopping"></i>
            <span> Cart
            <span className="cartlogo__badge">{getCartCount()}</span></span>
           
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </nav>
  )
}
export default Navbar