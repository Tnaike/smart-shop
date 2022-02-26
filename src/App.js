import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Categories from './components/Categories';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/categories' exact component={Categories} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/products' exact component={Products} />
        <Route path='/products/:id' exact component={ProductDetails} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/checkout' exact component={Checkout} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
