import Image from "next/image";
export default function HomeBanner() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="flex">
                    <div className="flex flex-col lg:flex-row bg-[#c4c4c7] w-full rounded-[15px]">
                        <div className="w-full lg:w-2/4 h-full justify-between flex flex-col self-start py-16 px-10">
                            <h3 className="text-px-20 mb-5 md:mb-0 md:text-5xl text-white font-bold lg:pr-[50px]">The Best Doctors In The <span className="underline text-hmGreen">World</span> Are Here</h3>
                            <p className="text-hmDark text-px-15 mb-5 md:mb-0 md:text-px-20">Discover great doctors all over the world. Learn about their abilities and experience. Health is too important to be left to chance.</p>
                            <a href="#" className="flex flex-row bg-hmDark rounded-[53px] self-start py-5 px-5 lg:px-10 lg:py-10 items-center text-white text-px-15 lg:text-px-20 font-bold shadow-discovery">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="mr-5">
                                    <g id="doctor-bag" transform="translate(-2 -2)">
                                        <path id="Path_28194" data-name="Path 28194" d="M14,2H10A3,3,0,0,0,7,5V6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9a3,3,0,0,0-3-3H17V5a3,3,0,0,0-3-3ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9ZM20,9V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H19A1,1,0,0,1,20,9Z" fill="#21b37e"></path>
                                        <path id="Path_28195" data-name="Path 28195" d="M13,11H11v2H9v2h2v2h2V15h2V13H13Z" fill="#21b37e"></path>
                                    </g>
                                </svg>
                                Discovery Doctors
                            </a>
                        </div>
                        <div className="w-full lg:w-2/4 flex lg:self-end">
                            <Image src="/img/smiling-medical-doctor-woman-with-stethoscope.png" width="678" height="555" alt="the best doctors"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mt-10">
                    <div className="w-full mb-5 lg:mb-0 lg:w-1/2 lg:mr-5">
                        <div className="rounded-[15px]">
                            <Image src="/img/home/nurse.png" width="758" height="350" className="rounded-[15px]" alt="why Hero-Medic"/>
                        </div>
                        <div className="bg-[#f3f4f4] rounded-br-[15px] rounded-bl-[15px] mt-[-20px] pt-[60px] px-10 min-h-[254px]">
                            <a href="" className="flex text-px-30 text-hmDark font-bold mb-5">
                                <h5>Why <span className="text-hmGreen">HERO-Medic</span></h5>
                            </a>
                            <p className="mb-4">Meet with Turkey’s largest healthcare group. Exclusive service, Latest technology treatment methods. At your service in 20 cities. HERO-Medic offers you the best price guarantee.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-[15px]">
                            <Image src="/img/home/howwork.png" width="758" height="350" className="rounded-[15px]" alt="how its work?"/>
                        </div>
                        <div className="bg-[#f3f4f4] rounded-br-[15px] rounded-bl-[15px] mt-[-20px] pt-[60px] px-10 min-h-[254px]">
                            <a href="" className="flex text-px-30 text-hmDark font-bold mb-5">
                                <h5>How <span>its Work?</span></h5>
                            </a>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}