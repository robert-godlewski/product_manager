import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
//import ProductForm from './components/ProductForm';
//import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:id" element={<ProductDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
