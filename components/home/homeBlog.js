import Image from "next/image";
import Blogcard from "./mincomp/blogcard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SectionTitle from "./sectionTitle";
export default function HomeBlog() {
    return (
        <div className="flex flex-col my-10">
            <SectionTitle title="BLOG" desc="Our experts have prepared important content for you."/>
            <div className="container mx-auto mt-10">
                <div className="flex flex-row">
                    <Swiper className="mx-10"
                            breakpoints={
                                {
                                    0: { slidesPerView: 1, spaceBetween: 20 },
                                    480: { slidesPerView: 2, spaceBetween: 20 },
                                    768: { slidesPerView: 2, spaceBetween: 20},
                                    980: { slidesPerView: 4, spaceBetween: 20 } }
                            }
                    >
                        <SwiperSlide>
                            <Blogcard title="What should be considered when doing Laser Hair Removal" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem" tag="pediatricsurgery" img="/img/home/blog-1.png" link="/" like="609"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Blogcard title="Online Treatment saves big time. new Trend Online treatment" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem" tag="cardiology" img="/img/home/blog-2.png" link="/" like="609"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Blogcard title="What should I pay attention to before going into surgery?" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem" tag="gastroenterology" img="/img/home/blog-3.png" link="/" like="609"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Blogcard title="What should be considered when doing Laser Hair Removal" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem" tag="pediatricsurgery" img="/img/home/blog-4.png" link="/" like="609"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Blogcard title="Online Treatment saves big time. new Trend Online treatment" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem" tag="cardiology" img="/img/home/blog-05.png" link="/" like="609"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Blogcard title="What should I pay attention to before going into surgery?" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem" tag="gastroenterology" img="/img/home/blog-6.png" link="/" like="609"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}