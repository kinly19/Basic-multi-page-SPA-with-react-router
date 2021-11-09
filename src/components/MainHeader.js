import { NavLink } from 'react-router-dom'; //https://v5.reactrouter.com/web/api/NavLink
import './MainHeader.scss';

// ============================== Notes ==============================
// NavLink -  A special version of the <NavLink> that will add styling attributes 
//  to the rendered element when it matches the current URL.
//====================================================================

const MainHeader = () => {
  return (
    <header className='header'>
      <nav> 
        <ul>
          <li>
            <NavLink activeClassName='active'to="/landing">Home</NavLink>
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
