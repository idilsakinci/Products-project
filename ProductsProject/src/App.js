import React, {useState} from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import ProductsList from './Components/ProductsList';
import ProductsGrid from './Components/ProductsGrid';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [changeView,setChangeView]=useState(false);

  return (
    <div className="App">

      <Navbar changeView={changeView} setChangeView={setChangeView}></Navbar>
      {changeView ? <ProductsList/> : <ProductsGrid/> }
      

    </div>
  );
}

export default App;
