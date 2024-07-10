import Image from "next/image";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import Welcome from "./components/Welcome";
import FeaturedProducts from "./components/FeaturedProducts";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import NewSearchBar from "./components/NewSearchBar";
import WelcomeSection from "./components/WelcomeSection";
import MobileWelcome from "./components/MobileWelcome";


export default function Home() {
  return (
    <main className="max-w-screen-2xl bg-[#f5f5f5]">
      <div className="max-w-screen-max-container-width w-full bg-[#f5f5f5]
       border border-black">
        <MainHeader/>
        {/* <NewSearchBar/> */}
        {/* <SearchBar/> */}
      
        <div className="px-2 bg-[#589c4b] w-full pb-[200px]">
          <WelcomeSection/>
        </div>
        {/* <MobileWelcome/> */}
        {/* <Welcome/> */}
        <FeaturedProducts/>
        <Reviews/>
        <Footer/>
      </div>
    </main>
    
  );
}
