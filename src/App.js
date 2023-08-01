import React, { Fragment, useState } from "react";
import Music from "./components/Layout/Music";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

const App = () =>{
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return(
    <Fragment>
       <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Music />
      <Footer />
    </Fragment>
  )
}

export default App