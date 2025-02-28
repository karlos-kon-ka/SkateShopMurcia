import './App.css';
import Scene from './components/Scene';
import ProductCard from './components/ProductCard';
import Data from '../products.json';
import { useState } from 'react';
import Botones from './components/Botones';

import Footer from './components/Footer';
import Scene2 from './components/Scene2';
import { Router } from 'react-router-dom';
import NavBar from './components/NavBar';



const App = () => {
  const Categorias = ['Todas', ...new Set(Data.map(product => product.brand))];

  const [categorias, setCategorias] = useState(Categorias);
  const [article, setArticle] = useState(Data);

  const filterCategori = (brand) => {
    if (brand === 'Todas') {
      setArticle(Data);
    } else {
      const filtered = Data.filter(product => product.brand === brand);
      setArticle(filtered);
    }
  };

  return (
    <div className="App">
      
        <NavBar />
      
      
      <Scene />
      <Botones categorias={categorias} filterCategori={filterCategori} />
      <ProductCard products={article} />
      <Scene2 id='contacto' />
      <Footer id='contacto' />
        
      
      
      
      
    </div>
    
  );
};

export default App;
