import React from "react";
import Header from "../components/home_page/header/header";
import About from "../components/home_page/about/about";
import Categories from "../components/home_page/categories/categories";

function Home(){
    return(
        <>
         <Header/>
         <About/>
         <Categories/>
        </>
    )
}
export default Home;