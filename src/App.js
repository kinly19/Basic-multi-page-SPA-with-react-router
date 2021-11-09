import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Landing from './pages/Landing';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import { Fragment } from 'react';

// ============================= Notes =============================
// import { Route } from 'react-router-dom';
// <Route> - route component needs a path prop passed into it. <Route path="......." />
// we can render components, inbetween Route opening and closing tages. <Route>.........</Route>
// check index.js for <BrowserRouter> needed to use <Router>
// separate components loaded by Router into a folder (pages)
// =================================================================

function App() {
  return (
    <Fragment>
      <header>
        <MainHeader />
      </header>
      <main>
      <Route path='/'>
        <Landing />
      </Route>
      <Route path='/welcome'>   {/* our-domain.com/welcome */}
        <Welcome />
      </Route>
      <Route path='/products'> {/* path */}
        <Products />
      </Route>
      </main>
    </Fragment>
  );
};

export default App;
