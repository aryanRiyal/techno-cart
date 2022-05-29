// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* SideDrawer */}
      {/* Backdrop */}

      <main>
        <Routes>
          <Route exact path = "/" component ={ HomeScreen }/>
          <Route exact path = "/product/:id" component ={ ProductScreen } />
          <Route exact path = "/cart" component ={ CartScreen } />
        </Routes>
      </main>

      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
