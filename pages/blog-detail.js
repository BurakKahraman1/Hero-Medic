import Footer from "../components/footer";
import HeaderTop from "../components/header-top";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const BlogDetail = () => {
    return (
        <section>
            <header className="bg-white">
                <HeaderTop />
                <div className="h-[525px] relative bg-[url('/img/blog-detail-01.png')] bg-no-repeat bg-cover bg-center bg-top">
                    <div className="container mx-auto relative h-[525px]">
                        <div className="absolute bottom-10 left-3 lg:left-0 lg:bottom-20 mx-auto bg-white flex flex-row px-3 lg:px-5 py-3 rounded items-center ">
                            <span className="text-sm text-hmGray mr-4">Share</span>
                            <div className="flex flex-row w-1/2 space-x-2">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.941" height="29.939" viewBox="0 0 29.941 29.939">
                                        <g id="_001-instagram" data-name="001-instagram" transform="translate(0 0)">
                                            <path
                                                id="Path_26929"
                                                data-name="Path 26929"
                                                d="M168.541,158.9h-6.354a3.29,3.29,0,0,0-3.287,3.287v6.354a3.29,3.29,0,0,0,3.287,3.287h6.354a3.29,3.29,0,0,0,3.287-3.287v-6.354A3.294,3.294,0,0,0,168.541,158.9Zm-3.18,10.712a4.252,4.252,0,1,1,4.252-4.252A4.259,4.259,0,0,1,165.361,169.612Zm4.465-8.031a.719.719,0,1,1,.719-.719A.716.716,0,0,1,169.825,161.581Z"
                                                transform="translate(-150.39 -150.391)"
                                                fill="#ff6200"
                                            />
                                            <ellipse id="Ellipse_275" data-name="Ellipse 275" cx="2.582" cy="2.582" rx="2.582" ry="2.582" transform="translate(12.361 17.521) rotate(-89.312)" fill="#ff6200" />
                                            <path
                                                id="Path_26930"
                                                data-name="Path 26930"
                                                d="M45.971,31A14.97,14.97,0,1,0,60.941,45.97,14.967,14.967,0,0,0,45.971,31Zm8.317,18.15a5.14,5.14,0,0,1-5.137,5.136H42.8A5.14,5.14,0,0,1,37.66,49.15V42.8A5.14,5.14,0,0,1,42.8,37.66h6.354A5.14,5.14,0,0,1,54.288,42.8Z"
                                                transform="translate(-31 -31)"
                                                fill="#ff3100"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.941" height="29.939" viewBox="0 0 29.941 29.939">
                                        <path
                                            id="_002-facebook"
                                            data-name="002-facebook"
                                            d="M45.971,31A14.97,14.97,0,1,0,60.941,45.97,14.967,14.967,0,0,0,45.971,31Zm4.3,9.388s-1.584-.013-1.983-.013a1.023,1.023,0,0,0-1,1.045v2.2h2.981l-.339,3H47.255v7.664H44.227V46.662H41.672V43.588h2.595v-2.9a3.421,3.421,0,0,1,3.047-3.041c.186,0,2.954.027,2.954.027Z"
                                            transform="translate(-31 -31)"
                                            fill="#4052a0"
                                        />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.941" height="29.939" viewBox="0 0 29.941 29.939">
                                        <path
                                            id="_003-twitter"
                                            data-name="003-twitter"
                                            d="M45.971,31A14.97,14.97,0,1,0,60.941,45.97,14.967,14.967,0,0,0,45.971,31Zm6.674,11.517a9.986,9.986,0,0,1-3.014,7.751c-4.9,4.651-11.977,1.031-11.977,1.031,3.4.04,4.837-1.391,4.837-1.391-2.795-.479-3.074-2.475-3.074-2.475.479.3,1.524,0,1.524,0C37.827,46,38.312,44.12,38.312,44.12a2.259,2.259,0,0,0,1.584.319,3.369,3.369,0,0,1-1.051-4.331c4.252,4.045,6.986,3.214,6.986,3.214-.193-2.848,1.49-3.952,3.307-4.012a3.145,3.145,0,0,1,2.409,1.011,3.94,3.94,0,0,0,2.282-.685c-.1.951-1.391,1.756-1.391,1.756a6.442,6.442,0,0,0,1.843-.306A3.106,3.106,0,0,1,52.644,42.517Z"
                                            transform="translate(-31 -31)"
                                            fill="#51caf7"
                                        />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.941" height="29.939" viewBox="0 0 29.941 29.939">
                                        <path
                                            id="_005-linkedin"
                                            data-name="005-linkedin"
                                            d="M45.971,31A14.97,14.97,0,1,0,60.941,45.97,14.967,14.967,0,0,0,45.971,31ZM41.732,54.286H37.753V43.162h3.979ZM39.743,41.632a1.989,1.989,0,1,1,1.989-1.989A1.991,1.991,0,0,1,39.743,41.632ZM54.195,54.286h-3.28s.02-6.487.033-6.686a1.837,1.837,0,0,0-1.856-1.836,2.023,2.023,0,0,0-2.2,2.109v6.414H43.782V43.162h3.074v1.544s.472-1.557,3.314-1.557c2.342,0,4.019.911,4.019,3.42C54.195,47.959,54.195,54.286,54.195,54.286Z"
                                            transform="translate(-31 -31)"
                                            fill="#0d85ba"
                                        />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.941" height="29.939" viewBox="0 0 29.941 29.939">
                                        <g id="_006-whatsapp" data-name="006-whatsapp" transform="translate(0 0)">
                                            <path
                                                id="Path_26931"
                                                data-name="Path 26931"
                                                d="M188.988,193.055c-.166.027-.273.193-.439.452a1.366,1.366,0,0,1-.758.705c-.206.06-.592.06-1.5-.592a14.024,14.024,0,0,1-1.75-1.53c-.918-.938-.931-1.171-.931-1.258a1.447,1.447,0,0,1,.559-.985,1.681,1.681,0,0,0,.386-.486,3.324,3.324,0,0,0-.5-1.264,3.254,3.254,0,0,0-.825-1.091.185.185,0,0,0-.067-.007,1.8,1.8,0,0,0-1.078.492,2.383,2.383,0,0,0-.459,2.568c.725,2.6,3.007,4.7,6.427,5.908a2.563,2.563,0,0,0,2.2-.013,2.648,2.648,0,0,0,1.065-1.843.119.119,0,0,0-.027-.093A4.275,4.275,0,0,0,188.988,193.055Z"
                                                transform="translate(-171.455 -176.621)"
                                                fill="#38bc33"
                                            />
                                            <path
                                                id="Path_26932"
                                                data-name="Path 26932"
                                                d="M45.971,31A14.97,14.97,0,1,0,60.941,45.97,14.967,14.967,0,0,0,45.971,31Zm0,23.286a8.25,8.25,0,0,1-4.87-1.577l-.113-.08-2.655,1.045.938-2.781-.073-.106a8.24,8.24,0,0,1-1.544-4.817,8.317,8.317,0,1,1,8.317,8.317Z"
                                                transform="translate(-31 -31)"
                                                fill="#38bc33"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.941" height="29.939" viewBox="0 0 29.941 29.939">
                                        <path
                                            id="Path_26934"
                                            data-name="Path 26934"
                                            d="M45.971,31A14.97,14.97,0,1,0,60.941,45.97,14.967,14.967,0,0,0,45.971,31Zm0,23.286a8.317,8.317,0,1,1,8.317-8.317A8.32,8.32,0,0,1,45.971,54.286Z"
                                            transform="translate(-31 -31)"
                                            fill="#e52c2c"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mx-auto mt-5 px-3 lg:px-0">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 pr-0 lg:pr-10 flex flex-col">
                        <h1 className="font-bold text-lg md:text-px-30 text-hmDark text-center lg:text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h1>
                        <div className="flex flex-row mt-4 justify-center lg:justify-start">
                            <Link href="/">
                                <a className="mr-5 font-bold text-px-15 text-hmDark hover:text-hmGreen transition ease-in">Blog</a>
                            </Link>
                            <span className="font-bold text-px-15 text-hmDark">07 March 2022</span>
                        </div>
                        <div className="flex flex-col text-hmDark mt-10">
                            <h4 className="text-px-15 md:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                            <p className="text-sm mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and moLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and moLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not</p>

                            <h4 className="text-px-15 md:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                            <p className="text-sm mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and moLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and moLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[600px] md:h-[300px] my-10">
                                <div className="relative">
                                    <Image src="/img/blog-detail-02.png" layout="fill" alt=""/>
                                </div>
                                <div className=" relative">
                                    <Image src="/img/blog-detail-03.png" layout="fill" alt=""/>
                                </div>
                            </div>
                            <h4 className="text-px-15 md:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                            <p className="text-sm mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and moLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and moLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className="flex flex-row mb-2 items-center transition ease-in rounded bg-[#f8f8f8] h-[55px]">
                            <svg className="mx-4 w-[18px] h-[18px] fill-hmGray" data-name="Group 1" xmlns="http://www.w3.org/2000/svg" width="18.676" height="18.676" viewBox="0 0 18.676 18.676">
                                <path id="Path_1" data-name="Path 1" d="M18.562,17.462l-5.425-5.425a7.408,7.408,0,1,0-1.1,1.1l5.425,5.425a.389.389,0,0,0,.55,0l.55-.55A.389.389,0,0,0,18.562,17.462ZM7.393,13.229a5.836,5.836,0,1,1,5.836-5.836A5.843,5.843,0,0,1,7.393,13.229Z" transform="translate(0 0)"></path>
                            </svg>
                            <input type="text" className="text-hmDark bg-transparent text-px-15 focus:outline-0 border-0 focus:ring-transparent pr-2 h-[55px] xl:h-full" id="keyword" placeholder="Search Keywords" autoComplete="off" />
                        </div>
                        <div className="flex flex-col mt-10">
                            <h3 className="font-bold text-px-30 mb-5">Latest Blog</h3>
                            <ul>
                                <li className="border-b pb-5 mb-5">
                                    <div className="flex flex-row">
                                        <div className="w-[170px] relative h-[123px] mr-5">
                                            <Image src="/img/blog-right-01.png"  alt="" layout="fill" />
                                        </div>
                                        <div className="w-2/4 flex flex-col">
                                            <Link href="/">
                                                <a><h6 className="text-md lg:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur </h6></a>
                                            </Link>
                                            <span>01 March 2022</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-b pb-5 mb-5">
                                    <div className="flex flex-row">
                                        <div className="w-[170px] relative h-[123px] mr-5">
                                            <Image src="/img/blog-right-01.png"  alt="" layout="fill" />
                                        </div>
                                        <div className="w-2/4 flex flex-col">
                                            <Link href="/">
                                                <a><h6 className="text-md lg:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur </h6></a>
                                            </Link>
                                            <span>01 March 2022</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-b pb-5 mb-5">
                                    <div className="flex flex-row">
                                        <div className="w-[170px] relative h-[123px] mr-5">
                                            <Image src="/img/blog-right-01.png"  alt="" layout="fill" />
                                        </div>
                                        <div className="w-2/4 flex flex-col">
                                            <Link href="/">
                                                <a><h6 className="text-md lg:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur </h6></a>
                                            </Link>
                                            <span>01 March 2022</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-10">
                            <h3 className="font-bold text-px-30 mb-5">Populer Blog</h3>
                            <ul>
                                <li className="border-b pb-5 mb-5">
                                    <div className="flex flex-row">
                                        <div className="w-[170px] relative h-[123px] mr-5">
                                            <Image src="/img/blog-right-01.png"  alt="" layout="fill" />
                                        </div>
                                        <div className="w-2/4 flex flex-col">
                                            <Link href="/">
                                                <a><h6 className="text-md lg:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur </h6></a>
                                            </Link>
                                            <span>01 March 2022</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-b pb-5 mb-5">
                                    <div className="flex flex-row">
                                        <div className="w-[170px] relative h-[123px] mr-5">
                                            <Image src="/img/blog-right-01.png"  alt="" layout="fill" />
                                        </div>
                                        <div className="w-2/4 flex flex-col">
                                            <Link href="/">
                                                <a><h6 className="text-md lg:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur </h6></a>
                                            </Link>
                                            <span>01 March 2022</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-b pb-5 mb-5">
                                    <div className="flex flex-row">
                                        <div className="w-[170px] relative h-[123px] mr-5">
                                            <Image src="/img/blog-right-01.png"  alt="" layout="fill" />
                                        </div>
                                        <div className="w-2/4 flex flex-col">
                                            <Link href="/">
                                                <a><h6 className="text-md lg:text-px-20 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur </h6></a>
                                            </Link>
                                            <span>01 March 2022</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default BlogDetail;
