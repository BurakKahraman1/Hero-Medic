import Footer from "../../components/footer";
import HeaderTop from "../../components/header-top";
import ProfileMenu from "../../components/profile/profileMenu";
import Image from "next/image";

export default function MyTreatments() {
  return (
    <div>
        <header>
            <HeaderTop/>
            <div className="bg-[#f5f6f9] py-10">
                <div className="container mx-auto flex justify-center lg:justify-start">
                    <span className="text-xl text-center lg:text-start lg:text-3xl font-semibold text-hmDark">Inbox</span>
                </div>
            </div>
        </header>
        <section className="container mx-auto mt-10">
            <div className="flex flex-col lg:flex-row mx-2 lg:mx-0">
                <ProfileMenu/>
                <div className="w-full lg:w-[71%] mt-5 lg:mt-0 flex flex-col">
                    <div className="flex flex-wrap flex-col lg:flex-row">
                        <div className=" flex-shrink-0 flex-grow-0 basis-auto lg:w-2/3">
                            <ul className="mb-8 float-left w-full pt-6 h-4/5">
                                <li className="mb-3 w-full float-left flex text-xs text-[#161e3e]">
                                    <div className="mr-5 shrink-0">
                                    <Image src="/img/profile/chat-text-user-02.png" width="42px" height="42px"/>
                                    </div>
                                    <div className="float-left text-left">
                                        <span>15 min ago</span>
                                        <div>
                                            <p className="mb-4 mt-1">Iste Minus Et. Non Necessitatibus Ut Est Est Id Amet. Officiis Sequi Dolorum Assumenda Ipsam Magnam Cum Possimus. Laudantium Nulla Amet Tempore Excepturi Id Expedita Dolorum Quisquam Deserunt. Odit Vel Sint Dolor Eos. Ea Blanditiis Animi. Quibusdam Unde Unde. Perspiciatis Vel Pariatur Qui. Deleniti Omnis Est Quae. Laboriosam Numquam Amet Aliquid.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3 w-full flex text-xs text-[#161e3e]">
                                   <div className="ml-5 order-last shrink-0">
                                    <Image className="rounded-[42px]" src="/img/profile/people-02.png" width="42px" height="42px"/>
                                    </div>
                                    <div className=" w-full text-right">
                                        <span>14 min ago</span>
                                        <div>
                                            <p className="mb-4 mt-1">Iste Minus Et. Non Necessitatibus Ut Est Est Id Amet. Officiis Sequi Dolorum Assumenda Ipsam Magnam Cum Possimus. Laudantium Nulla Amet Tempore Excepturi Id Expedita Dolorum Quisquam Deserunt. Odit Vel Sint Dolor Eos. Ea Blanditiis Animi. Quibusdam Unde Unde. Perspiciatis Vel Pariatur Qui. Deleniti Omnis Est Quae. Laboriosam Numquam Amet Aliquid.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3 w-full flex text-xs text-[#161e3e]">
                                   <div className="ml-5 order-last shrink-0">
                                    <Image className="rounded-[42px]"  src="/img/profile/people-02.png" width="42px" height="42px"/>
                                    </div>
                                    <div className=" w-full text-right">
                                        <span>14 min ago</span>
                                        <div className="mt-1">
                                        <Image  src="/img/profile/post6.jpg" width="243px" height="146px"/>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <form className="bg-[#f3f4f7] h-[72px] p-[15px] flex flex-col justify-center">
                                <div className="flex flex-wrap">

                                    <div className="flex-shrink-0 flex-grow-0 basis-auto w-[25%] md:w-1/5">
                                        <label htmlFor="bir" className="h-full inline-flex items-center mr-2 md:mr-[15px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.683" height="18.519" viewBox="0 0 17.683 18.519">
                                                <path id="attachment" d="M5.827,18.519A4.644,4.644,0,0,1,2.543,10.6L12.148.99a3.44,3.44,0,0,1,4.967.145A3.44,3.44,0,0,1,17.261,6.1L8.237,15.126a2.174,2.174,0,0,1-3.075-3.075l6.112-6.112a.528.528,0,0,1,.746.746L5.908,12.8A1.119,1.119,0,0,0,7.491,14.38l9.024-9.024a2.409,2.409,0,0,0-.146-3.474,2.409,2.409,0,0,0-3.474-.145L3.289,11.342a3.589,3.589,0,0,0,5.075,5.075l9.605-9.605a.528.528,0,1,1,.746.746L9.11,17.163A4.612,4.612,0,0,1,5.827,18.519Z" transform="translate(-1.187)" fill="#8a96ad"></path>
                                            </svg>
                                        </label>
                                        <label htmlFor="attachment-2" className="h-full inline-flex items-center pr-3 md:pr-[20px] border-r border-[#535c6e]">
                                        <svg id="Group_3351" data-name="Group 3351" xmlns="http://www.w3.org/2000/svg" width="22.139" height="17.559" viewBox="0 0 22.139 17.559">
                                                <path id="Path_3799" data-name="Path 3799" d="M21.758,6H.382A.382.382,0,0,0,0,6.382v16.8a.382.382,0,0,0,.382.382H21.758a.382.382,0,0,0,.382-.382V6.382A.382.382,0,0,0,21.758,6Zm-.382,16.8H.763V6.763H21.376Z" transform="translate(0 -6)" fill="#8a96ad"></path>
                                                <path id="Path_3800" data-name="Path 3800" d="M12.557,21.252a2.126,2.126,0,1,0-2.126-2.126A2.128,2.128,0,0,0,12.557,21.252Zm0-3.488a1.362,1.362,0,1,1-1.362,1.363A1.364,1.364,0,0,1,12.557,17.763Z" transform="translate(-5.944 -12.801)" fill="#8a96ad"></path>
                                                <path id="Path_3801" data-name="Path 3801" d="M6.381,31.78a.381.381,0,0,0,.252-.1L12.86,26.2l3.932,3.932a.382.382,0,1,0,.54-.54L15.5,27.76,19,23.922l4.3,3.94a.382.382,0,1,0,.516-.563l-4.581-4.2a.394.394,0,0,0-.275-.1.382.382,0,0,0-.265.124L14.957,27.22l-1.81-1.81a.382.382,0,0,0-.522-.017l-6.5,5.719a.382.382,0,0,0,.252.668Z" transform="translate(-3.671 -16.511)" fill="#8a96ad"></path>
                                            </svg>
                                        </label>
                                        <input className="hidden" id="bir" type="file"/>
                                        <input className="hidden" id="attachment-2" type="file"/>
                                    </div>
                                    <div className="flex-shrink-0 flex-grow-0 basis-auto w-[55%] md:w-3/5">
                                        <input type="text" className="h-full block w-full text-base font-normal leading-6 text-[#212529] appearance-none border-0 bg-[#f3f4f7] shadow-none outline-none"/>
                                    </div>

                                    <div className="flex-shrink-0 flex-grow-0 basis-auto w-1/5 text-right">
                                        <Image className=" rounded-[42px]" src="/img/profile/people-02.png" width="42px" height="42px"/>
                                    </div>

                                </div>
                            </form>
                        </div>
                            
                        <div className="flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-[30%] mt-8 lg:mt-0">
                            <ul className=" px-[10px] py-[15px] bg-[#f5f6f9] float-left lg:ml-7 w-full rounded-xl md:flex md:flex-wrap lg:block">
                                <li className=" basis-[50%] rounded-[11px] px-5 py-[10px] mb-[5px] float-left w-full cursor-pointer bg-transparent ease-in duration-300 hover:bg-[#ffffff] hover:shadow-md">
                                    <a href="#" className="flex flex-row w-full float-left text-[#2b2d42]">
                                    <div className="float-left mr-7">
                                    <Image className=" rounded-[84px]" src="/img/profile/profile8.jpg" width="84px" height="84px"/>
                                    </div>
                                    <div className="userdetail">
                                            <span className=" text-sm">Dr Ahmet Güler</span>
                                            <i className=" text-xs not-italic float-left w-full">General Surgery</i>
                                        </div>
                                    </a>
                                </li>
                                <li className="basis-[50%] rounded-[11px] px-5 py-[10px] mb-[5px] float-left w-full cursor-pointer bg-transparent ease-in duration-300 hover:bg-[#ffffff] hover:shadow-md">
                                    <a href="#" className="flex flex-row w-full float-left text-[#2b2d42]">
                                    <div className="float-left mr-7">
                                    <Image className=" rounded-[84px]" src="/img/profile/profile5.jpg" width="84px" height="84px"/>
                                    </div>
                                    <div className="userdetail">
                                            <span className=" text-sm">Dr Ahmet Güler</span>
                                            <i className=" text-xs not-italic float-left w-full">General Surgery</i>
                                        </div>
                                    </a>
                                </li>
                                <li className="basis-[50%] rounded-[11px] px-5 py-[10px] mb-[5px] float-left w-full cursor-pointer bg-transparent ease-in duration-300 hover:bg-[#ffffff] hover:shadow-md">
                                    <a href="#" className="flex flex-row w-full float-left text-[#2b2d42]">
                                    <div className="float-left mr-7">
                                    <Image className=" rounded-[84px]" src="/img/profile/profile4.jpg" width="84px" height="84px"/>
                                    </div>
                                    <div className="userdetail">
                                            <span className=" text-sm">Dr Ahmet Güler</span>
                                            <i className=" text-xs not-italic float-left w-full">General Surgery</i>
                                        </div>
                                    </a>
                                </li>
                                <li className="basis-[50%] rounded-[11px] px-5 py-[10px] mb-[5px] float-left w-full cursor-pointer bg-transparent ease-in duration-300 hover:bg-[#ffffff] hover:shadow-md">
                                    <a href="#" className="flex flex-row w-full float-left text-[#2b2d42]">
                                    <div className="float-left mr-7">
                                    <Image className=" rounded-[84px]" src="/img/profile/profile3.jpg" width="84px" height="84px"/>
                                    </div>
                                    <div className="userdetail">
                                            <span className=" text-sm">Dr Ahmet Güler</span>
                                            <i className=" text-xs not-italic float-left w-full">General Surgery</i>
                                        </div>
                                    </a>
                                </li>
                                <li className="basis-[50%] rounded-[11px] px-5 py-[10px] mb-[5px] float-left w-full cursor-pointer bg-transparent ease-in duration-300 hover:bg-[#ffffff] hover:shadow-md">
                                    <a href="#" className="flex flex-row w-full float-left text-[#2b2d42]">
                                    <div className="float-left mr-7">
                                    <Image className=" rounded-[84px]" src="/img/profile/profile2.jpg" width="84px" height="84px"/>
                                    </div>
                                    <div className="userdetail">
                                            <span className=" text-sm">Dr Ahmet Güler</span>
                                            <i className=" text-xs not-italic float-left w-full">General Surgery</i>
                                        </div>
                                    </a>
                                </li>
                                <li className="basis-[50%] rounded-[11px] px-5 py-[10px] mb-[5px] float-left w-full cursor-pointer bg-transparent ease-in duration-300 hover:bg-[#ffffff] hover:shadow-md">
                                    <a href="#" className="flex flex-row w-full float-left text-[#2b2d42]">
                                    <div className="float-left mr-7">
                                    <Image className=" rounded-[84px]" src="/img/profile/profile1.jpg" width="84px" height="84px"/>
                                    </div>
                                    <div className="userdetail">
                                            <span className=" text-sm">Dr Ahmet Güler</span>
                                            <i className=" text-xs not-italic float-left w-full">General Surgery</i>
                                        </div>
                                    </a>
                                </li>
                                <li className="basis-[50%] rounded-[11px] px-5 py-[10px] mb-[5px] float-left w-full cursor-pointer bg-transparent ease-in duration-300 hover:bg-[#ffffff] hover:shadow-md">
                                    <a href="#" className="flex flex-row w-full float-left text-[#2b2d42]">
                                    <div className="float-left mr-7">
                                    <Image className=" rounded-[84px]" src="/img/profile/profile6.jpg" width="84px" height="84px"/>
                                    </div>
                                    <div className="userdetail">
                                            <span className=" text-sm">Dr Ahmet Güler</span>
                                            <i className=" text-xs not-italic float-left w-full">General Surgery</i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
  }