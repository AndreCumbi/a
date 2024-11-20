import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Livro from './Livro';
import CriarLivro from './CriarLivro';
import UpdateLivro from './UpdateLivro';
import DeleteLivro from './DeleteLivro';
import DesactivarLivro from './DesactivarLivro';
import ActivarLivro from './ActivarLivro';
import DetalhesLivro from './DetalhesLivro';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Livro />}></Route>
          <Route path="/create" element={<CriarLivro/>}></Route>
          <Route path='/update/:id'  element={<UpdateLivro/>} ></Route>
          <Route path='/detalhes/:id'  element={<DetalhesLivro/>} ></Route>
          <Route path='/delete/:id'  element={<DeleteLivro/>} ></Route>
          <Route path='/desactivar/:id'  element={<DesactivarLivro/>} ></Route>
          <Route path='/comprar/:id'  element={<ActivarLivro/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
