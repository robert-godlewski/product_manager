import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<ProductDetail/>} path="/products/:id"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
