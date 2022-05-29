import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Techno Cart</h2>
      </div>
      
      {/* links */}
      <ul>
        <li>
          <Link to="/cart">
            { /* Icon */ }
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
            <span className="cart__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>

    </nav>
  )
}
export default Navbar