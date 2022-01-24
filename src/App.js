import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/categories' exact component={Categories} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/products' exact component={Product} />
        <Redirect path='/' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
