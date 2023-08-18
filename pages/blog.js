import HeaderTop from "../components/header-top";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div>
        <header className="bg-white shadow-hmDefault">
            <HeaderTop/>
        </header>
        <section className="container mx-auto mt-10 px-3">
            <div className="flex flex-col">
                <div className="flex flex-col mb-5 md:flex-row">
                    <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 mr-5 mb-5 md:mb-0 text-hmDark">
                        <div className="w-full md:order-1 h-[317px]">
                            <Link href="/">
                                <a className="flex w-full h-full relative">
                                    <Image src="/img/blog-01.png" layout="fill" objectFit="cover" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="md:order-2 w-full border pt-5 px-5 pb-5 grid">
                            <div>
                                <Link href="/"><a><h2 className="text-px-25 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2></a></Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            </div>
                            <div className=" mt-5 grid grid-cols-2 self-end">
                                <div className="flex flex-row">
                                    <button className="flex flex-row mr-5">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.77" viewBox="0 0 20.137 17.77">
                                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">609</span>
                                    </button>
                                    <button className="flex flex-row">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="20.6" viewBox="0 0 20.137 20.6">
                                            <path id="Chat" d="M6.293,10.3a1.2,1.2,0,0,0,1.259,1.287h5.034A1.275,1.275,0,0,0,13.845,10.3a1.2,1.2,0,0,0-1.259-1.287H7.552A1.275,1.275,0,0,0,6.293,10.3ZM0,6.437A6.3,6.3,0,0,1,6.293,0h7.552a6.3,6.3,0,0,1,6.293,6.437V19.312A1.2,1.2,0,0,1,18.879,20.6H6.293A6.3,6.3,0,0,1,0,14.162Z" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">120</span>
                                    </button>
                                </div>
                                <ul className="lg:hidden flex flex-row justify-end items-center">
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" viewBox="0 0 16 16">
                                                <path id="Path_3" data-name="Path 3"
                                                      d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
                                                      fill="#848484" fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.978"
                                                 viewBox="0 0 16 12.978">
                                                <path id="Path_2" data-name="Path 2"
                                                      d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
                                                      transform="translate(-38 -2)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="8.356"
                                                 height="16" viewBox="0 0 8.356 16">
                                                <path id="Path_1" data-name="Path 1"
                                                      d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
                                                      transform="translate(-80)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16">
                                                <path id="Path_4" data-name="Path 4"
                                                      d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
                                                      fill="#848484"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full md:w-1/2 lg:w-3/5 text-hmDark">
                        <div className="w-full h-[317px] lg:h-full order-1 lg:order-2">
                            <Link href="/">
                                <a className="flex w-full h-full md:h-full relative">
                                    <Image src="/img/blog-02.png" layout="fill" objectFit="cover"  alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="order-2 lg:order-1 w-full border pt-5 lg:pt-16 px-5 pb-5 grid">
                            <div className="lg:mb-5">
                                <Link href="/"><a><h2 className="text-px-25 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2></a></Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            </div>
                            <div className=" mt-5 grid grid-cols-2 self-end">
                                <div className="flex flex-row">
                                    <button className="flex flex-row mr-5">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.77" viewBox="0 0 20.137 17.77">
                                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">609</span>
                                    </button>
                                    <button className="flex flex-row">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="20.6" viewBox="0 0 20.137 20.6">
                                            <path id="Chat" d="M6.293,10.3a1.2,1.2,0,0,0,1.259,1.287h5.034A1.275,1.275,0,0,0,13.845,10.3a1.2,1.2,0,0,0-1.259-1.287H7.552A1.275,1.275,0,0,0,6.293,10.3ZM0,6.437A6.3,6.3,0,0,1,6.293,0h7.552a6.3,6.3,0,0,1,6.293,6.437V19.312A1.2,1.2,0,0,1,18.879,20.6H6.293A6.3,6.3,0,0,1,0,14.162Z" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">120</span>
                                    </button>
                                </div>
                                <ul className="lg:hidden flex flex-row justify-end items-center">
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" viewBox="0 0 16 16">
                                                <path id="Path_3" data-name="Path 3"
                                                      d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
                                                      fill="#848484" fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.978"
                                                 viewBox="0 0 16 12.978">
                                                <path id="Path_2" data-name="Path 2"
                                                      d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
                                                      transform="translate(-38 -2)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="8.356"
                                                 height="16" viewBox="0 0 8.356 16">
                                                <path id="Path_1" data-name="Path 1"
                                                      d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
                                                      transform="translate(-80)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16">
                                                <path id="Path_4" data-name="Path 4"
                                                      d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
                                                      fill="#848484"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-5 md:flex-row">
                    <div className="flex flex-col lg:flex-row w-full md:w-1/2 lg:w-3/5  mr-5 mb-5 md:mb-0 text-hmDark">
                        <div className="w-full h-[317px] lg:h-full">
                            <Link href="/">
                                <a className="flex w-full h-full md:h-full relative">
                                    <Image src="/img/blog-02.png" layout="fill" objectFit="cover" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="w-full border pt-5 lg:pt-16 px-5 pb-5 grid">
                            <div className="lg:mb-5">
                                <Link href="/"><a><h2 className="text-px-25 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2></a></Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            </div>
                            <div className=" mt-5 grid grid-cols-2 self-end">
                                <div className="flex flex-row">
                                    <button className="flex flex-row mr-5">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.77" viewBox="0 0 20.137 17.77">
                                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">609</span>
                                    </button>
                                    <button className="flex flex-row">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="20.6" viewBox="0 0 20.137 20.6">
                                            <path id="Chat" d="M6.293,10.3a1.2,1.2,0,0,0,1.259,1.287h5.034A1.275,1.275,0,0,0,13.845,10.3a1.2,1.2,0,0,0-1.259-1.287H7.552A1.275,1.275,0,0,0,6.293,10.3ZM0,6.437A6.3,6.3,0,0,1,6.293,0h7.552a6.3,6.3,0,0,1,6.293,6.437V19.312A1.2,1.2,0,0,1,18.879,20.6H6.293A6.3,6.3,0,0,1,0,14.162Z" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">120</span>
                                    </button>
                                </div>
                                <ul className="lg:hidden flex flex-row justify-end items-center">
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" viewBox="0 0 16 16">
                                                <path id="Path_3" data-name="Path 3"
                                                      d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
                                                      fill="#848484" fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.978"
                                                 viewBox="0 0 16 12.978">
                                                <path id="Path_2" data-name="Path 2"
                                                      d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
                                                      transform="translate(-38 -2)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="8.356"
                                                 height="16" viewBox="0 0 8.356 16">
                                                <path id="Path_1" data-name="Path 1"
                                                      d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
                                                      transform="translate(-80)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16">
                                                <path id="Path_4" data-name="Path 4"
                                                      d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
                                                      fill="#848484"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 lg:w-2/5 text-hmDark">
                        <div className="w-full md:order-1 h-[317px]">
                            <Link href="/">
                                <a className="flex w-full h-full relative">
                                    <Image src="/img/blog-04.png" layout="fill" objectFit="cover" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="md:order-2 w-full border pt-5 px-5 pb-5 grid">
                            <div>
                                <Link href="/"><a><h2 className="text-px-25 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2></a></Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            </div>
                            <div className=" mt-5 grid grid-cols-2 self-end">
                                <div className="flex flex-row">
                                    <button className="flex flex-row mr-5">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.77" viewBox="0 0 20.137 17.77">
                                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">609</span>
                                    </button>
                                    <button className="flex flex-row">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="20.6" viewBox="0 0 20.137 20.6">
                                            <path id="Chat" d="M6.293,10.3a1.2,1.2,0,0,0,1.259,1.287h5.034A1.275,1.275,0,0,0,13.845,10.3a1.2,1.2,0,0,0-1.259-1.287H7.552A1.275,1.275,0,0,0,6.293,10.3ZM0,6.437A6.3,6.3,0,0,1,6.293,0h7.552a6.3,6.3,0,0,1,6.293,6.437V19.312A1.2,1.2,0,0,1,18.879,20.6H6.293A6.3,6.3,0,0,1,0,14.162Z" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">120</span>
                                    </button>
                                </div>
                                <ul className="lg:hidden flex flex-row justify-end items-center">
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" viewBox="0 0 16 16">
                                                <path id="Path_3" data-name="Path 3"
                                                      d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
                                                      fill="#848484" fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.978"
                                                 viewBox="0 0 16 12.978">
                                                <path id="Path_2" data-name="Path 2"
                                                      d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
                                                      transform="translate(-38 -2)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="8.356"
                                                 height="16" viewBox="0 0 8.356 16">
                                                <path id="Path_1" data-name="Path 1"
                                                      d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
                                                      transform="translate(-80)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16">
                                                <path id="Path_4" data-name="Path 4"
                                                      d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
                                                      fill="#848484"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 lg:flex-col lg:grid-cols-1">
                    <div className="flex flex-col lg:flex-row w-full lg:w-full mb-5 md:mb-0 text-hmDark">
                        <div className="w-full md:order-1">
                            <Link href="/">
                                <a className="flex w-full h-[330px] relative">
                                    <Image src="/img/blog-5.png" layout="fill" objectFit="cover" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="md:order-2 w-full border pt-5 px-5 pb-5 grid">
                            <div className="">
                                <Link href="/"><a><h2 className="text-px-25 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2></a></Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            </div>
                            <div className="mt-5 grid grid-cols-2 self-end">
                                <div className="flex flex-row">
                                    <button className="flex flex-row mr-5">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.77" viewBox="0 0 20.137 17.77">
                                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">609</span>
                                    </button>
                                    <button className="flex flex-row">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="20.6" viewBox="0 0 20.137 20.6">
                                            <path id="Chat" d="M6.293,10.3a1.2,1.2,0,0,0,1.259,1.287h5.034A1.275,1.275,0,0,0,13.845,10.3a1.2,1.2,0,0,0-1.259-1.287H7.552A1.275,1.275,0,0,0,6.293,10.3ZM0,6.437A6.3,6.3,0,0,1,6.293,0h7.552a6.3,6.3,0,0,1,6.293,6.437V19.312A1.2,1.2,0,0,1,18.879,20.6H6.293A6.3,6.3,0,0,1,0,14.162Z" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">120</span>
                                    </button>
                                </div>
                                <ul className="flex flex-row justify-end items-center">
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" viewBox="0 0 16 16">
                                                <path id="Path_3" data-name="Path 3"
                                                      d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
                                                      fill="#848484" fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.978"
                                                 viewBox="0 0 16 12.978">
                                                <path id="Path_2" data-name="Path 2"
                                                      d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
                                                      transform="translate(-38 -2)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="8.356"
                                                 height="16" viewBox="0 0 8.356 16">
                                                <path id="Path_1" data-name="Path 1"
                                                      d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
                                                      transform="translate(-80)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16">
                                                <path id="Path_4" data-name="Path 4"
                                                      d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
                                                      fill="#848484"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full lg:w-full mb-5 md:mb-0 text-hmDark">
                        <div className="w-full md:order-1">
                            <Link href="/">
                                <a className="flex w-full h-[330px] relative">
                                    <Image src="/img/blog-6.png" layout="fill" objectFit="cover" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="md:order-2 w-full border pt-5 px-5 pb-5 grid">
                            <div className="">
                                <Link href="/"><a><h2 className="text-px-25 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2></a></Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            </div>
                            <div className="mt-5 grid grid-cols-2 self-end">
                                <div className="flex flex-row">
                                    <button className="flex flex-row mr-5">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.77" viewBox="0 0 20.137 17.77">
                                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">609</span>
                                    </button>
                                    <button className="flex flex-row">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="20.6" viewBox="0 0 20.137 20.6">
                                            <path id="Chat" d="M6.293,10.3a1.2,1.2,0,0,0,1.259,1.287h5.034A1.275,1.275,0,0,0,13.845,10.3a1.2,1.2,0,0,0-1.259-1.287H7.552A1.275,1.275,0,0,0,6.293,10.3ZM0,6.437A6.3,6.3,0,0,1,6.293,0h7.552a6.3,6.3,0,0,1,6.293,6.437V19.312A1.2,1.2,0,0,1,18.879,20.6H6.293A6.3,6.3,0,0,1,0,14.162Z" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">120</span>
                                    </button>
                                </div>
                                <ul className="flex flex-row justify-end items-center">
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" viewBox="0 0 16 16">
                                                <path id="Path_3" data-name="Path 3"
                                                      d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
                                                      fill="#848484" fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.978"
                                                 viewBox="0 0 16 12.978">
                                                <path id="Path_2" data-name="Path 2"
                                                      d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
                                                      transform="translate(-38 -2)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="8.356"
                                                 height="16" viewBox="0 0 8.356 16">
                                                <path id="Path_1" data-name="Path 1"
                                                      d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
                                                      transform="translate(-80)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16">
                                                <path id="Path_4" data-name="Path 4"
                                                      d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
                                                      fill="#848484"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full lg:w-full mb-5 md:mb-0 text-hmDark">
                        <div className="w-full md:order-1">
                            <Link href="/">
                                <a className="flex w-full h-[330px] relative">
                                    <Image src="/img/blog-07.png" layout="fill" objectFit="cover" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="md:order-2 w-full border pt-5 px-5 pb-5 grid">
                            <div className="">
                                <Link href="/"><a><h2 className="text-px-25 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2></a></Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            </div>
                            <div className="mt-5 grid grid-cols-2 self-end">
                                <div className="flex flex-row">
                                    <button className="flex flex-row mr-5">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.77" viewBox="0 0 20.137 17.77">
                                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">609</span>
                                    </button>
                                    <button className="flex flex-row">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="20.6" viewBox="0 0 20.137 20.6">
                                            <path id="Chat" d="M6.293,10.3a1.2,1.2,0,0,0,1.259,1.287h5.034A1.275,1.275,0,0,0,13.845,10.3a1.2,1.2,0,0,0-1.259-1.287H7.552A1.275,1.275,0,0,0,6.293,10.3ZM0,6.437A6.3,6.3,0,0,1,6.293,0h7.552a6.3,6.3,0,0,1,6.293,6.437V19.312A1.2,1.2,0,0,1,18.879,20.6H6.293A6.3,6.3,0,0,1,0,14.162Z" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">120</span>
                                    </button>
                                </div>
                                <ul className="flex flex-row justify-end items-center">
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" viewBox="0 0 16 16">
                                                <path id="Path_3" data-name="Path 3"
                                                      d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
                                                      fill="#848484" fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.978"
                                                 viewBox="0 0 16 12.978">
                                                <path id="Path_2" data-name="Path 2"
                                                      d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
                                                      transform="translate(-38 -2)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="8.356"
                                                 height="16" viewBox="0 0 8.356 16">
                                                <path id="Path_1" data-name="Path 1"
                                                      d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
                                                      transform="translate(-80)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16">
                                                <path id="Path_4" data-name="Path 4"
                                                      d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
                                                      fill="#848484"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full lg:w-full mb-5 md:mb-0 text-hmDark">
                        <div className="w-full md:order-1">
                            <Link href="/">
                                <a className="flex w-full h-[330px] relative">
                                    <Image src="/img/blog-08.png" layout="fill" objectFit="cover" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="md:order-2 w-full border pt-5 px-5 pb-5 grid">
                            <div className="">
                                <Link href="/"><a><h2 className="text-px-25 font-bold mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2></a></Link>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                            </div>
                            <div className="mt-5 grid grid-cols-2 self-end">
                                <div className="flex flex-row">
                                    <button className="flex flex-row mr-5">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.77" viewBox="0 0 20.137 17.77">
                                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">609</span>
                                    </button>
                                    <button className="flex flex-row">
                                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="20.137" height="20.6" viewBox="0 0 20.137 20.6">
                                            <path id="Chat" d="M6.293,10.3a1.2,1.2,0,0,0,1.259,1.287h5.034A1.275,1.275,0,0,0,13.845,10.3a1.2,1.2,0,0,0-1.259-1.287H7.552A1.275,1.275,0,0,0,6.293,10.3ZM0,6.437A6.3,6.3,0,0,1,6.293,0h7.552a6.3,6.3,0,0,1,6.293,6.437V19.312A1.2,1.2,0,0,1,18.879,20.6H6.293A6.3,6.3,0,0,1,0,14.162Z" fill="#9d9d9d" fillRule="evenodd"></path>
                                        </svg>
                                        <span className="font-bold text-[#9d9d9d]">120</span>
                                    </button>
                                </div>
                                <ul className="flex flex-row justify-end items-center">
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="16"
                                                 height="16" viewBox="0 0 16 16">
                                                <path id="Path_3" data-name="Path 3"
                                                      d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978"
                                                      fill="#848484" fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.978"
                                                 viewBox="0 0 16 12.978">
                                                <path id="Path_2" data-name="Path 2"
                                                      d="M43.067,14.978A9.25,9.25,0,0,0,52.4,5.644V5.2A7.225,7.225,0,0,0,54,3.511a7.379,7.379,0,0,1-1.867.533,3.458,3.458,0,0,0,1.422-1.778,8.153,8.153,0,0,1-2.044.8A3.175,3.175,0,0,0,49.111,2a3.34,3.34,0,0,0-3.289,3.289A1.733,1.733,0,0,0,45.911,6a9.19,9.19,0,0,1-6.756-3.467,3.4,3.4,0,0,0-.444,1.689,3.532,3.532,0,0,0,1.422,2.756,3,3,0,0,1-1.511-.444h0a3.249,3.249,0,0,0,2.667,3.2,2.74,2.74,0,0,1-.889.089,1.513,1.513,0,0,1-.622-.089,3.367,3.367,0,0,0,3.111,2.311A6.711,6.711,0,0,1,38.8,13.467a2.461,2.461,0,0,1-.8-.089,8.39,8.39,0,0,0,5.067,1.6"
                                                      transform="translate(-38 -2)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="#">
                                            <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="8.356"
                                                 height="16" viewBox="0 0 8.356 16">
                                                <path id="Path_1" data-name="Path 1"
                                                      d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z"
                                                      transform="translate(-80)" fill="#848484"
                                                      fillRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16">
                                                <path id="Path_4" data-name="Path 4"
                                                      d="M2.4,2.4A7.263,7.263,0,0,1,8,0a7.263,7.263,0,0,1,5.6,2.4A7.263,7.263,0,0,1,16,8a7.263,7.263,0,0,1-2.4,5.6A7.263,7.263,0,0,1,8,16a7.263,7.263,0,0,1-5.6-2.4A7.984,7.984,0,0,1,0,8,7.263,7.263,0,0,1,2.4,2.4Zm6.667,12a3.276,3.276,0,0,0,2-1.2A5.824,5.824,0,0,0,12,10.4a2.208,2.208,0,0,0-.667-1.6A2.347,2.347,0,0,0,9.6,8H8.267a3.893,3.893,0,0,1-1.2-.267,1.21,1.21,0,0,1-.4-.933.693.693,0,0,1,.267-.533A1.011,1.011,0,0,1,7.467,6a.91.91,0,0,1,.667.4c.267.133.4.267.533.267A.8.8,0,0,0,9.2,6.533.8.8,0,0,0,9.333,6a2.122,2.122,0,0,0-.667-1.333,5.515,5.515,0,0,0,.667-2.533.287.287,0,0,0-.267-.267A4.122,4.122,0,0,0,8,1.6,6.67,6.67,0,0,0,4.533,2.667a3.357,3.357,0,0,0-1.2,2.667A3.414,3.414,0,0,0,4.4,7.867,3.643,3.643,0,0,0,6.933,8.933h0v.533A1.712,1.712,0,0,0,7.467,10.8a1.942,1.942,0,0,0,1.2.8V14c0,.133,0,.133.133.267S8.933,14.4,9.067,14.4Z"
                                                      fill="#848484"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
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
