// import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      {/* Navbar */}
      <Navbar click={() => setSideToggle(true)}/>

      {/* SlideDrawer*/ }
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>

      {/* BackDrawer*/ }
      <BackDrop show={sideToggle} click={() => setSideToggle(false)}/>

      <main>
        <Routes>
          {/* HomeScreen */}
          <Route exact path = "/" element ={ <HomeScreen/> }/>

          {/* ProductScreen */}
          <Route exact path = "/product/:id" element ={ <ProductScreen />} />

          {/* CartScreen */}
          <Route exact path = "/cart" element ={ <CartScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
