import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          src={"/earth-bg.mp4"}
          type="video"
        ></video>
        <Hero />
      </div>
      <Navbar />
      <Services />
      <Banner />
      <Footer />
    </div>
  );
}
