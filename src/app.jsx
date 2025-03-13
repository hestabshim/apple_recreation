import {useState} from "react";
import { useEffect } from "react";
import GlobalNav from "./components/nav_global";
import Mac from "./pages/Mac";
import Home from "./pages/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import Page404 from "./pages/404";
const App = () => {
  return (
    <>
      <HashRouter>
        <GlobalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </HashRouter>
    </>
  );
};
export default App;