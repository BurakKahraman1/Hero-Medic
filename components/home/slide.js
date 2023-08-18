import Image from "next/image";
export default function HomeSlider() {
    return (
        <div className="flex justify-center h-[600px] bg-center bg-no-repeat bg-[url('/img/slider-bg.svg')]">
            <Image src="/img/slider-01.svg" alt="" width="780" height="523" />
        </div>
    )
}