import Hero from "@/components/Hero";
import Image from "next/image";
import ProductHighlights from "./highlights/page";

export default function Home() {
  return (
    <div className="">
     <Hero/>
     <ProductHighlights/>
      <h1> running server</h1>
    </div>
  );
}
