import Hero from "@/components/Hero";
import Image from "next/image";
import ProductHighlights from "./highlights/page";
import AIChatWidget from "@/components/AIChatWidget";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Newsletter from "@/components/Newslatter";

export default function Home() {
  return (
    <div className="">
     <Hero/>
     <ProductHighlights/>
     <AIChatWidget/>
     <Testimonials/>
     <FAQ/>
     <CTA/>
     <About/>
    <Newsletter/>
     
    </div>
  );
}
