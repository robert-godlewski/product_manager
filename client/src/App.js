import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
//import ProductDetail from './components/ProductDetail';
//<Route element={<ProductDetail/>} path="/products/:id"/>
import './App.css';

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
