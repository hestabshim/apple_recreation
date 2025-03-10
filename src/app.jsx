import {useState} from "react";
import { useEffect } from "react";
import GlobalNav from "./components/nav_global";
import Mac from "./pages/Mac";
import section from "./components/section";
const App = () => {
  return (
    <>
    <GlobalNav />
    <Mac />
    <section />
    </>
  );
};
export default App;