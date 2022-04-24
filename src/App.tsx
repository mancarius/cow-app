import "./App.css";
import { Suspense } from "react";

import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import SearchResults from "./views/SearchResults/SearchResults";
import HostDetails from "./views/HostDetails/HostDetails";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import LoginDialog from "./components/LoginDialog/LoginDialog";
import HereApi from "./service/here-api.service";

function App() {
  HereApi.apiKey = import.meta.env.VITE_APP_HERE_API_KEY;

  return (
    <>
      <NavBar />
      <LoginDialog />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="host-details/:id" element={<HostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
