import logo from './logo.svg';
import './App.css';

import { Route, Switch, Link } from 'react-router-dom'

import Welcome from "./pages/Welcome"
import Products from "./pages/Products"
import ProductsDetails from './pages/ProductsDetails';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/welcome">welcome</Link></li>
        <li><Link to="/products">products</Link></li>
      </ul>
      <main>
        <Switch>
          <Route path='/welcome' exact>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:id' exact>
            <ProductsDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
