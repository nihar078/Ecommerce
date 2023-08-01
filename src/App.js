import React, { Fragment } from "react";
import Music from "./components/Layout/Music";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App(){
  return(
    <Fragment>
      <Header />
      <Music />
      <Footer />
    </Fragment>
  )
}

export default App