import { Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

import MainHeader from './components/MainHeader';
import Landing from './pages/Landing';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';


// ============================= Notes =============================
// import { Route } from 'react-router-dom';
// <Route> - route component needs a path prop passed into it. <Route path="......." />
// we can render components, inbetween Route opening and closing tages. <Route>.........</Route>
// check index.js for <BrowserRouter> needed to use <Router>
// separate components loaded by Router into a folder (pages)

// <Switch> - is unique in that it renders a route exclusively...
//  https://v5.reactrouter.com/web/api/Switch
// =================================================================

function App() {

  const DummyProductsList = [
    {
      id: "552531",
      name: "Water bottle",
    },
    {
      id: "522523",
      name: "A Book About React",
    },
    {
      id: "552374",
      name: "Online course",
    },
  ];

  return (
    <Fragment>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/welcome' exact> {/* path */}
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products list={DummyProductsList}/>
          </Route>
          <Route path='/products/:productId' exact> 
            <ProductDetail  listData={DummyProductsList}/>
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
};

// paths
// our-domain.com/welcome => welcome Component
// our-domain.com/products => Products Component
// our-domain.com/products-detail/ <any value>
export default App;
