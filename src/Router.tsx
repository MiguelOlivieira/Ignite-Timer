import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History';
import { DefaultLayout } from './layouts/DefaultLayout/Index';

export function Router(){
    return(
        <Routes >
       {/* O DefaultLayout é o layout principal que será usado como base para as rotas filhas */}
          <Route path="/" element={<DefaultLayout/>}> 
          <Route path = "/" element = {<Home/>} />

          <Route path = "/history"  element = {<History/>}/>
          </Route>
        </Routes >
    )
}