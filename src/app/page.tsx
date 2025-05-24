"use client";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Banner from "@/components/home-page/banner";
import Introduce from "@/components/home-page/introduce";
import Season from "@/components/home-page/season";
import Carousel from "@/components/home-page/carousel";
import Team from "@/components/home-page/team";
import TopRate from "@/components/home-page/top-rate";
import TopTrending from "@/components/home-page/top-trending";
import Footer from "@/components/ui/footer";
import ListProduct from "@/components/home-page/list-product";
import News from "@/components/other/news-card";
import Technology from "@/components/other/technology";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col gap-10">
        <Banner />
        <ListProduct />
        <Introduce />
        <TopRate />
        <Carousel />
        <Team />
        <News />
        <Season />
        <Technology />
        <TopTrending />
      </main>
      <Footer />
    </div>
  );
}
