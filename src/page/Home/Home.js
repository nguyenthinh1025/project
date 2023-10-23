import React, { useState } from "react";
import Detail from "./Detail/Detail";
import ListProduct from "./ListProduct/ListProduct";
import Header from "./Header/Header";
import Partners from "./Partners/Partners";
import WhyWe from "./WhyWe/WhyWe";
import Members from "./Members/Members";
import Checkit from "./Checkit/Checkit";
import Testimonial from "./Testimonial/Testimonial";
import News from "./News/News";
import Video from "./Video/Video";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import Cart from "./Cart/Cart";
import Sidebar from "./Sidebar/Sidebar";
export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const handleSideBar = () => {
    setSidebar((item) => !item);
  };

  const [detail, setDetail] = useState(false);
  const handleDitail = () => {
    setDetail((item) => !item);
  };
  const [cart, setCart] = useState(false);
  const handleCart = () => {
    setCart((item) => !item);
  };
  return (
    <div>
      <span className="theme-bg-c" />
      <Preloader />
      <div className="page-content parallax-header">
        <Header />
        <section role="main">
          <ListProduct
            handleSideBar={handleSideBar}
            handleDitail={handleDitail}
            handleCart={handleCart}
          />
          <Partners />
          <WhyWe />
          <Members />
          <Checkit />
          <Testimonial />
          <News />
          <Video />
          <About />
        </section>
        <Footer />
      </div>
      <Sidebar sidebar={sidebar} handleSideBar={handleSideBar} />
      <Detail detail={detail} handleDitail={handleDitail} />
      <Cart cart={cart} handleCart={handleCart} />
    </div>
  );
}
