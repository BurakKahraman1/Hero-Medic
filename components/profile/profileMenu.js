import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const profilePages = [
    {
        name: 'Online Appointment',
        svg: '/img/svg/profile-menu/online-appointment.svg',
        url: '/profile/online-appointment',
    },
    {
        name: 'Favorites',
        svg: '/img/svg/profile-menu/favorites.svg',
        url: '/profile/favorites',
    },
    {
        name: 'Inbox',
        svg: '/img/svg/profile-menu/inbox.svg',
        url: '/profile/inbox',
    },
    {
        name: 'Profile information',
        svg: '/img/svg/profile-menu/profile-information.svg',
        url: '/profile/profile-information',
    },
    {
        name: 'Support',
        svg: '/img/svg/profile-menu/support.svg',
        url: '/profile/support',
    },
]
export default function ProfileMenu (){
    const router = useRouter();
    return (
        <div className="w-full lg:w-1/4 mr-5 rounded-xl bg-[#f5f6f9]">
            <ul className="py-5 px-5">

                {profilePages.map((item) => (
                    <li key={item.name} className="mb-1">
                        <Link href={item.url}>
                            <a className={`${
                                router.pathname == item.url ? 'bg-white' : ''
                            }  w-full rounded-md px-3 py-2 flex flex-row items-center text-hmDark hover:text-hmGreen hover:bg-white transition ease-in text-md"`}

                            >
                                <div className="relative mr-3">
                                    <div className="w-[15px] h-[15px]">
                                        <Image src={item.svg} layout="fill"/>
                                    </div>
                                </div>
                                <span>{item.name}</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}