import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './componentes/Header'
import './index.css'
import Contatos from './pages/Contatos'
import Eventos from './pages/Eventos'
import Home from './pages/Home'
import Login from './pages/Login'
import Usuarios from './pages/Usuarios'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Contatos' element={<Contatos/>}/>
      <Route path='Eventos' element={<Eventos/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Usuarios' element={<Usuarios/>}/>
    </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
