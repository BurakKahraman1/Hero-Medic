import SearchLink from "./mincomp/searchLink";
import SectionTitle from "./sectionTitle";
export default function HomePopulerSearches() {
    return (
        <div className="flex flex-col my-10">
            <SectionTitle title="Popular Searches" desc="What People Are Most Looking For"/>

            <div className="container mx-auto mt-10 md:px-40">
                <div className="flex lg:flex-row flex-col">
                    <div className="w-full md:w-1/3 flex flex-col pl-2 md:pl-0">
                        <h2 className="text-hmDark text-px-20 font-bold mb-5">Hospitals</h2>
                        <div className="flex flex-col items-start">
                            <SearchLink title="Acı Badem Istanbul" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Istanbul Hospital Price Discount" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Dünya Göz Hastanesi Bursa" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Doctor Ahmet Gulmez Hospital" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Istanbul hospital Doruk Medical" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Skin Hospital Pelin Guzel" link="/" target="_blank" click="34.232" result="344"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col pl-2 md:pl-0">
                        <h2 className="text-hmDark text-px-20 font-bold mb-5">Clinics</h2>
                        <div className="flex flex-col items-start">
                            <SearchLink title="Eye Clinics Istanbul" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Ear treatment clinic Day" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Aesthetic Clinic" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Cuban Skin Clinic Price" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Hair Transplant Clinic istanbul" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Eye Laser Clinic" link="/" target="_blank" click="34.232" result="344"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col pl-2 md:pl-0">
                        <h2 className="text-hmDark text-px-20 font-bold mb-5">Doctors</h2>
                        <div className="flex flex-col items-start">
                            <SearchLink title="Nose Aesthetics Doctor Istanbul" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Spinal Cord Surgery Döcent" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Eye Surgery Doctor" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Doctor Ahmet Gulmez Istanbul" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Orthopedic Doctor Bursa" link="/" target="_blank" click="34.232" result="344"/>
                            <SearchLink title="Skin Doctor Pelin Guzel" link="/" target="_blank" click="34.232" result="344"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}