import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import { Switch, Route, Redirect } from 'react-router-dom';
// import ResetPassword from './components/auth/ResetPassword';

function App() {
  return (
    <>
      <Switch>
        <Header />
        <Route to='/' exact component={Home} />
        <Route to='/about' component={About} />
        <Route to='/contact' component={Contact} />
        <Route to='/products' component={Product} />
        {/* <Route to='/reset-password' element={<ResetPassword />} /> */}
        <Redirect to='/' />
        <Footer />
      </Switch>
    </>
  );
}

export default App;
