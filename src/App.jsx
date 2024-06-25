import React from "react";
import {
  Cart,
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
} from "./components";
import {
  heroapi,
  toprateslaes,
  popularsales,
  sneaker,
  highlight,
  story,
  footerAPI,
} from "./data/data.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={sneaker} />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={highlight} ifExists />
        <Stories endpoint={story} />
      </main>
      <Footer endpoint={footerAPI} />
    </>
  );
};

export default App;
