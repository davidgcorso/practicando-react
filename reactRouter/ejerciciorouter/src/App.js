
import A from '../src/paginas/A'
import B from '../src/paginas/B'
import C from '../src/paginas/C'
import Error404 from './paginas/Error404'
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<A/>}/>
      <Route path='/pagina2' element={<B/>}/>
      <Route path='/pagina3' element={<C/>}/>
      <Route path='/pagina1' element={ <Navigate to ="/"/>}/>
      <Route path="*" element={<Error404/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
