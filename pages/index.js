import HeaderTop from "../components/header-top";
import HomeSlider from "../components/home/slide";
import SearchBar from "../components/home/searchBar";
import SelectTreatment from "../components/home/selectTreatment";
import PopulerDestination from "../components/home/populerDestination";
import HomeBanner from "../components/home/homeBanner";
import Footer from "../components/footer";
import HomeBlog from "../components/home/homeBlog";
import HomePopulerSearches from "../components/home/homePopulerSearches";
import HomeStories from "../components/home/homeStories";

export default function Home() {
  return (
    <div>
        <header className="bg-[#f3f4f4] rounded-br-[82px] rounded-bl-[82px]">
            <HeaderTop/>
            <HomeSlider/>
        </header>
        <section className="flex flex-col flex-nowrap relative">
            <SearchBar/>
            <SelectTreatment/>
            <PopulerDestination/>
            <HomeBanner/>
            <HomeStories/>
            <HomeBlog/>
            <HomePopulerSearches/>
        </section>
        <Footer/>
    </div>
  )
}
