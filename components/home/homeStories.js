import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function HomeStories() {
    return (
        <div className="flex flex-col my-10">
            <div className="container mx-auto items-center text-center w-2/3 px-5 md:px-0">
                <h2 className="text-hmGray text-px-35 font-bold">Stories</h2>
                <p className="text-hmDark text-px-20">They describe their experience with HERO-Medic</p>
            </div>
            <div className="container mx-auto mt-10">
                <div className="flex flex-row homeStories">
                    <Swiper className="mx-10"
                            breakpoints={
                                {
                                    0: { slidesPerView: 1, spaceBetween: 0 },
                                    480: { slidesPerView: 1, spaceBetween: 20 },
                                    768: { slidesPerView: 2, spaceBetween: 20},
                                    980: { slidesPerView: 2, spaceBetween: 20 } }
                            }
                    >
                        <SwiperSlide>
                            <div className="flex flex-col w-full">
                                <div className="relative">
                                    <div className="h-[506px]">
                                        <Image src="https://picsum.photos/1132/506?random=1" layout="fill" className="rounded-xl" alt="" />
                                    </div>
                                    <div className="w-[206px] flex flex-col bg-white rounded p-3 absolute bottom-5 right-5 text-hmDark text-px-15">
                                        <span className="font-bold">Linda Parker</span>
                                        <span>London, England</span>
                                    </div>
                                </div>
                                <div className="text-hmDark flex flex-col items-start">
                                    <p className="text-px-20 font-bold my-3">It Was A Great Experience. I Got Great Benefits. Vacation And Therapy Combined.</p>
                                    <span className="text-px-15 border-b pb-3 pr-20">Dental health / Turkey - İstanbul  /Acı Badem Hospital</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col w-full">
                                <div className="relative">
                                    <div className="h-[506px]">
                                        <Image src="https://picsum.photos/1132/506?random=2" layout="fill" className="rounded-xl" alt=""  />
                                    </div>
                                    <div className="w-[206px] flex flex-col bg-white rounded p-3 absolute bottom-5 right-5 text-hmDark text-px-15">
                                        <span className="font-bold">Linda Parker 2</span>
                                        <span>London, England</span>
                                    </div>
                                </div>
                                <div className="text-hmDark flex flex-col items-start slide-bottom">
                                    <p className="text-px-20 font-bold my-3">It Was A Great Experience. I Got Great Benefits. Vacation And Therapy Combined.</p>
                                    <span className="text-px-15 border-b pb-3 pr-20">Dental health / Turkey - İstanbul  /Acı Badem Hospital</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col w-full">
                                <div className="relative">
                                    <div className="h-[506px]">
                                        <Image src="https://picsum.photos/1132/506?random=3" layout="fill" className="rounded-xl" alt=""  />
                                    </div>
                                    <div className="w-[206px] flex flex-col bg-white rounded p-3 absolute bottom-5 right-5 text-hmDark text-px-15">
                                        <span className="font-bold">Linda Parker 3</span>
                                        <span>London, England</span>
                                    </div>
                                </div>
                                <div className="text-hmDark flex flex-col items-start slide-bottom">
                                    <p className="text-px-20 font-bold my-3">It Was A Great Experience. I Got Great Benefits. Vacation And Therapy Combined.</p>
                                    <span className="text-px-15 border-b pb-3 pr-20">Dental health / Turkey - İstanbul  /Acı Badem Hospital</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col w-full">
                                <div className="relative">
                                    <div className="h-[506px]">
                                        <Image src="https://picsum.photos/1132/506?random=4" layout="fill" className="rounded-xl" alt=""  />
                                    </div>
                                    <div className="w-[206px] flex flex-col bg-white rounded p-3 absolute bottom-5 right-5 text-hmDark text-px-15">
                                        <span className="font-bold">Linda Parker 4</span>
                                        <span>London, England</span>
                                    </div>
                                </div>
                                <div className="text-hmDark flex flex-col items-start slide-bottom">
                                    <p className="text-px-20 font-bold my-3">It Was A Great Experience. I Got Great Benefits. Vacation And Therapy Combined.</p>
                                    <span className="text-px-15 border-b pb-3 pr-20">Dental health / Turkey - İstanbul  /Acı Badem Hospital</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}