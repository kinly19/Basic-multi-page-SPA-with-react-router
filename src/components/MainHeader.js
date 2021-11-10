import { NavLink } from 'react-router-dom'; //https://v5.reactrouter.com/web/api/NavLink
import './MainHeader.scss';

// ============================== Notes ==============================
// <Link> - The Link component is used to navigate the different routes on the site
// <NavLink> - A special version of the <Link> that will add styling attributes 
//  to the rendered element when it matches the current URL.
//====================================================================

const MainHeader = () => {
  return (
    <header className='header'>
      <nav> 
        <ul>
          <li>
            <NavLink activeClassName='active'to="/">Home</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink activeClassName='active'to="/welcome">Welcome</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink activeClassNameto='active' to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
