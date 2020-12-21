import React from "react";
import Navbar from "../../components/navbar/navbar";
import Search from "../../components/landingPage/search";
import PopularForYou from "../../components/landingPage/popularForYou";
import NewRecipe from "../../components/landingPage/newRecipe";
import Popular from "../../components/landingPage/popularRecipe";
import Footer from "../../components/landingPage/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Search />
      <PopularForYou />
      <NewRecipe />
      <Popular />
      <Footer />
    </>
  );
}
