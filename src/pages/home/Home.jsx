import React from "react";
import Navbar from "../../components/landingPage/Navbar";
import Search from "../../components/landingPage/Search";
import PopularForYou from "../../components/landingPage/PopularForyou";
import NewRecipe from "../../components/landingPage/NewRecipe";
import Popular from "../../components/landingPage/Popular";
import Footer from "../../components/landingPage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Search />
      <PopularForYou />
      <NewRecipe />
      <div style={{height:'100px'}} />
      <Popular />
      <Footer />
    </>
  );
}
