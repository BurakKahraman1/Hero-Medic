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
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-hmDark hover:text-hmGreen hover:bg-gray-100 focus:outline-none focus:ring-0 ">
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
                                    <Link href="/" className="normal-case text-xl">
                                        <svg className="md:h-[50px] h-[35px]" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 635.45 132.14">
                                            <path fill="#12284c"
                                                  d="M119.38 93.14c-.92.18-1.96.28-3.12.28-2.14 0-3.73-.4-4.77-1.19s-1.56-2.2-1.56-4.22V33.1c.49-.18 1.21-.35 2.16-.51.95-.15 2-.23 3.17-.23 2.14 0 3.73.4 4.77 1.19 1.04.8 1.56 2.2 1.56 4.22v12.67c1.35-.67 2.89-1.25 4.64-1.74 1.74-.49 3.69-.73 5.83-.73 5.57 0 10.01 1.44 13.31 4.32 3.31 2.88 4.96 7.22 4.96 13.04v27.36c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.83-.4-4.87-1.19s-1.56-2.2-1.56-4.22V65.88c0-3.06-.8-5.28-2.39-6.66s-3.67-2.07-6.24-2.07c-1.65 0-3.18.26-4.59.78s-2.69 1.15-3.86 1.88v32.87c-.55.13-1.28.28-2.2.46zM169.6 76.25c.86 3.12 2.45 5.39 4.77 6.79 2.33 1.41 5.2 2.11 8.63 2.11 2.57 0 4.94-.38 7.12-1.15 2.17-.76 3.93-1.58 5.28-2.43.86.49 1.56 1.16 2.11 2.02s.83 1.78.83 2.75c0 1.23-.41 2.31-1.24 3.26s-1.96 1.76-3.4 2.43-3.14 1.19-5.1 1.56-4.07.55-6.33.55c-3.61 0-6.9-.49-9.87-1.47s-5.51-2.46-7.62-4.45-3.76-4.45-4.96-7.39c-1.19-2.94-1.79-6.37-1.79-10.28 0-3.79.58-7.1 1.74-9.92 1.16-2.81 2.74-5.17 4.73-7.07s4.3-3.31 6.93-4.22c2.63-.92 5.42-1.38 8.36-1.38 3 0 5.75.48 8.26 1.42 2.51.95 4.65 2.27 6.43 3.95 1.77 1.68 3.17 3.7 4.18 6.06s1.51 4.91 1.51 7.67c0 1.71-.44 3-1.33 3.86s-2.13 1.41-3.72 1.65l-25.52 3.68zm10.19-19.56c-3 0-5.51 1-7.53 2.98-2.02 1.99-3.15 4.82-3.4 8.49l20.38-3.03c-.25-2.26-1.13-4.24-2.66-5.92-1.52-1.67-3.79-2.52-6.79-2.52zM224.14 47.97c6 0 10.79 1.29 14.37 3.86s5.37 6.55 5.37 11.94v21.21c0 1.47-.37 2.63-1.1 3.49s-1.65 1.62-2.75 2.3c-1.71 1.04-3.89 1.87-6.52 2.48s-5.63.92-9 .92c-6.12 0-10.94-1.18-14.46-3.54s-5.28-5.89-5.28-10.6c0-4.1 1.3-7.24 3.9-9.41s6.38-3.5 11.34-3.99l12.58-1.29v-1.65c0-2.33-.84-4.04-2.52-5.14s-4.06-1.65-7.12-1.65c-2.39 0-4.71.29-6.98.87s-4.28 1.3-6.06 2.16c-.67-.49-1.24-1.15-1.7-1.97a5.49 5.49 0 01-.69-2.71c0-1.22.29-2.22.87-2.98s1.51-1.45 2.8-2.07c1.77-.73 3.79-1.29 6.06-1.65 2.27-.39 4.56-.58 6.89-.58zm.37 37.37c1.77 0 3.4-.17 4.87-.5 1.47-.34 2.54-.75 3.21-1.24V73.4l-8.91.83c-2.45.25-4.31.78-5.6 1.61s-1.93 2.13-1.93 3.9c0 1.78.66 3.15 1.97 4.13 1.32.98 3.45 1.47 6.39 1.47zM263.48 93.14c-.95.18-1.97.28-3.08.28-2.2 0-3.81-.4-4.82-1.19s-1.52-2.2-1.52-4.22V33.1c.49-.18 1.21-.35 2.16-.51.95-.15 1.97-.23 3.08-.23 2.2 0 3.81.4 4.82 1.19 1.01.8 1.52 2.2 1.52 4.22v54.9c-.49.14-1.21.29-2.16.47zM289.46 83.5c1.19.86 2.86 1.29 5 1.29 1.04 0 2.1-.12 3.17-.37 1.07-.24 2.03-.55 2.89-.92.49.49.9 1.09 1.24 1.79s.5 1.52.5 2.43c0 1.84-.83 3.35-2.48 4.54s-4.31 1.79-7.99 1.79c-4.84 0-8.65-1.09-11.43-3.26-2.79-2.17-4.18-5.77-4.18-10.79V37.87c.49-.12 1.21-.28 2.16-.46s1.97-.28 3.08-.28c2.14 0 3.72.4 4.73 1.19 1.01.8 1.52 2.2 1.52 4.22v7.62h13.5c.31.49.58 1.13.83 1.93.24.8.37 1.65.37 2.57 0 1.59-.37 2.75-1.1 3.49-.73.73-1.71 1.1-2.94 1.1h-10.65v20.02c-.01 1.97.59 3.38 1.78 4.23zM319.16 93.14c-.92.18-1.96.28-3.12.28-2.14 0-3.73-.4-4.77-1.19s-1.56-2.2-1.56-4.22V33.1c.49-.18 1.21-.35 2.16-.51.95-.15 2-.23 3.17-.23 2.14 0 3.73.4 4.77 1.19 1.04.8 1.56 2.2 1.56 4.22v12.67c1.35-.67 2.89-1.25 4.64-1.74s3.69-.73 5.83-.73c5.57 0 10.01 1.44 13.31 4.32s4.96 7.22 4.96 13.04v27.36c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.83-.4-4.87-1.19s-1.56-2.2-1.56-4.22V65.88c0-3.06-.8-5.28-2.39-6.66s-3.67-2.07-6.24-2.07c-1.65 0-3.18.26-4.59.78s-2.69 1.15-3.86 1.88v32.87c-.54.13-1.28.28-2.2.46zM424.66 92.69c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.81-.4-4.82-1.19s-1.51-2.2-1.51-4.22V64.13c0-2.45-.67-4.22-2.02-5.33-1.35-1.1-3.12-1.65-5.33-1.65-1.47 0-2.89.28-4.27.83s-2.59 1.29-3.63 2.2c.18.86.28 1.71.28 2.57v29.93c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.81-.4-4.82-1.19s-1.51-2.2-1.51-4.22V64.13c0-2.45-.7-4.22-2.11-5.33-1.41-1.1-3.21-1.65-5.42-1.65-1.53 0-2.94.25-4.22.73-1.29.49-2.36.98-3.21 1.47v33.33c-.55.12-1.29.28-2.2.46s-1.96.28-3.12.28c-2.14 0-3.73-.4-4.77-1.19s-1.56-2.2-1.56-4.22V58.53c0-1.41.31-2.58.92-3.53s1.56-1.85 2.85-2.71c1.84-1.22 4.16-2.25 6.98-3.08 2.81-.83 5.72-1.24 8.72-1.24 5.57 0 10.1 1.5 13.59 4.5 1.78-1.29 3.81-2.36 6.11-3.21 2.3-.86 5-1.29 8.13-1.29 2.39 0 4.65.29 6.79.87s3.99 1.52 5.55 2.8c1.56 1.29 2.8 2.92 3.72 4.91s1.38 4.36 1.38 7.12v29.02zM477.36 71.02c0 3.55-.54 6.75-1.61 9.59-1.07 2.85-2.59 5.28-4.54 7.3-1.96 2.02-4.32 3.57-7.07 4.64s-5.85 1.61-9.27 1.61c-3.43 0-6.52-.54-9.27-1.61s-5.11-2.6-7.07-4.59-3.47-4.41-4.54-7.25c-1.07-2.85-1.61-6.07-1.61-9.69 0-3.55.54-6.75 1.61-9.59 1.07-2.85 2.6-5.26 4.59-7.25s4.36-3.52 7.12-4.59c2.75-1.07 5.81-1.61 9.18-1.61s6.43.54 9.18 1.61 5.12 2.62 7.12 4.64c1.99 2.02 3.52 4.45 4.59 7.3 1.05 2.83 1.59 6 1.59 9.49zm-22.5-13.87c-3.31 0-5.91 1.21-7.8 3.63-1.9 2.42-2.85 5.83-2.85 10.24 0 4.47.93 7.9 2.8 10.28s4.48 3.58 7.85 3.58 5.98-1.21 7.85-3.63 2.8-5.83 2.8-10.24-.95-7.82-2.85-10.24c-1.89-2.41-4.49-3.62-7.8-3.62zM511.56 58.99c-1.5-1.22-3.54-1.84-6.11-1.84-1.78 0-3.41.21-4.91.64s-2.8.98-3.9 1.65v33.24c-.55.12-1.29.28-2.2.46s-1.96.28-3.12.28c-2.14 0-3.73-.4-4.77-1.19s-1.56-2.2-1.56-4.22V58.53c0-1.47.31-2.66.92-3.58s1.56-1.8 2.85-2.66c1.77-1.22 4.13-2.25 7.07-3.08s6.18-1.24 9.73-1.24c6.3 0 11.19 1.39 14.64 4.18 3.46 2.79 5.19 6.87 5.19 12.26v28.28c-.49.12-1.21.28-2.16.46s-1.97.28-3.08.28c-2.2 0-3.81-.4-4.82-1.19s-1.51-2.2-1.51-4.22V64.77c-.01-2.63-.77-4.56-2.26-5.78zM575.5 84.33c0 1.41-.31 2.54-.92 3.4s-1.53 1.68-2.75 2.48c-1.53.98-3.55 1.88-6.06 2.71s-5.42 1.24-8.72 1.24c-7.34 0-13.17-1.88-17.49-5.65-4.32-3.76-6.47-9.53-6.47-17.31 0-4.04.58-7.51 1.74-10.42s2.74-5.31 4.73-7.21 4.33-3.31 7.02-4.22c2.69-.92 5.6-1.38 8.72-1.38 1.65 0 3.21.17 4.68.5 1.47.34 2.78.75 3.95 1.24V33.1c.49-.18 1.21-.35 2.16-.51.95-.15 1.97-.23 3.08-.23 2.2 0 3.81.4 4.82 1.19 1.01.8 1.52 2.2 1.52 4.22v46.56zm-11.57-25.25c-.92-.55-1.99-1.01-3.21-1.38-1.23-.37-2.54-.55-3.95-.55-3.43 0-6.27 1.1-8.54 3.31-2.27 2.2-3.4 5.82-3.4 10.83 0 4.71 1.09 8.16 3.26 10.33s5.12 3.26 8.86 3.26c1.59 0 2.95-.18 4.09-.55 1.13-.37 2.1-.79 2.89-1.29V59.08zM594.87 76.25c.86 3.12 2.45 5.39 4.77 6.79 2.33 1.41 5.2 2.11 8.63 2.11 2.57 0 4.94-.38 7.12-1.15 2.17-.76 3.93-1.58 5.28-2.43.86.49 1.56 1.16 2.11 2.02s.83 1.78.83 2.75c0 1.23-.41 2.31-1.24 3.26s-1.96 1.76-3.4 2.43-3.14 1.19-5.1 1.56-4.07.55-6.33.55c-3.61 0-6.9-.49-9.87-1.47s-5.51-2.46-7.62-4.45-3.76-4.45-4.96-7.39c-1.19-2.94-1.79-6.37-1.79-10.28 0-3.79.58-7.1 1.74-9.92 1.16-2.81 2.74-5.17 4.73-7.07s4.3-3.31 6.93-4.22c2.63-.92 5.42-1.38 8.36-1.38 3 0 5.75.48 8.26 1.42 2.51.95 4.65 2.27 6.43 3.95 1.77 1.68 3.17 3.7 4.18 6.06s1.52 4.91 1.52 7.67c0 1.71-.45 3-1.33 3.86-.89.86-2.13 1.41-3.72 1.65l-25.53 3.68zm10.2-19.56c-3 0-5.51 1-7.53 2.98-2.02 1.99-3.15 4.82-3.4 8.49l20.38-3.03c-.25-2.26-1.13-4.24-2.66-5.92-1.53-1.67-3.8-2.52-6.79-2.52z"></path>
                                            <path fill="#00ac69"
                                                  d="M93.1 34.05v-.26c0-.3-.01-.59-.01-.86-.02-1.7-.06-2.85-.07-3.02l-.02-.32c-.06-.83-.52-1.59-1.24-2.02l-.28-.17c-.67-.4-16.56-9.82-39.9-9.82-23.36 0-39.23 9.42-39.9 9.82l-.28.17c-.72.43-1.18 1.19-1.24 2.02l-.02.32c-.04.61-1.04 15.15 3.28 32.14 4.94 19.41 15.09 34.26 29.35 42.96.11.07.17.18.16.31-.02.21-.02.41-.02.62 0 4.75 3.89 8.62 8.67 8.62s8.67-3.87 8.67-8.62-3.89-8.62-8.67-8.62c-2 0-3.96.7-5.5 1.97-.1.08-.25.09-.36.03-12.7-7.83-21.46-20.86-26.03-38.73-3.22-12.57-3.32-23.98-3.21-28.3 0-.12.07-.23.18-.28C21.41 29.6 34.33 24 51.59 24c12.66 0 23.02 3.04 29.5 5.6v.01c2.31.92 4.13 1.77 5.38 2.41.11.05.17.16.18.28.02.89.03 2.07.01 3.5l-.03.98.01-.01c-.01.26-.01.52-.02.79 0 .06 0 .11-.01.16-.01.31-.02.63-.04.95 0 .09-.01.19-.01.29-.01.31-.03.63-.05.95-.01.12-.01.24-.02.36-.02.3-.03.61-.05.92l-.03.44c-.02.25-.04.5-.05.76-.01.2-.03.4-.05.6-.02.27-.04.54-.07.81-.02.18-.03.36-.05.54l-.09.97-.06.59c-.03.29-.06.59-.1.89-.03.24-.06.47-.08.71l-.09.72-.12.89c-.03.25-.07.49-.1.74-.03.23-.06.45-.1.68-.05.34-.11.69-.16 1.04-.03.22-.07.44-.11.66-.06.37-.12.74-.19 1.12-.04.21-.08.42-.11.63l-.18.94-.06.31c-.13.67-.27 1.35-.42 2.04-.97 4.21-2.02 7.84-3.11 10.98-.09.25-.17.5-.26.74l-.09.24c-.7 1.91-1.47 3.75-2.29 5.52-2.8 5.9-5.71 9.2-8.26 11-2.62 1.85-5.35 2.48-8.14 1.85-2.26-.51-4.15-1.98-5.61-4.38-1.22-2.01-1.67-3.91-1.67-3.93l-6.29 1.4c.1.45 2.53 11.03 12.16 13.2.91.2 1.95.36 3.1.38 2.89.07 6.46-.63 10.18-3.27 5.13-3.63 9.43-10.27 12.84-19.6v-.01c1.12-2.98 2.1-6.1 2.92-9.35 2.83-11.12 3.38-21.19 3.41-26.99-.01-.34-.01-.68-.01-1zm-43.52 68.74c.6-.38 1.29-.57 1.99-.57 2.07 0 3.76 1.67 3.76 3.73 0 2.05-1.68 3.73-3.76 3.73-1.85 0-3.45-1.37-3.71-3.2a3.716 3.716 0 011.72-3.69z"></path>
                                            <path fill="#00ac69"
                                                  d="M40.82 43.4c.77.82 2.04 1.29 3.52 1.29 2.83 0 4.27-1.06 4.27-3.15 0-.95-.42-3.15-4.27-3.15-1.64 0-3 .57-3.73 1.54-4.31.62-7.61 3.14-9.34 7.14-2.69 6.24-1.14 13.02.02 16.5l.4 1.19.86-.92c.15-.16.32-.28.51-.36.22-.09.46-.12.71-.09l1.16.13-.36-1.11c-.99-3.03-2.32-8.87-.11-13.99.69-1.59 2.44-4.35 6.36-5.02zM68.22 63.55l1.16-.13a1.384 1.384 0 011.22.45l.86.92.4-1.19c1.16-3.49 2.71-10.27.02-16.5-1.72-4-5.03-6.52-9.34-7.14-.73-.97-2.08-1.54-3.73-1.54-3.86 0-4.27 2.2-4.27 3.15 0 2.09 1.44 3.15 4.27 3.15 1.48 0 2.75-.48 3.51-1.29 3.93.67 5.67 3.42 6.37 5.04 2.2 5.11.87 10.96-.12 13.99l-.35 1.09z"></path>
                                            <path fill="#12284c"
                                                  d="M72.44 63.64c-.32-.77-.93-1.38-1.71-1.69-1.6-.65-3.44.11-4.1 1.71-4.41 10.7-10.96 12.5-13.57 12.77-.91.1-1.9.1-2.86.01-2.63-.25-9.23-1.98-13.68-12.79a3.163 3.163 0 00-4.1-1.71c-.78.32-1.39.92-1.71 1.69s-.32 1.62-.01 2.39c6.87 16.66 18.77 16.8 20.87 16.68.15.01.34.01.57.01 3.15 0 13.9-1.2 20.29-16.7.33-.75.33-1.6.01-2.37z"></path>
                                        </svg>
                                    </Link>
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