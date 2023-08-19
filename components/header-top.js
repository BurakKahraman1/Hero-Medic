import React, { Fragment, useState } from 'react'
import {Combobox, Dialog, Popover, Transition} from '@headlessui/react'
import { MenuIcon, XIcon, } from '@heroicons/react/outline'
import {ChevronDownIcon, SelectorIcon} from '@heroicons/react/solid'
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/headerTop.module.scss";

const menu = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Blog',
        href: '/blog',
    },
    {
        name: 'Blog Detail',
        href: '/blog-detail'
    },
    {
        name: 'Online Appointment',
        href: '/profile/online-appointment',
    },
    {
        name: 'Inbox',
        href: '/profile/inbox',
    },
    {
        name: 'Profile information',
        href: '/profile/profile-information',
    },
    {
        name: 'Support',
        href: '/profile/support',
    },
   
]

const allpages = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Blog',
        href: '/blog',
    },
    {
        name: 'Blog Detail',
        href: '/blog-detail'
    },
    {
        name: 'Favorites',
        href: '/profile/favorites',
    },
    {
        name: 'Online Appointment',
        href: '/profile/online-appointment',
    },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderTop() {
    const country = [
        { id: 0, name: 'Select a Country',img:'',phoneCode: 'Select country',countryCode:'' },
        { id: 1, name: 'Turkey',img:'/img/flags/tr.png',phoneCode: '+90',countryCode:'TR' },
        { id: 2, name: 'Germany',img:'/img/flags/de.png',phoneCode: '+49',countryCode:'DE' },
   ]
    const citys = [
        { id: 0, name: 'Select a City' },
        { id: 1, name: 'Istanbul' },
        { id: 2, name: 'Ankara' },
        { id: 3, name: 'İzmir' },
        { id: 4, name: 'Muğla' },
        { id: 5, name: 'Antalya' },
        { id: 6, name: 'Bursa' },
    ]
    const [selected, setSelected] = useState(country[0])
    const [selectedPhone, setPhoneSelected] = useState(country[0])
    const [query, setQuery] = useState('')

    const filteredCountry =
        query === ''
            ? country
            : country.filter((countries) =>
                countries.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    const [citySelected, setCitySelected] = useState(citys[0])
    const [cityQuery, setCityQuery] = useState('')

    const filteredCity =
        cityQuery === ''
            ? citys
            : citys.filter((citys) =>
                citys.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(setCityQuery.toLowerCase().replace(/\s+/g, ''))
            )
    let [loginModalOpen,setLoginIsOpen] = useState(false)
    function closeLoginModal() {setLoginIsOpen(false)}
    function openLoginModal() {setLoginIsOpen(true)}

    let [registerModalOpen,setRegisterIsOpen] = useState(false)
    function closeRegisterModal() {setRegisterIsOpen(false)}
    function openRegisterModal() {setRegisterIsOpen(true)}
    return (
        <Popover className={styles.headerTop+" relative px-5 lg:px-0 z-40"}>
            <div className="container mx-auto">
                <div className="flex  lg:flex-row justify-between items-center py-6 lg:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link href="/" className="normal-case text-xl">
                        <h2 className="flex items-center text-center justify-center font-bold text-hmGreen text-4xl md:text-3xl">
                            HERO
                            <h2 className="flex items-center text-center justify-center font-bold text-hmDark text-4xl md:text-3xl">
                             -
                        </h2>
                        Medic
                        </h2>
                        </Link>
                    </div>
                    <div className="mr-2 -my-2 lg:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 items-center justify-center inline-flex  text-hmDark hover:text-hmGreen hover:bg-gray-100 focus:outline-none focus:ring-0 ">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden lg:flex space-x-10">
                        <Link href="/"><a className="font-px-15 font-bold text-hmDark hover:text-hmGreen transition ease-in">Home</a></Link>
                        <Link href="/"><a className="font-px-15 font-bold text-hmDark hover:text-hmGreen transition ease-in">Find Now</a></Link>          
                        <Link href="/"><a className="font-px-15 font-bold text-hmDark hover:text-hmGreen transition ease-in">How its Work</a></Link>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-hmGreen' : 'text-hmDark',
                                            'inline-flex items-center font-px-15 font-bold text-hmDark hover:text-hmGreen focus:outline-none focus:ring-0 focus:shadow-none ring-0 shadow-none '
                                        )}
                                    >
                                        <span>All Pages</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-2 bg-white px-5 py-6">
                                                    {allpages.map((item) => (
                                                        <Link key={item.name} href={item.href}>
                                                            <a className="p-1 flex items-start rounded-lg hover:bg-gray-50" >
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>
                    <div className=" flex items-center justify-end md:flex-1 lg:w-0">
                        <button type="button" onClick={openRegisterModal} className="hidden lg:block h-[40px] w-[98px] mr-[10px] text-px-15 text-white font-bold rounded-[7px] hover:bg-hmDark bg-hmGreen transition ease-in">
                            Register
                        </button>
                        <button type="button" onClick={openLoginModal} className="hidden lg:block h-[40px] w-[98px] text-px-15 text-white font-bold rounded-[7px] bg-hmDark hover:bg-hmGreen transition ease-in" >
                            Login
                        </button>
                        <Transition appear show={loginModalOpen} as={Fragment}>
                            <Dialog
                                as="div"
                                className="relative z-40"
                                onClose={closeLoginModal}
                            >
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/30 backdrop-blur" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto mt-4">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <div>
                                                    <div className="flex flex-row justify-end flex-nowrap">
                                                        <button
                                                            onClick={closeLoginModal}
                                                            type="button"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        >
                                                            <svg
                                                                id="close_1_"
                                                                data-name="close"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="28.969"
                                                                height="28.969"
                                                                viewBox="0 0 28.969 28.969"
                                                            >
                                                                <g id="_x33_">
                                                                    <path
                                                                        id="Path_25611"
                                                                        data-name="Path 25611"
                                                                        d="M21.727,2.414a4.833,4.833,0,0,1,4.828,4.828V21.727a4.833,4.833,0,0,1-4.828,4.828H7.242a4.833,4.833,0,0,1-4.828-4.828V7.242A4.833,4.833,0,0,1,7.242,2.414Zm0-2.414H7.242A7.242,7.242,0,0,0,0,7.242V21.727a7.242,7.242,0,0,0,7.242,7.242H21.727a7.242,7.242,0,0,0,7.242-7.242V7.242A7.242,7.242,0,0,0,21.727,0Z"
                                                                    />
                                                                </g>
                                                                <path
                                                                    id="Path_25612"
                                                                    data-name="Path 25612"
                                                                    d="M14.646,12.939,18.06,9.526a1.207,1.207,0,0,0-1.707-1.707l-3.414,3.414L9.524,7.818A1.207,1.207,0,0,0,7.818,9.524l3.415,3.415L7.819,16.353A1.207,1.207,0,1,0,9.526,18.06l3.414-3.414,3.414,3.414a1.207,1.207,0,0,0,1.707-1.707Z"
                                                                    transform="translate(1.545 1.545)"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <h1 className=" text-center pr-4 text-[#2b2d42] text-xl lg:text-3xl font-bold">
                                                            LOGIN
                                                        </h1>
                                                    </div>
                                                    <div className="flex flex-col mx-2 ">
                                                        <form className=" mt-10 box-border flex flex-col">
                                                            <div className="flex flex-col mb-5">
                                                                <label className="mb-2">Mail Adress</label>
                                                                <div className="flex flex-row w-full items-center border rounded hover:border-hmDark transition ease-in">
                                                                    <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="17.803" height="14.242" viewBox="0 0 17.803 14.242">
                                                                        <g id="Layer_3" data-name="Layer 3" transform="translate(-1 -4)">
                                                                            <path id="Path_48063" data-name="Path 48063" d="M16.614,4H3.189A2.192,2.192,0,0,0,1,6.189v9.864a2.192,2.192,0,0,0,2.189,2.189H16.614A2.192,2.192,0,0,0,18.8,16.053V6.189A2.192,2.192,0,0,0,16.614,4ZM3.189,5.187H16.614a1,1,0,0,1,1,1v.454L9.9,11.6,2.187,6.643V6.189a1,1,0,0,1,1-1ZM16.614,17.055H3.189a1,1,0,0,1-1-1v-8L9.58,12.807a.593.593,0,0,0,.642,0l7.393-4.753v8a1,1,0,0,1-1,1Z" transform="translate(0 0)" fill="#cbcbcb"></path>
                                                                        </g>
                                                                    </svg>
                                                                    <input type="email" className="w-full rounded focus:outline-0 h-[40px]" placeholder="name@example.com"/>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col mb-5">
                                                                <label className="mb-2">Password</label>
                                                                <div className="flex flex-row w-full items-center border rounded hover:border-hmDark transition ease-in">
                                                                    <input type="password" className="pl-3 w-full rounded focus:outline-0 h-[40px]" placeholder="********"/>
                                                                </div>
                                                            </div>
                                                            <div className="my-4">
                                                                <a
                                                                    className="text-black text-[13px] float-right flex"
                                                                    href="#"
                                                                >
                                                                    Forgot Password
                                                                    <svg
                                                                        className="ml-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="19.274"
                                                                        height="26.5"
                                                                        viewBox="0 0 19.274 26.5"
                                                                    >
                                                                        <g
                                                                            id="lock_1_"
                                                                            data-name="locklogin"
                                                                            transform="translate(-69.248)"
                                                                        >
                                                                            <path
                                                                                id="Path_48066"
                                                                                data-name="Path 48066"
                                                                                d="M78.885,26.5A9.628,9.628,0,0,0,84.908,9.353V6.023a6.023,6.023,0,1,0-12.045,0V9.353A9.628,9.628,0,0,0,78.885,26.5ZM75.271,6.023a3.614,3.614,0,0,1,7.227,0V7.937a9.558,9.558,0,0,0-7.227,0V6.023Zm3.614,3.614a7.227,7.227,0,1,1-7.227,7.227,7.227,7.227,0,0,1,7.227-7.227Z"
                                                                                fill="#cbcbcb"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_48067"
                                                                                data-name="Path 48067"
                                                                                d="M208.985,258.238v2.743a1.2,1.2,0,1,0,2.409,0v-2.743a2.409,2.409,0,1,0-2.409,0Z"
                                                                                transform="translate(-131.304 -240.503)"
                                                                                fill="#cbcbcb"
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <button className="bg-[#21b37e] rounded-[10px] w-full font-bold text-lg h-[55px] text-[#fff]">
                                                                    LOGIN
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="mt-12">
                                                        <div className="m-8">
                                                            <div className="flex flex-row justify-evenly lg:flex-col">
                                                                <div className=" mb-2 lg:mb-4">
                                                                    <a
                                                                        href="#"
                                                                        className="text-center w-full float-left border border-[#6c727f] lg:rounded-lg rounded-3xl px-5 py-2 lg:p-5 lg:pr-10 text-[15px] text-[#2b2d42] font-bold mb-2.5"
                                                                    >
                                                                        <div className="lg:float-left w-full lg:w-[40px]">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="20.601"
                                                                                height="20.601"
                                                                                viewBox="0 0 20.601 20.601"
                                                                            >
                                                                                <g
                                                                                    id="google"
                                                                                    transform="translate(-23 -21)"
                                                                                >
                                                                                    <path
                                                                                        id="Path_25631"
                                                                                        data-name="Path 25631"
                                                                                        d="M275.774,213.9h-8.4a.67.67,0,0,0-.671.671v2.687a.67.67,0,0,0,.671.671H272.1a6.309,6.309,0,0,1-2.717,3.185l2.016,3.494a10.1,10.1,0,0,0,5.148-8.832,6.961,6.961,0,0,0-.115-1.319.679.679,0,0,0-.662-.556Z"
                                                                                        transform="translate(-232.949 -184.39)"
                                                                                        fill="#167ee6"
                                                                                    ></path>
                                                                                    <path
                                                                                        id="Path_25632"
                                                                                        data-name="Path 25632"
                                                                                        d="M63.316,328.637a6.268,6.268,0,0,1-5.422-3.137L54.4,327.512a10.291,10.291,0,0,0,14.068,3.776v0l-2.016-3.494A6.215,6.215,0,0,1,63.316,328.637Z"
                                                                                        transform="translate(-30.015 -291.067)"
                                                                                        fill="#12b347"
                                                                                    ></path>
                                                                                    <path
                                                                                        id="Path_25633"
                                                                                        data-name="Path 25633"
                                                                                        d="M261.648,380.9v0l-2.016-3.494a6.232,6.232,0,0,1-3.132.847v4.032A10.255,10.255,0,0,0,261.648,380.9Z"
                                                                                        transform="translate(-223.199 -340.678)"
                                                                                        fill="#0f993e"
                                                                                    ></path>
                                                                                    <path
                                                                                        id="Path_25634"
                                                                                        data-name="Path 25634"
                                                                                        d="M27.032,143.044a6.231,6.231,0,0,1,.847-3.132L24.385,137.9a10.243,10.243,0,0,0,0,10.287l3.494-2.012a6.187,6.187,0,0,1-.847-3.132Z"
                                                                                        transform="translate(0 -111.743)"
                                                                                        fill="#ffd500"
                                                                                    ></path>
                                                                                    <path
                                                                                        id="Path_25635"
                                                                                        data-name="Path 25635"
                                                                                        d="M63.316,25.032a6.242,6.242,0,0,1,3.979,1.429.67.67,0,0,0,.9-.04l1.9-1.9a.676.676,0,0,0-.04-.988A10.267,10.267,0,0,0,54.4,26.157l3.494,2.012A6.268,6.268,0,0,1,63.316,25.032Z"
                                                                                        transform="translate(-30.015)"
                                                                                        fill="#ff4b26"
                                                                                    ></path>
                                                                                    <path
                                                                                        id="Path_25636"
                                                                                        data-name="Path 25636"
                                                                                        d="M260.479,26.461a.67.67,0,0,0,.9-.04l1.9-1.9a.676.676,0,0,0-.04-.988A10.236,10.236,0,0,0,256.5,21v4.032A6.218,6.218,0,0,1,260.479,26.461Z"
                                                                                        transform="translate(-223.199)"
                                                                                        fill="#d93f21"
                                                                                    ></path>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        <span className="hidden lg:block">
                                                  Login to Google
                                                </span>
                                                                    </a>
                                                                </div>
                                                                <div className=" mb-2 lg:mb-4">
                                                                    <a
                                                                        href="#"
                                                                        className="text-center w-full float-left border border-[#6c727f] lg:rounded-lg rounded-3xl px-6 py-2 lg:p-5 lg:pr-10 text-[15px] text-[#2b2d42] font-bold mb-2.5"
                                                                    >
                                                                        <div className="lg:float-left w-full lg:w-[40px]">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.18"
                                                                                height="20.679"
                                                                                viewBox="0 0 11.18 20.679"
                                                                            >
                                                                                <g
                                                                                    id="_x30_1._Facebook"
                                                                                    transform="translate(-28.374 -9.999)"
                                                                                >
                                                                                    <path
                                                                                        id="Icon_11_"
                                                                                        d="M31.492,21.674H28.923c-.4,0-.549-.146-.549-.552q0-1.568,0-3.135c0-.4.153-.555.552-.555h2.566c0-.072,0-1.58,0-2.275a5.673,5.673,0,0,1,.706-2.911,4.285,4.285,0,0,1,2.308-1.918A5.706,5.706,0,0,1,36.484,10q1.271,0,2.542,0c.364,0,.526.162.527.528q0,1.475,0,2.949c0,.371-.155.52-.528.524-.695.007-1.39,0-2.083.031A.944.944,0,0,0,35.872,15.1c-.017.767-.007,1.535-.007,2.33h2.992c.423,0,.568.146.568.571q0,1.559,0,3.118c0,.42-.136.553-.562.554H35.857v8.412c0,.448-.141.591-.584.591H32.036c-.391,0-.544-.152-.544-.543C31.492,27.4,31.492,21.77,31.492,21.674Z"
                                                                                        fill="#3d6ad6"
                                                                                    ></path>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        <span className="hidden lg:block">
                                                  Login to Facebook
                                                </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="my-2 lg:my-3">
                                                                <p className="text-center text-[#1c212d] lg:text-[15px] text-[12px]">
                                                                    Don’t have an account?
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    href="#"
                                                                    className="w-full float-left h-[50px] bg-[#2b2d42] text-center rounded-lg font-bold text-white mt-5 p-3"
                                                                >
                                                                    REGISTER NOW
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                        <Transition appear show={registerModalOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-40" onClose={closeRegisterModal} >
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/30 backdrop-blur" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto mt-4">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <div>
                                                    <div className="flex flex-row justify-end flex-nowrap">
                                                        <button
                                                            onClick={closeRegisterModal}
                                                            type="button"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        >
                                                            <svg
                                                                id="close_1_"
                                                                data-name="close"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="28.969"
                                                                height="28.969"
                                                                viewBox="0 0 28.969 28.969"
                                                            >
                                                                <g id="_x33_">
                                                                    <path
                                                                        id="Path_25611"
                                                                        data-name="Path 25611"
                                                                        d="M21.727,2.414a4.833,4.833,0,0,1,4.828,4.828V21.727a4.833,4.833,0,0,1-4.828,4.828H7.242a4.833,4.833,0,0,1-4.828-4.828V7.242A4.833,4.833,0,0,1,7.242,2.414Zm0-2.414H7.242A7.242,7.242,0,0,0,0,7.242V21.727a7.242,7.242,0,0,0,7.242,7.242H21.727a7.242,7.242,0,0,0,7.242-7.242V7.242A7.242,7.242,0,0,0,21.727,0Z"
                                                                    />
                                                                </g>
                                                                <path
                                                                    id="Path_25612"
                                                                    data-name="Path 25612"
                                                                    d="M14.646,12.939,18.06,9.526a1.207,1.207,0,0,0-1.707-1.707l-3.414,3.414L9.524,7.818A1.207,1.207,0,0,0,7.818,9.524l3.415,3.415L7.819,16.353A1.207,1.207,0,1,0,9.526,18.06l3.414-3.414,3.414,3.414a1.207,1.207,0,0,0,1.707-1.707Z"
                                                                    transform="translate(1.545 1.545)"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <h1 className=" text-center pr-4 text-[#2b2d42] text-xl lg:text-3xl font-bold">
                                                            REGISTER
                                                        </h1>
                                                    </div>
                                                    <div className="flex flex-col mx-0">
                                                        <form className="mt-4 lg:mt-10 flex flex-col">
                                                            <div className="flex flex-col lg:flex-row mb-5">
                                                                <div className="flex flex-col mb-3 lg:mb-0 lg:mr-5">
                                                                    <label className="mb-2">Name</label>
                                                                    <input type="text" className="w-full border rounded focus:outline-0 h-[40px] px-3 hover:border-hmDark  transition ease-in"/>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <label className="mb-2">Surname</label>
                                                                    <input type="text" className="w-full border rounded focus:outline-0 h-[40px] px-3 hover:border-hmDark  transition ease-in"/>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col lg:flex-row mb-5">
                                                                <div className="flex flex-col mb-3 lg:mb-0 lg:mr-5">
                                                                    <label className="mb-2">Country</label>
                                                                    <div className="flex flex-row w-full items-center border rounded hover:border-hmDark transition ease-in h-[40px]">
                                                                        <Combobox value={selected} onChange={setSelected}>
                                                                            <div className="relative mr-4">
                                                                                <div className="relative w-full cursor-default overflow-hidden  text-left focus:outline-0 ">
                                                                                    <Combobox.Input
                                                                                        className="w-full pl-4 bg-transparent text-sm text-hmsearchBorderColor focus:outline-0 h-[55px] xl:h-full"
                                                                                        displayValue={(country) => country.name}
                                                                                        onChange={(event) => setQuery(event.target.value)}
                                                                                    />
                                                                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center">
                                                                                        <SelectorIcon
                                                                                            className="h-5 w-5 text-gray-400"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </Combobox.Button>
                                                                                </div>
                                                                                <Transition
                                                                                    as={Fragment}
                                                                                    leave="transition ease-in duration-100"
                                                                                    leaveFrom="opacity-100"
                                                                                    leaveTo="opacity-0"
                                                                                    afterLeave={() => setQuery('')}
                                                                                >
                                                                                    <Combobox.Options className="absolute mt-1 z-40 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                        {filteredCountry.length === 0 && query !== '' ? (
                                                                                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                                                Nothing found.
                                                                                            </div>
                                                                                        ) : (
                                                                                            filteredCountry.map((country) => (
                                                                                                <Combobox.Option
                                                                                                    key={country.id}
                                                                                                    className={({ active }) =>
                                                                                                        `relative cursor-default select-none py-2 pl-2 pr-4 ${
                                                                                                            active ? 'bg-hmGreen text-white' : 'text-gray-900'
                                                                                                        }`
                                                                                                    }
                                                                                                    value={country}
                                                                                                >
                                                                                                    {({ selected, active }) => (
                                                                                                        <>
                                                                    <span
                                                                        className={`flex flex-row items-center ${
                                                                            selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                    >
                                                                        {country.img != '' &&
                                                                            <div className="">
                                                                                <div className="w-[32px] h-[32px] relative mr-5">
                                                                                    <Image src={country.img} layout="fill" objectFit="cover"/>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        {country.name}
                                                                    </span>
                                                                                                        </>
                                                                                                    )}
                                                                                                </Combobox.Option>
                                                                                            ))
                                                                                        )}
                                                                                    </Combobox.Options>
                                                                                </Transition>
                                                                            </div>
                                                                        </Combobox>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <label className="mb-2">City</label>
                                                                    <div className="flex flex-row w-full items-center border rounded hover:border-hmDark transition ease-in h-[40px]">
                                                                        <Combobox value={citySelected} onChange={setCitySelected}>
                                                                            <div className="relative mr-4">
                                                                                <div className="relative w-full cursor-default overflow-hidden  text-left focus:outline-0 ">
                                                                                    <Combobox.Input
                                                                                        className="w-full pl-4 bg-transparent text-sm text-hmsearchBorderColor focus:outline-0 h-[55px] xl:h-full"
                                                                                        displayValue={(city) => city.name}
                                                                                        onChange={(event) => setQuery(event.target.value)}
                                                                                    />
                                                                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center">
                                                                                        <SelectorIcon
                                                                                            className="h-5 w-5 text-gray-400"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </Combobox.Button>
                                                                                </div>
                                                                                <Transition
                                                                                    as={Fragment}
                                                                                    leave="transition ease-in duration-100"
                                                                                    leaveFrom="opacity-100"
                                                                                    leaveTo="opacity-0"
                                                                                    afterLeave={() => setQuery('')}
                                                                                >
                                                                                    <Combobox.Options className="absolute mt-1 z-40 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                        {filteredCity.length === 0 && cityQuery !== '' ? (
                                                                                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                                                Nothing found.
                                                                                            </div>
                                                                                        ) : (
                                                                                            filteredCity.map((city) => (
                                                                                                <Combobox.Option
                                                                                                    key={city.id}
                                                                                                    className={({ active }) =>
                                                                                                        `relative cursor-default select-none py-2 pl-2 pr-4 ${
                                                                                                            active ? 'bg-hmGreen text-white' : 'text-gray-900'
                                                                                                        }`
                                                                                                    }
                                                                                                    value={city}
                                                                                                >
                                                                                                    {({ selected, active }) => (
                                                                                                        <>
                                                                    <span
                                                                        className={`flex flex-row items-center ${
                                                                            selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                    >
                                                                        {city.name}
                                                                    </span>
                                                                                                        </>
                                                                                                    )}
                                                                                                </Combobox.Option>
                                                                                            ))
                                                                                        )}
                                                                                    </Combobox.Options>
                                                                                </Transition>
                                                                            </div>
                                                                        </Combobox>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col mb-5">
                                                                <label className="mb-2">Mail Adress</label>
                                                                <div className="flex flex-row w-full items-center border rounded hover:border-hmDark transition ease-in">
                                                                    <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="17.803" height="14.242" viewBox="0 0 17.803 14.242">
                                                                        <g id="Layer_3" data-name="Layer 3" transform="translate(-1 -4)">
                                                                            <path id="Path_48063" data-name="Path 48063" d="M16.614,4H3.189A2.192,2.192,0,0,0,1,6.189v9.864a2.192,2.192,0,0,0,2.189,2.189H16.614A2.192,2.192,0,0,0,18.8,16.053V6.189A2.192,2.192,0,0,0,16.614,4ZM3.189,5.187H16.614a1,1,0,0,1,1,1v.454L9.9,11.6,2.187,6.643V6.189a1,1,0,0,1,1-1ZM16.614,17.055H3.189a1,1,0,0,1-1-1v-8L9.58,12.807a.593.593,0,0,0,.642,0l7.393-4.753v8a1,1,0,0,1-1,1Z" transform="translate(0 0)" fill="#cbcbcb"></path>
                                                                        </g>
                                                                    </svg>
                                                                    <input type="email" className="w-full rounded focus:outline-0 h-[40px]" placeholder="name@example.com"/>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col lg:flex-row mb-5 justify-end ">
                                                                <div className="w-full lg:w-2/6 flex flex-col mr-5 ">
                                                                    <label className="mb-2">Phone Number</label>
                                                                    <div className="w-full inline-block items-center border rounded hover:border-hmDark transition ease-in h-[40px] relative ">
                                                                        <Combobox value={selectedPhone} onChange={setPhoneSelected}>
                                                                            <div className="flex flex-row justify-center h-full pr-2 ">
                                                                                <div className="w-full cursor-default overflow-hidden text-left focus:outline-0 relative">
                                                                                    <Combobox.Input
                                                                                        className="pl-4 bg-transparent text-sm text-hmsearchBorderColor focus:outline-0 h-full lg:h-[55px] xl:h-full"
                                                                                        displayValue={(country) =>country.phoneCode}
                                                                                        onChange={(event) => setQuery(event.target.value)}
                                                                                    />
                                                                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center">
                                                                                        <SelectorIcon
                                                                                            className="h-5 w-5 text-gray-400"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </Combobox.Button>
                                                                                </div>
                                                                                <Transition
                                                                                    as={Fragment}
                                                                                    leave="transition ease-in duration-100"
                                                                                    leaveFrom="opacity-100"
                                                                                    leaveTo="opacity-0"
                                                                                    afterLeave={() => setQuery('')}
                                                                                >
                                                                                    <Combobox.Options className="absolute mt-10 left-0 z-40 max-h-60 w-2xl overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                                        {filteredCountry.length === 0 && query !== '' ? (
                                                                                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                                                Nothing found.
                                                                                            </div>
                                                                                        ) : (
                                                                                            filteredCountry.map((country) => (
                                                                                                <Combobox.Option
                                                                                                    key={country.id}
                                                                                                    className={({ active }) =>
                                                                                                        `relative cursor-default select-none py-2 pl-2 pr-4 ${
                                                                                                            active ? 'bg-hmGreen text-white' : 'text-gray-900'
                                                                                                        }`
                                                                                                    }
                                                                                                    value={country}
                                                                                                >
                                                                                                    {({ selected, active }) => (
                                                                                                        <>
                                                                    <span
                                                                        className={`flex flex-row items-center ${
                                                                            selected ? 'font-medium' : 'font-normal'
                                                                        }`}
                                                                    >
                                                                        {country.img != '' &&
                                                                            <div className="">
                                                                                <div className="w-[32px] h-[32px] relative mr-5">
                                                                                    <Image src={country.img} layout="fill" objectFit="cover"/>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        {country.name}
                                                                    </span>
                                                                                                        </>
                                                                                                    )}
                                                                                                </Combobox.Option>
                                                                                            ))
                                                                                        )}
                                                                                    </Combobox.Options>
                                                                                </Transition>
                                                                            </div>
                                                                        </Combobox>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full lg:w-4/6 flex flex-col">
                                                                    <label className="mb-2 min-h-[24px]"></label>
                                                                    <div className="flex flex-row w-full items-center border rounded hover:border-hmDark transition ease-in">
                                                                        <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="14.233" height="22.773" viewBox="0 0 14.233 22.773">
                                                                            <path id="hand-phone" d="M14.135,22.773H24.1a2.135,2.135,0,0,0,2.135-2.135V2.135A2.135,2.135,0,0,0,24.1,0H14.135A2.135,2.135,0,0,0,12,2.135v18.5A2.135,2.135,0,0,0,14.135,22.773ZM17.01,1.423h4.213v.356H17.01Zm-3.587.712a.712.712,0,0,1,.712-.712h1.452V2.491A.712.712,0,0,0,16.3,3.2h5.636a.712.712,0,0,0,.712-.712V1.423H24.1a.712.712,0,0,1,.712.712v18.5a.712.712,0,0,1-.712.712H14.135a.712.712,0,0,1-.712-.712Z" transform="translate(-12)" fill="#cbcbcb"></path>
                                                                        </svg>
                                                                        <input type="text" className="w-full rounded focus:outline-0 h-[40px]"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col lg:flex-row mb-5">
                                                                <div className="flex flex-col mb-3 lg:mb-0 lg:mr-5">
                                                                    <label className="mb-2">Password</label>
                                                                    <div className="flex flex-row w-full items-center border rounded hover:border-hmDark transition ease-in">
                                                                        <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 13.803 19.324">
                                                                            <g id="_12-Lock" data-name="12-Lock" transform="translate(-6 -2)">
                                                                                <path id="Path_48064" data-name="Path 48064" d="M17.732,8.9V6.631A4.638,4.638,0,0,0,13.1,2h-.4A4.638,4.638,0,0,0,8.07,6.631V8.9A2.07,2.07,0,0,0,6,10.972V17.39a3.941,3.941,0,0,0,3.934,3.934h5.935A3.941,3.941,0,0,0,19.8,17.39V10.972A2.07,2.07,0,0,0,17.732,8.9ZM9.451,6.631A3.251,3.251,0,0,1,12.7,3.38h.4a3.251,3.251,0,0,1,3.251,3.251V8.9h-6.9ZM18.422,17.39a2.553,2.553,0,0,1-2.553,2.553H9.934A2.553,2.553,0,0,1,7.38,17.39V10.972a.69.69,0,0,1,.69-.69h9.662a.69.69,0,0,1,.69.69Z" fill="#cbcbcb"></path>
                                                                                <path id="Path_48065" data-name="Path 48065" d="M16.07,19.564v2.264a.69.69,0,0,1-1.38,0V19.564a1.38,1.38,0,1,1,1.38,0Z" transform="translate(-2.479 -4.644)" fill="#cbcbcb"></path>
                                                                            </g>
                                                                        </svg>
                                                                        <input type="password" className="w-full rounded focus:outline-0 h-[40px]"/>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <label className="mb-2">Password Again</label>
                                                                    <div className="flex flex-row w-full items-center border rounded hover:border-hmDark transition ease-in">
                                                                        <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 13.803 19.324">
                                                                            <g id="_12-Lock" data-name="12-Lock" transform="translate(-6 -2)">
                                                                                <path id="Path_48064" data-name="Path 48064" d="M17.732,8.9V6.631A4.638,4.638,0,0,0,13.1,2h-.4A4.638,4.638,0,0,0,8.07,6.631V8.9A2.07,2.07,0,0,0,6,10.972V17.39a3.941,3.941,0,0,0,3.934,3.934h5.935A3.941,3.941,0,0,0,19.8,17.39V10.972A2.07,2.07,0,0,0,17.732,8.9ZM9.451,6.631A3.251,3.251,0,0,1,12.7,3.38h.4a3.251,3.251,0,0,1,3.251,3.251V8.9h-6.9ZM18.422,17.39a2.553,2.553,0,0,1-2.553,2.553H9.934A2.553,2.553,0,0,1,7.38,17.39V10.972a.69.69,0,0,1,.69-.69h9.662a.69.69,0,0,1,.69.69Z" fill="#cbcbcb"></path>
                                                                                <path id="Path_48065" data-name="Path 48065" d="M16.07,19.564v2.264a.69.69,0,0,1-1.38,0V19.564a1.38,1.38,0,1,1,1.38,0Z" transform="translate(-2.479 -4.644)" fill="#cbcbcb"></path>
                                                                            </g>
                                                                        </svg>
                                                                        <input type="password" className="w-full rounded focus:outline-0 h-[40px]"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row mb-5">
                                                                <div className="w-full flex flex-row justify-between" role="group">
                                                                    <div className={styles.rightcheck+" flex flex-row items-center"}>
                                                                        <input type="checkbox" className="btncheck" name="modalnofity" id="modalnofityemail" autoComplete="off" />
                                                                        <label htmlFor="modalnofityemail">
                                                                            <span className="ml-3 cursor-pointer">Email</span>
                                                                        </label>
                                                                    </div>
                                                                    <div className={styles.rightcheck+" flex flex-row items-center"}>
                                                                        <input type="checkbox" className="btn-check" name="modalnofity" id="modalnofitysms" autoComplete="off" />
                                                                        <label htmlFor="modalnofitysms">
                                                                            <span className="ml-3 cursor-pointer">SMS</span>
                                                                        </label>
                                                                    </div>
                                                                    <div className={styles.rightcheck+" flex flex-row items-center"}>
                                                                        <input type="checkbox" className="btn-check" name="modalnofity" id="modalnofitygdpr" autoComplete="off" />
                                                                        <label htmlFor="modalnofitygdpr">
                                                                            <span className="ml-3 cursor-pointer">GDPR</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="w-full bg-hmGreen hover:bg-hmDark transition ease-in rounded-lg h-[55px] font-bold text-white text-lg">REGISTER</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
            </div>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-transparent">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {menu.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <a
                                    onClick={openLoginModal}
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-hmDark hover:bg-hmGreen transition ease-in"
                                >
                                    Sign up
                                </a>
                                <p
                                    onClick={openRegisterModal}
                                    className="mt-6 text-center text-base font-medium text-hmsearchBorderColor">
                                    Existing customer?{' '}
                                    <a href="#" className="text-hmDark hover:text-hmGreen transition ease-in">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}