import React from "react";

//un container es la vista principal la parte logica , y que va contener muchos componentes
//este const es un arrow functions
import "./home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
const Home = () => {
    return(
        <>
     <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
        </>
    )
}

export default Home;
