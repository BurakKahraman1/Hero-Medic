import Footer from "../../components/footer";
import HeaderTop from "../../components/header-top";
import ProfileMenu from "../../components/profile/profileMenu";
import Image from "next/image";

export default function Favorites() {
  return (
      <div>
          <header>
              <HeaderTop/>
              <div className="bg-[#f5f6f9] py-10">
                  <div className="container mx-auto flex justify-center lg:justify-start">
                      <span className="text-xl text-center lg:text-start lg:text-3xl font-semibold text-hmDark">Favorites</span>
                  </div>
              </div>
          </header>
          <section className="container mx-auto mt-10">
              <div className="flex flex-col lg:flex-row mx-2 lg:mx-0">
                  <ProfileMenu/>
                  <div className="w-full lg:w-3/4 mt-5 lg:mt-0 flex flex-col">
                    <div className="flex flex-col mx-2 lg:flex-row my-0 lg:my-5">
                        <div className="basis-[46%] my-4 lg:my-0 mr-0 lg:mr-4">
                        <div className=" shadow-xl flex flex-row flex-nowrap rounded-[10px] mt-[10px] mr-5">
                                            <Image className="rounded-xl" src="/img/profile/favorite-hospital-01.png" width="145px" height="119px"/>
                                            <div className="w-full py-[15px] px-4">
                                                <h3 className="float-left font-semibold text-xs lg:text-sm h-[26px] leading-[26px]">Acıbadem Healtcare Group</h3>
                                                <button className=" float-right lg:mr-[10px] outline-none shadow-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.612" height="17.155" viewBox="0 0 20.612 17.155">
                                                    <g id="heart" transform="translate(0)">
                                                        <path className=" hover:fill-red-700" id="Path_48094" data-name="Path 48094" d="M18.956,7.378a5.755,5.755,0,0,0-8.13,0l-.521.52-.52-.52a5.754,5.754,0,0,0-8.129,0,5.814,5.814,0,0,0-.033,8.1c1.985,2.206,7.841,6.973,8.089,7.174a.906.906,0,0,0,.573.2h.02a.877.877,0,0,0,.593-.2c.248-.2,6.1-4.968,8.09-7.175A5.814,5.814,0,0,0,18.956,7.378Zm-1.32,6.878a97.023,97.023,0,0,1-7.331,6.525,96.816,96.816,0,0,1-7.329-6.525,4.018,4.018,0,0,1-.033-5.591,3.933,3.933,0,0,1,5.555,0L9.643,9.81a.88.88,0,0,0,.488.246.912.912,0,0,0,.837-.246l1.145-1.144a3.933,3.933,0,0,1,5.556,0A4.018,4.018,0,0,1,17.636,14.256Z" transform="translate(0 -5.697)" fill="#21b37e"></path>
                                                    </g>
                                                </svg>
                                                </button>
                                                <span className=" float-left w-full text-xs lg:text-[15px] text-[#2b2d42] mb-[10px]">Istanbul, Turkey</span>
                                                <span className="float-left text-xs lg:text-[15px] text-[#21b37e]">
                                            Verified
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.815" height="13.322" viewBox="0 0 17.815 13.322">
                                                <path id="check" d="M15.455,0,6.378,8.421l-3.839-4.1L0,6.7l6.2,6.618L17.815,2.558Zm0,0" fill="#21b37e"></path>
                                            </svg>
                                                </span>
                                                <span className=" float-left ml-14 text-xs lg:text-[15px] text-[#21b37e]">
                                            8/10
                                            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="18.783" height="18" viewBox="0 0 18.783 18">
                                                <path id="star-2" data-name="star" d="M18.734,7.3a1,1,0,0,0-.859-.686l-5.422-.492L10.31,1.1a1,1,0,0,0-1.837,0L6.33,6.119.907,6.612A1,1,0,0,0,.34,8.358l4.1,3.594L3.23,17.275a1,1,0,0,0,1.486,1.079l4.676-2.8,4.675,2.8a1,1,0,0,0,1.486-1.079l-1.209-5.323,4.1-3.594A1,1,0,0,0,18.734,7.3ZM9.481,15.5" transform="translate(0 -0.496)" fill="#21b37e"></path>
                                            </svg>
                                        </span>
                                            </div>
                                        </div>
                        </div>
                        <div className="basis-[46%] my-4 lg:my-0 mr-0 lg:mr-4">
                        <div className=" shadow-xl flex flex-row flex-nowrap rounded-[10px] mt-[10px] mr-5">
                                            <Image className="rounded-xl" src="/img/profile/favorite-hospital-02.png" width="145px" height="119px"/>
                                            <div className="w-full py-[15px] px-4">
                                                <h3 className="float-left font-semibold text-xs lg:text-sm h-[26px] leading-[26px]">Acıbadem Healtcare Group</h3>
                                                <button className=" float-right lg:mr-[10px] outline-none shadow-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.612" height="17.155" viewBox="0 0 20.612 17.155">
                                                    <g id="heart" transform="translate(0)">
                                                        <path className=" hover:fill-red-700" id="Path_48094" data-name="Path 48094" d="M18.956,7.378a5.755,5.755,0,0,0-8.13,0l-.521.52-.52-.52a5.754,5.754,0,0,0-8.129,0,5.814,5.814,0,0,0-.033,8.1c1.985,2.206,7.841,6.973,8.089,7.174a.906.906,0,0,0,.573.2h.02a.877.877,0,0,0,.593-.2c.248-.2,6.1-4.968,8.09-7.175A5.814,5.814,0,0,0,18.956,7.378Zm-1.32,6.878a97.023,97.023,0,0,1-7.331,6.525,96.816,96.816,0,0,1-7.329-6.525,4.018,4.018,0,0,1-.033-5.591,3.933,3.933,0,0,1,5.555,0L9.643,9.81a.88.88,0,0,0,.488.246.912.912,0,0,0,.837-.246l1.145-1.144a3.933,3.933,0,0,1,5.556,0A4.018,4.018,0,0,1,17.636,14.256Z" transform="translate(0 -5.697)" fill="#21b37e"></path>
                                                    </g>
                                                </svg>
                                                </button>
                                                <span className=" float-left w-full text-xs lg:text-[15px] text-[#2b2d42] mb-[10px]">Istanbul, Turkey</span>
                                                <span className="float-left text-xs lg:text-[15px] text-[#21b37e]">
                                            Verified
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.815" height="13.322" viewBox="0 0 17.815 13.322">
                                                <path id="check" d="M15.455,0,6.378,8.421l-3.839-4.1L0,6.7l6.2,6.618L17.815,2.558Zm0,0" fill="#21b37e"></path>
                                            </svg>
                                                </span>
                                                <span className=" float-left ml-14 text-xs lg:text-[15px] text-[#21b37e]">
                                            8/10
                                            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="18.783" height="18" viewBox="0 0 18.783 18">
                                                <path id="star-2" data-name="star" d="M18.734,7.3a1,1,0,0,0-.859-.686l-5.422-.492L10.31,1.1a1,1,0,0,0-1.837,0L6.33,6.119.907,6.612A1,1,0,0,0,.34,8.358l4.1,3.594L3.23,17.275a1,1,0,0,0,1.486,1.079l4.676-2.8,4.675,2.8a1,1,0,0,0,1.486-1.079l-1.209-5.323,4.1-3.594A1,1,0,0,0,18.734,7.3ZM9.481,15.5" transform="translate(0 -0.496)" fill="#21b37e"></path>
                                            </svg>
                                        </span>
                                            </div>
                                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-2 lg:flex-row my-0 lg:my-5">
                        <div className="basis-[46%] my-4 lg:my-0 mr-0 lg:mr-4">
                        <div className=" shadow-xl flex flex-row flex-nowrap rounded-[10px] mt-[10px] mr-5">
                                            <Image className="rounded-xl" src="/img/profile/favorite-hospital-03.png" width="145px" height="119px"/>
                                            <div className="w-full py-[15px] px-4">
                                                <h3 className="float-left font-semibold text-xs lg:text-sm h-[26px] leading-[26px]">Acıbadem Healtcare Group</h3>
                                                <button className=" float-right lg:mr-[10px] outline-none shadow-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.612" height="17.155" viewBox="0 0 20.612 17.155">
                                                    <g id="heart" transform="translate(0)">
                                                        <path className=" hover:fill-red-700" id="Path_48094" data-name="Path 48094" d="M18.956,7.378a5.755,5.755,0,0,0-8.13,0l-.521.52-.52-.52a5.754,5.754,0,0,0-8.129,0,5.814,5.814,0,0,0-.033,8.1c1.985,2.206,7.841,6.973,8.089,7.174a.906.906,0,0,0,.573.2h.02a.877.877,0,0,0,.593-.2c.248-.2,6.1-4.968,8.09-7.175A5.814,5.814,0,0,0,18.956,7.378Zm-1.32,6.878a97.023,97.023,0,0,1-7.331,6.525,96.816,96.816,0,0,1-7.329-6.525,4.018,4.018,0,0,1-.033-5.591,3.933,3.933,0,0,1,5.555,0L9.643,9.81a.88.88,0,0,0,.488.246.912.912,0,0,0,.837-.246l1.145-1.144a3.933,3.933,0,0,1,5.556,0A4.018,4.018,0,0,1,17.636,14.256Z" transform="translate(0 -5.697)" fill="#21b37e"></path>
                                                    </g>
                                                </svg>
                                                </button>
                                                <span className=" float-left w-full text-xs lg:text-[15px] text-[#2b2d42] mb-[10px]">Istanbul, Turkey</span>
                                                <span className="float-left text-xs lg:text-[15px] text-[#21b37e]">
                                            Verified
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.815" height="13.322" viewBox="0 0 17.815 13.322">
                                                <path id="check" d="M15.455,0,6.378,8.421l-3.839-4.1L0,6.7l6.2,6.618L17.815,2.558Zm0,0" fill="#21b37e"></path>
                                            </svg>
                                                </span>
                                                <span className=" float-left ml-14 text-xs lg:text-[15px] text-[#21b37e]">
                                            8/10
                                            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="18.783" height="18" viewBox="0 0 18.783 18">
                                                <path id="star-2" data-name="star" d="M18.734,7.3a1,1,0,0,0-.859-.686l-5.422-.492L10.31,1.1a1,1,0,0,0-1.837,0L6.33,6.119.907,6.612A1,1,0,0,0,.34,8.358l4.1,3.594L3.23,17.275a1,1,0,0,0,1.486,1.079l4.676-2.8,4.675,2.8a1,1,0,0,0,1.486-1.079l-1.209-5.323,4.1-3.594A1,1,0,0,0,18.734,7.3ZM9.481,15.5" transform="translate(0 -0.496)" fill="#21b37e"></path>
                                            </svg>
                                        </span>
                                            </div>
                                        </div>
                        </div>
                        <div className="basis-[46%] my-4 lg:my-0 mr-0 lg:mr-4">
                        <div className=" shadow-xl flex flex-row flex-nowrap rounded-[10px] mt-[10px] mr-5">
                                            <Image className="rounded-xl" src="/img/profile/favorite-hospital-04.png" width="145px" height="119px"/>
                                            <div className="w-full py-[15px] px-4">
                                                <h3 className="float-left font-semibold text-xs lg:text-sm h-[26px] leading-[26px]">Acıbadem Healtcare Group</h3>
                                                <button className=" float-right lg:mr-[10px] outline-none shadow-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.612" height="17.155" viewBox="0 0 20.612 17.155">
                                                    <g id="heart" transform="translate(0)">
                                                        <path className=" hover:fill-red-700" id="Path_48094" data-name="Path 48094" d="M18.956,7.378a5.755,5.755,0,0,0-8.13,0l-.521.52-.52-.52a5.754,5.754,0,0,0-8.129,0,5.814,5.814,0,0,0-.033,8.1c1.985,2.206,7.841,6.973,8.089,7.174a.906.906,0,0,0,.573.2h.02a.877.877,0,0,0,.593-.2c.248-.2,6.1-4.968,8.09-7.175A5.814,5.814,0,0,0,18.956,7.378Zm-1.32,6.878a97.023,97.023,0,0,1-7.331,6.525,96.816,96.816,0,0,1-7.329-6.525,4.018,4.018,0,0,1-.033-5.591,3.933,3.933,0,0,1,5.555,0L9.643,9.81a.88.88,0,0,0,.488.246.912.912,0,0,0,.837-.246l1.145-1.144a3.933,3.933,0,0,1,5.556,0A4.018,4.018,0,0,1,17.636,14.256Z" transform="translate(0 -5.697)" fill="#21b37e"></path>
                                                    </g>
                                                </svg>
                                                </button>
                                                <span className=" float-left w-full text-xs lg:text-[15px] text-[#2b2d42] mb-[10px]">Istanbul, Turkey</span>
                                                <span className="float-left text-xs lg:text-[15px] text-[#21b37e]">
                                            Verified
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.815" height="13.322" viewBox="0 0 17.815 13.322">
                                                <path id="check" d="M15.455,0,6.378,8.421l-3.839-4.1L0,6.7l6.2,6.618L17.815,2.558Zm0,0" fill="#21b37e"></path>
                                            </svg>
                                                </span>
                                                <span className=" float-left ml-14 text-xs lg:text-[15px] text-[#21b37e]">
                                            8/10
                                            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="18.783" height="18" viewBox="0 0 18.783 18">
                                                <path id="star-2" data-name="star" d="M18.734,7.3a1,1,0,0,0-.859-.686l-5.422-.492L10.31,1.1a1,1,0,0,0-1.837,0L6.33,6.119.907,6.612A1,1,0,0,0,.34,8.358l4.1,3.594L3.23,17.275a1,1,0,0,0,1.486,1.079l4.676-2.8,4.675,2.8a1,1,0,0,0,1.486-1.079l-1.209-5.323,4.1-3.594A1,1,0,0,0,18.734,7.3ZM9.481,15.5" transform="translate(0 -0.496)" fill="#21b37e"></path>
                                            </svg>
                                        </span>
                                            </div>
                                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-2 lg:flex-row my-0 lg:my-5">
                        <div className="basis-[46%] my-4 lg:my-0 mr-0 lg:mr-4">
                        <div className=" shadow-xl flex flex-row flex-nowrap rounded-[10px] mt-[10px] mr-5">
                                            <Image className="rounded-xl" src="/img/profile/favorite-hospital-05.png" width="145px" height="119px"/>
                                            <div className="w-full py-[15px] px-4">
                                                <h3 className="float-left font-semibold text-xs lg:text-sm h-[26px] leading-[26px]">Acıbadem Healtcare Group</h3>
                                                <button className=" float-right lg:mr-[10px] outline-none shadow-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.612" height="17.155" viewBox="0 0 20.612 17.155">
                                                    <g id="heart" transform="translate(0)">
                                                        <path className=" hover:fill-red-700" id="Path_48094" data-name="Path 48094" d="M18.956,7.378a5.755,5.755,0,0,0-8.13,0l-.521.52-.52-.52a5.754,5.754,0,0,0-8.129,0,5.814,5.814,0,0,0-.033,8.1c1.985,2.206,7.841,6.973,8.089,7.174a.906.906,0,0,0,.573.2h.02a.877.877,0,0,0,.593-.2c.248-.2,6.1-4.968,8.09-7.175A5.814,5.814,0,0,0,18.956,7.378Zm-1.32,6.878a97.023,97.023,0,0,1-7.331,6.525,96.816,96.816,0,0,1-7.329-6.525,4.018,4.018,0,0,1-.033-5.591,3.933,3.933,0,0,1,5.555,0L9.643,9.81a.88.88,0,0,0,.488.246.912.912,0,0,0,.837-.246l1.145-1.144a3.933,3.933,0,0,1,5.556,0A4.018,4.018,0,0,1,17.636,14.256Z" transform="translate(0 -5.697)" fill="#21b37e"></path>
                                                    </g>
                                                </svg>
                                                </button>
                                                <span className=" float-left w-full text-xs lg:text-[15px] text-[#2b2d42] mb-[10px]">Istanbul, Turkey</span>
                                                <span className="float-left text-xs lg:text-[15px] text-[#21b37e]">
                                            Verified
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.815" height="13.322" viewBox="0 0 17.815 13.322">
                                                <path id="check" d="M15.455,0,6.378,8.421l-3.839-4.1L0,6.7l6.2,6.618L17.815,2.558Zm0,0" fill="#21b37e"></path>
                                            </svg>
                                                </span>
                                                <span className=" float-left ml-14 text-xs lg:text-[15px] text-[#21b37e]">
                                            8/10
                                            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="18.783" height="18" viewBox="0 0 18.783 18">
                                                <path id="star-2" data-name="star" d="M18.734,7.3a1,1,0,0,0-.859-.686l-5.422-.492L10.31,1.1a1,1,0,0,0-1.837,0L6.33,6.119.907,6.612A1,1,0,0,0,.34,8.358l4.1,3.594L3.23,17.275a1,1,0,0,0,1.486,1.079l4.676-2.8,4.675,2.8a1,1,0,0,0,1.486-1.079l-1.209-5.323,4.1-3.594A1,1,0,0,0,18.734,7.3ZM9.481,15.5" transform="translate(0 -0.496)" fill="#21b37e"></path>
                                            </svg>
                                        </span>
                                            </div>
                                        </div>
                        </div>
                        <div className="basis-[46%] my-4 lg:my-0 mr-0 lg:mr-4">
                        <div className=" shadow-xl flex flex-row flex-nowrap rounded-[10px] mt-[10px] mr-5">
                                            <Image className="rounded-xl" src="/img/profile/favorite-hospital-06.png" width="145px" height="119px"/>
                                            <div className="w-full py-[15px] px-4">
                                                <h3 className="float-left font-semibold text-xs lg:text-sm h-[26px] leading-[26px]">Acıbadem Healtcare Group</h3>
                                                <button className=" float-right lg:mr-[10px] outline-none shadow-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.612" height="17.155" viewBox="0 0 20.612 17.155">
                                                    <g id="heart" transform="translate(0)">
                                                        <path className=" hover:fill-red-700" id="Path_48094" data-name="Path 48094" d="M18.956,7.378a5.755,5.755,0,0,0-8.13,0l-.521.52-.52-.52a5.754,5.754,0,0,0-8.129,0,5.814,5.814,0,0,0-.033,8.1c1.985,2.206,7.841,6.973,8.089,7.174a.906.906,0,0,0,.573.2h.02a.877.877,0,0,0,.593-.2c.248-.2,6.1-4.968,8.09-7.175A5.814,5.814,0,0,0,18.956,7.378Zm-1.32,6.878a97.023,97.023,0,0,1-7.331,6.525,96.816,96.816,0,0,1-7.329-6.525,4.018,4.018,0,0,1-.033-5.591,3.933,3.933,0,0,1,5.555,0L9.643,9.81a.88.88,0,0,0,.488.246.912.912,0,0,0,.837-.246l1.145-1.144a3.933,3.933,0,0,1,5.556,0A4.018,4.018,0,0,1,17.636,14.256Z" transform="translate(0 -5.697)" fill="#21b37e"></path>
                                                    </g>
                                                </svg>
                                                </button>
                                                <span className=" float-left w-full text-xs lg:text-[15px] text-[#2b2d42] mb-[10px]">Istanbul, Turkey</span>
                                                <span className="float-left text-xs lg:text-[15px] text-[#21b37e]">
                                            Verified
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.815" height="13.322" viewBox="0 0 17.815 13.322">
                                                <path id="check" d="M15.455,0,6.378,8.421l-3.839-4.1L0,6.7l6.2,6.618L17.815,2.558Zm0,0" fill="#21b37e"></path>
                                            </svg>
                                                </span>
                                                <span className=" float-left ml-14 text-xs lg:text-[15px] text-[#21b37e]">
                                            8/10
                                            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="18.783" height="18" viewBox="0 0 18.783 18">
                                                <path id="star-2" data-name="star" d="M18.734,7.3a1,1,0,0,0-.859-.686l-5.422-.492L10.31,1.1a1,1,0,0,0-1.837,0L6.33,6.119.907,6.612A1,1,0,0,0,.34,8.358l4.1,3.594L3.23,17.275a1,1,0,0,0,1.486,1.079l4.676-2.8,4.675,2.8a1,1,0,0,0,1.486-1.079l-1.209-5.323,4.1-3.594A1,1,0,0,0,18.734,7.3ZM9.481,15.5" transform="translate(0 -0.496)" fill="#21b37e"></path>
                                            </svg>
                                        </span>
                                            </div>
                                        </div>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
          <Footer/>
      </div>
  )
}  
//  <div className=" shadow-xl flex flex-row flex-nowrap rounded-[10px] mt-[10px] mr-5 w-1/2">
// <Image className="rounded-xl" src="/img/profile/favorite-hospital-01.png" width="145px" height="119px"/>
// <div className="w-full py-[15px]">
//     <h3 className="float-left font-semibold text-xs lg:text-sm h-[26px] leading-[26px]">Acıbadem Healtcare Group</h3>
//     <button className=" float-right lg:mr-[10px] outline-none shadow-none">
//     <svg xmlns="http://www.w3.org/2000/svg" width="20.612" height="17.155" viewBox="0 0 20.612 17.155">
//         <g id="heart" transform="translate(0)">
//             <path id="Path_48094" data-name="Path 48094" d="M18.956,7.378a5.755,5.755,0,0,0-8.13,0l-.521.52-.52-.52a5.754,5.754,0,0,0-8.129,0,5.814,5.814,0,0,0-.033,8.1c1.985,2.206,7.841,6.973,8.089,7.174a.906.906,0,0,0,.573.2h.02a.877.877,0,0,0,.593-.2c.248-.2,6.1-4.968,8.09-7.175A5.814,5.814,0,0,0,18.956,7.378Zm-1.32,6.878a97.023,97.023,0,0,1-7.331,6.525,96.816,96.816,0,0,1-7.329-6.525,4.018,4.018,0,0,1-.033-5.591,3.933,3.933,0,0,1,5.555,0L9.643,9.81a.88.88,0,0,0,.488.246.912.912,0,0,0,.837-.246l1.145-1.144a3.933,3.933,0,0,1,5.556,0A4.018,4.018,0,0,1,17.636,14.256Z" transform="translate(0 -5.697)" fill="#21b37e"></path>
//         </g>
//     </svg>
//     </button>
//     <span className="float-left w-full text-xs lg:text-[15px] text-[#2b2d42] mb-[10px]">Istanbul, Turkey</span>
//     <span className="float-left text-xs lg:text-[15px] text-[#21b37e]">
// Verified
// <svg xmlns="http://www.w3.org/2000/svg" width="17.815" height="13.322" viewBox="0 0 17.815 13.322">
//     <path id="check" d="M15.455,0,6.378,8.421l-3.839-4.1L0,6.7l6.2,6.618L17.815,2.558Zm0,0" fill="#21b37e"></path>
// </svg>
//     </span>
//     <span className="float-left ml-10 text-xs lg:text-[15px] text-[#21b37e]">
// 8/10
// <svg id="star" xmlns="http://www.w3.org/2000/svg" width="18.783" height="18" viewBox="0 0 18.783 18">
//     <path id="star-2" data-name="star" d="M18.734,7.3a1,1,0,0,0-.859-.686l-5.422-.492L10.31,1.1a1,1,0,0,0-1.837,0L6.33,6.119.907,6.612A1,1,0,0,0,.34,8.358l4.1,3.594L3.23,17.275a1,1,0,0,0,1.486,1.079l4.676-2.8,4.675,2.8a1,1,0,0,0,1.486-1.079l-1.209-5.323,4.1-3.594A1,1,0,0,0,18.734,7.3ZM9.481,15.5" transform="translate(0 -0.496)" fill="#21b37e"></path>
// </svg>
// </span>
// </div>
// </div>