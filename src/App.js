import React from "react";
import { Outlet, BrowserRouter as Router} from "react-router-dom";
import './App.css'
import Nav from "./Components/Nav/components/Nav";
import Path from "./Path/Path";
import Footer from "./Components/Footer/components/Footer";
import Whatapp from "./Components/Home/components/Whatshapp/Whatapp";
// import 'dotenv/config'

const App = () => {

  return (<>
    <Router>
      <Nav />
      <Path />
    <Footer/>
    </Router>
    <Whatapp/>

    </>
  );
};

export default App;
