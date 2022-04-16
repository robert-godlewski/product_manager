import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/get/:id" element={<OneProduct />} />
          <Route path="/products/edit/:id" element={<UpdateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
