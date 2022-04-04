import "./App.css";
import { Suspense } from 'react'

import Home from './views/Home/Home'
import NotFound from './views/NotFound/NotFound'
import SearchResults from './views/SearchResults/SearchResults'
import HostDetails from './views/HostDetails/HostDetails'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home/>} />
          <Route path='/results' element={<SearchResults/>} />
          <Route path='host-details/:id' element={<HostDetails/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
