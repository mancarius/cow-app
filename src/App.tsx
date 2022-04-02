import "./App.css";

import Home from './views/Home'
import NotFound from './views/NotFound'
import SearchResults from './views/SearchResults'
import HostDetails from './views/HostDetails'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home/>} />
        <Route path='/results' element={<SearchResults/>} />
        <Route path='host-details/:id' element={<HostDetails/>} />
      </Routes>
    </>
  );
}

export default App;
