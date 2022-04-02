import "./App.css";

import Home from './views/Home/Home'
import NotFound from './views/NotFound/NotFound'
import SearchResults from './views/SearchResults/SearchResults'
import HostDetails from './views/HostDetails/HostDetails'

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
