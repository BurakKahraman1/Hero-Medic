import Footer from "../../components/footer";
import HeaderTop from "../../components/header-top";
import ProfileMenu from "../../components/profile/profileMenu";
import Image from "next/image";
import { Menu, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default function ProfileHome() {
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
 
  return (
    <div>
      <header>
        <HeaderTop />
        <div className="bg-[#f5f6f9] py-10">
          <div className="container mx-auto flex justify-center lg:justify-start">
            <span className="text-xl text-center lg:text-start lg:text-3xl font-semibold text-hmDark">
              Support
            </span>
          </div>
        </div>
      </header>
      <section className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row mx-2 lg:mx-0">
          <ProfileMenu />
          <table className=" w-full lg:w-3/4 mt-5 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-col">
            <thead className="hidden lg:visible lg:flex lg:flex-row font-normal text-[#2b2d42] text-left text[15px] mx-3">
              <tr>
                <th className="lg:w-[73px]  lg:py-0">ID</th>
                <th className="lg:w-[243px]  lg:py-0">Title</th>
                <th className="lg:w-[143px]  lg:py-0">Answer</th>
                <th className="lg:w-[143px] lg:py-0">Create Date</th>
                <th className="lg:w-[143px]  lg:py-0">Status</th>
                <th className="lg:w-[123px]  lg:py-0">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" flex flex-col text-center md:basis-[45%] lg:basis-auto lg:text-left my-5 lg:my-3 lg:flex-row font-normal text-[#2b2d42] text[15px]  mx-3">
                <td className="lg:w-[73px] py-2 lg:py-0">
                  <span className="visible lg:hidden"> ID: </span> 0001
                </td>
                <td className="lg:w-[243px] py-2 lg:py-0">
                  Kargom Gelmedi Sorunu
                </td>
                <td className="lg:w-[143px] py-2 lg:py-0">
                  <span className="visible lg:hidden"> Answer: </span>{" "}
                  12.04.2020
                </td>
                <td className="lg:w-[143px] py-2 lg:py-0">12.04.2020</td>
                <td className="lg:w-[143px] py-2 lg:py-0">
                  <Image
                    src="/img/profile/active.svg"
                    width="16px"
                    height="16px"
                  />
                  <span className="ml-2">Active</span>
                </td>
                <td className="lg:w-[123px] py-2 lg:py-0">
                <Menu as="div" className="relative">
                    <Menu.Button className="flex flex-row items-center  text-sm rounded-full focus:outline-none">
                      <div
                        className=" border-[0.5px] border-[#6c727f] rounded-sm text-xs text-[#242424] pr-7 pl-2.5 leading-[26px] outline-none shadow-none"
                        
                      >
                        Select
                      </div>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-50 cursor-pointer origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                              
                                <a
                                  className={`${
                                    router.pathname == "/profile"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Detail
                                </a>
                             
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                              
                                <a
                                  className={`${
                                    router.pathname == "/settings"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Close
                                </a>
                        
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                             
                                <a
                                  className={`${
                                    router.pathname == "/log-out"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Active
                                </a>
                          
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>

              <tr className=" flex flex-col text-center md:basis-[45%] lg:basis-auto lg:text-left my-5 lg:my-3 lg:flex-row font-normal text-[#2b2d42] text[15px]  mx-3">
                <td className="lg:w-[73px] py-2 lg:py-0">
                  <span className="visible lg:hidden"> ID: </span>0002
                </td>
                <td className="lg:w-[243px] py-2 lg:py-0">
                  Kargoya ücreti iadesi
                </td>
                <td className="lg:w-[143px] py-2 lg:py-0">
                  <span className="visible lg:hidden"> Answer: </span>{" "}
                  12.04.2020
                </td>
                <td className="lg:w-[143px] py-2 lg:py-0">12.04.2020</td>
                <td className="lg:w-[143px] py-2 lg:py-0">
                  <Image
                    src="/img/profile/closed.svg"
                    width="16px"
                    height="16px"
                  />
                  <span className="ml-3">Closed</span>
                </td>
                <td className="lg:w-[123px] py-2 lg:py-0">
                <Menu as="div" className="relative">
                    <Menu.Button className="flex flex-row items-center  text-sm rounded-full focus:outline-none">
                      <div
                        className=" border-[0.5px] border-[#6c727f] rounded-sm text-xs text-[#242424] pr-7 pl-2.5 leading-[26px] outline-none shadow-none"
                      
                      >
                        Select
                      </div>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-50 cursor-pointer origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                              
                                <a
                                  className={`${
                                    router.pathname == "/profile"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Detail
                                </a>
                             
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                              
                                <a
                                  className={`${
                                    router.pathname == "/settings"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Close
                                </a>
                        
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                             
                                <a
                                  className={`${
                                    router.pathname == "/log-out"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Active
                                </a>
                          
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>

              <tr className=" flex flex-col text-center md:basis-[45%] lg:basis-auto lg:text-left my-5 lg:my-3 lg:flex-row font-normal text-[#2b2d42] text[15px]  mx-3">
                <td className="lg:w-[73px] py-2 lg:py-0">
                  <span className="visible lg:hidden"> ID: </span>0003
                </td>
                <td className="lg:w-[243px] py-2 lg:py-0">Shopping Problem</td>
                <td className="lg:w-[143px] py-2 lg:py-0">
                  <span className="visible lg:hidden"> Answer: </span>{" "}
                  12.04.2020
                </td>
                <td className="lg:w-[143px] py-2 lg:py-0">12.04.2020</td>
                <td className="lg:w-[143px] py-2 lg:py-0">
                  <Image
                    src="/img/profile/await.svg"
                    width="16px"
                    height="16px"
                  />
                  <span className="ml-3">Await</span>
                </td>
                <td className="lg:w-[123px] py-2 lg:py-0">
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex flex-row items-center  text-sm rounded-full focus:outline-none">
                      <div
                        className=" border-[0.5px] border-[#6c727f] rounded-sm text-xs text-[#242424] pr-7 pl-2.5 leading-[26px] outline-none shadow-none"
                     
                      >
                        Select
                      </div>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-50 cursor-pointer origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                              
                                <a
                                  className={`${
                                    router.pathname == "/profile"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Detail
                                </a>
                             
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                              
                                <a
                                  className={`${
                                    router.pathname == "/settings"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Close
                                </a>
                        
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block"
                              )}
                            >
                             
                                <a
                                  className={`${
                                    router.pathname == "/log-out"
                                      ? "bg-gray-100"
                                      : ""
                                  } rounded-lg block px-4 py-2 text-sm text-gray-700"`}
                                >
                                  Active
                                </a>
                          
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
}
