import "./App.css";
import { Suspense } from 'react'

import Home from './views/Home/Home'
import NotFound from './views/NotFound/NotFound'
import SearchResults from './views/SearchResults/SearchResults'
import HostDetails from './views/HostDetails/HostDetails'

import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/results' element={<SearchResults/>} />
          <Route path='host-details/:id' element={<HostDetails/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
