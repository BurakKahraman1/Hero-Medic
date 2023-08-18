import FilterLink from "./mincomp/filterLink";
import SectionTitle from "./sectionTitle";
export default function PopulerDestination() {
    return (
        <div className="flex flex-col my-10">
            <SectionTitle title="Popular Destinations" desc="Browse countries and cities"/>
            <div className="container mx-auto mt-10 mb-5">
                <FilterLink title="Istanbul" link="#" target="_blank"/>
                <FilterLink title="Izmir" link="#" target="_blank"/>
                <FilterLink title="Ankara" link="#" target="_blank"/>
                <FilterLink title="Muğla" link="#" target="_blank"/>
                <FilterLink title="Antalya" link="#" target="_blank"/>
                <FilterLink title="Bursa" link="#" target="_blank"/>
                <FilterLink title="Bolu" link="#" target="_blank"/>
                <FilterLink title="Mersin" link="#" target="_blank"/>
                <FilterLink title="Trabzon" link="#" target="_blank"/>
                <FilterLink title="Giresun" link="#" target="_blank"/>
                <FilterLink title="Ordu" link="#" target="_blank"/>
                <FilterLink title="Rize" link="#" target="_blank"/>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col mb-5 lg:mb-0">
                    <div className="lg:w-[317px] h-[250px] lg:h-full bg-center bg-no-repeat bg-[url('/img/home/ankara.png')] rounded-[15px] mb-5 flex flex-col justify-end pl-[20px] pb-[20px]">
                        <a href="#">
                            <h3 className="text-center flex justify-center items-center w-[164px] h-[81px] bg-white text-px-30 text-hmDark font-bold rounded-[7px] relative">
                                Ankara
                                <span className="absolute top-[-20px] right-0 px-5  h-[41px] flex justify-center items-center bg-hmDark text-center text-white rounded-[28px] text-px-18">
                                    765 Clinic
                                </span>
                            </h3>
                        </a>
                    </div>
                    <div className="lg:w-[317px] h-[250px] lg:h-full bg-center bg-no-repeat bg-[url('/img/home/izmir.png')] rounded-[15px] flex flex-col justify-end pl-[20px] pb-[20px]">
                        <a href="#">
                            <h3 className="text-center flex justify-center items-center w-[164px] h-[81px] bg-white text-px-30 text-hmDark font-bold rounded-[7px] relative">Izmir <span className="absolute top-[-20px] right-0 px-5  h-[41px] flex justify-center items-center bg-hmDark text-center text-white rounded-[28px] text-px-18">765 Clinic</span></h3>
                        </a>
                    </div>
                </div>
                <div className="lg:w-[760px] h-[250px] lg:h-[537px] mb-5 lg:mb-0 bg-center bg-no-repeat bg-[url('/img/home/istanbul.png')] rounded-[15px] flex flex-col justify-end pl-[20px] pb-[20px]">
                    <a href="#">
                        <h3 className="text-center flex justify-center items-center w-[164px] h-[81px] bg-white text-px-30 text-hmDark font-bold rounded-[7px] relative">Istanbul <span className="absolute top-[-20px] right-0 px-5  h-[41px] flex justify-center items-center bg-hmGreen text-center text-white rounded-[28px] text-px-18">1783 Clinic</span></h3>
                    </a>
                </div>
                <div className="flex flex-col ">
                    <div className="lg:w-[428px] h-[250px] lg:h-full bg-center bg-no-repeat bg-[url('/img/home/bursa.png')] rounded-[15px] mb-5 flex flex-col justify-end pl-[20px] pb-[20px]">
                        <a href="#">
                            <h3 className="text-center flex justify-center items-center w-[164px] h-[81px] bg-white text-px-30 text-hmDark font-bold rounded-[7px] relative">Bursa <span className="absolute top-[-20px] right-0 px-5  h-[41px] flex justify-center items-center bg-hmDark text-center text-white rounded-[28px] text-px-18">345 Clinic</span></h3>
                        </a>
                    </div>
                    <div className="lg:w-[428px] h-[250px] lg:h-full bg-center bg-no-repeat bg-[url('/img/home/antalya.png')] rounded-[15px] flex flex-col justify-end pl-[20px] pb-[20px]">
                        <a href="#">
                            <h3 className="text-center flex justify-center items-center w-[164px] h-[81px] bg-white text-px-30 text-hmDark font-bold rounded-[7px] relative">Anlatya <span className="absolute top-[-20px] right-0 px-5  h-[41px] flex justify-center items-center bg-hmDark text-center text-white rounded-[28px] text-px-18">234 Clinic</span></h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}