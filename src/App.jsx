import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanySection from "./components/CompanySection";
import SafePal from "./components/SafePal";
import OurClients from "./components/OurClients";
import Friends from "./components/Friends";
import InfiniteSlider from "./components/InfiniteSlider";
import Subscription from "./components/Subscription";
import Beyond from "./components/Beyond";
import CuttingEdge from "./components/CuttingEdge";
import InfiniteText from "./components/InfiniteText";
import CollectiveBunch from "./components/CollectiveBunch";
import LetsChat from "./components/LetsChat";
import Online from "./components/Online";
import BigText from "./components/BigText";

function App() {
  return (
    <>
      <div className="bg-[#e7f7fd] px-[50px] pb-[50px] rounded-b-[100px]">
        <Header />
        <Hero />
        <CompanySection />
        <SafePal />
        <OurClients />
        <Friends />
        <InfiniteSlider />
        <Subscription />
        <Beyond />
        <CuttingEdge />
      </div>
      <div>
        <InfiniteText />
        <CollectiveBunch />
        <div className="px-[50px]">
          <LetsChat />
        </div>
        <Online />
        <BigText />
      </div>
    </>
  );
}

export default App;