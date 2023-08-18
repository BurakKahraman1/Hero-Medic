import styles from '../../styles/HomeSlide.module.css'
import FilterLink from "./mincomp/filterLink";

export default function SearchBar() {
    return (
        <div className="container lg:px-40 mx-auto">
            <div className={styles.searchBar}>
                <div className="flex flex-col">
                    <div className="lg:w-full pr-4 pl-4">
                        <div className="head">
                            <h2 className="flex items-center text-center justify-center font-bold text-hmDark text-4xl md:text-7xl">
                                Find
                                <span className="text-hmGreen text-px-20 w-[60px] mx-[5px]">THE RIGHT</span> Clinic
                            </h2>
                            <ul className="flex justify-center mt-5 flex-row">
                                <li className="mr-[15px] text-px-14 text-hmGray"><b className="text-hmDark">22</b> Countries</li>
                                <li className="mr-[15px] text-px-14 text-hmGray"><b className="text-hmDark">342</b> Cities</li>
                                <li className="mr-[15px] text-px-14 text-hmGray"><b className="text-hmDark">4262</b> Clinic</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-full pr-4 pl-4 w-full">
                        <form action="findnow.html" method="post" className="mt-[40px]">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex flex-row mb-5 lg:w-2/3 lg:mr-5 lg:mb-0 px-5 h-[70px]  items-center border border-hmsearchBorderColor rounded-[7px]">
                                    <span className="mr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
                                                <g id="searchmini" data-name="Group 3871"
                                                   transform="translate(-1182.295 -24.294)">
                                                    <circle id="Ellipse_188" data-name="Ellipse 188" cx="15.5" cy="15.5"
                                                            r="15.5" transform="translate(1182.295 24.294)" fill="#767986"/>
                                                    <g id="Search" transform="translate(1191.255 33.255)">
                                                        <path
                                                            id="Path_2"
                                                            data-name="Path 2"
                                                            d="M1.755,6.141A4.344,4.344,0,0,1,6.141,1.755a4.344,4.344,0,0,1,4.386,4.386,4.344,4.344,0,0,1-4.386,4.386A4.344,4.344,0,0,1,1.755,6.141Zm10.791,7.632a.868.868,0,0,0,1.228-1.228l-2.72-2.72a6.007,6.007,0,0,0,1.228-3.685A6.1,6.1,0,0,0,6.141,0,6.1,6.1,0,0,0,0,6.141a6.1,6.1,0,0,0,6.141,6.141,6.007,6.007,0,0,0,3.685-1.228Z"
                                                            fill="#fff"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                    </span>
                                    <input type="text" className="w-full text-hmGray text-px-15 focus-visible:outline-0" placeholder="Ex. Nose Job Surgery" aria-label="hospital"/>
                                </div>
                                <div className="flex flex-row mb-5 lg:w-1/3 lg:mr-5 lg:mb-0 px-5 h-[70px] items-center border border-hmsearchBorderColor rounded-[7px]">
                                    <span className="mr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.552" height="21.619" viewBox="0 0 16.552 21.619">
                                            <g id="headermarker" transform="translate(-60)">
                                                <g id="Group_7108" data-name="Group 7108" transform="translate(60)">
                                                    <path
                                                        id="Path_28107"
                                                        data-name="Path 28107"
                                                        d="M68.276,0a8.273,8.273,0,0,0-6.594,13.277l6.235,8.342h.719l6.235-8.342A8.276,8.276,0,0,0,68.276,0Zm0,11.021a2.745,2.745,0,1,1,2.745-2.745A2.748,2.748,0,0,1,68.276,11.021Z"
                                                        transform="translate(-60)"
                                                        fill="#767986"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <input type="text" className="w-full text-hmGray text-px-15 focus-visible:outline-0" placeholder="Select Destination" aria-label="hospital"/>
                                </div>
                                <div className="flex h-[70px]">
                                    <button className="w-[70px] flex justify-center items-center h-full rounded-[7px] bg-hmGreen">
                                        <svg width="22.827" height="22.827" viewBox="0 0 22.827 22.827">
                                            <defs>
                                                <clipPath id="clip-path">
                                                    <rect width="22.827" height="22.827" fill="none"/>
                                                </clipPath>
                                            </defs>
                                            <g id="headerbutton" clipPath="url(#clip-path)">
                                                <g id="Search-2" data-name="Search" transform="translate(0)">
                                                    <path
                                                        id="Path_2"
                                                        data-name="Path 2"
                                                        d="M2.853,9.987A7.064,7.064,0,0,1,9.987,2.853,7.064,7.064,0,0,1,17.12,9.987,7.064,7.064,0,0,1,9.987,17.12,7.064,7.064,0,0,1,2.853,9.987ZM20.4,22.4a1.412,1.412,0,0,0,2-2l-4.423-4.423a9.768,9.768,0,0,0,2-5.992A9.925,9.925,0,0,0,9.987,0,9.925,9.925,0,0,0,0,9.987a9.925,9.925,0,0,0,9.987,9.987,9.768,9.768,0,0,0,5.992-2Z"
                                                        transform="translate(0 0)"
                                                        fill="#fff"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-4">
                                <div className="lg:w-full lg:pr-4 lg:pl-4">
                                    <FilterLink title="Aesthetic" link="#" target="_blank"/>
                                    <FilterLink title="Cancer Treatment" link="#" target="_blank"/>
                                    <FilterLink title="Dental health" link="#" target="_blank"/>
                                    <FilterLink title="Eye health" link="#" target="_blank"/>
                                    <FilterLink title="Heart" link="#" target="_blank"/>
                                    <FilterLink title="Hair Transplant" link="#" target="_blank"/>
                                    <FilterLink title="Losing weight" link="#" target="_blank"/>
                                    <FilterLink title="Covid 19" link="#" target="_blank"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}