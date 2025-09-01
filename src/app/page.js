"use client"
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import ReviewsAndBlog from "@/components/ReviewsAndBlog";
// import ChartServ from "@/components/Chart";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <ReviewsAndBlog />
      {/* <ChartServ /> */}
      <Footer />
    </>
  );
}
