import styles from '../../styles/SelectTreatment.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Treatment from "./mincomp/treatment";
import SectionTitle from "./sectionTitle";

export default function SelectTreatment() {
    return (
        <div className="flex flex-col my-10">
            <SectionTitle title="Select Treatments" desc="Featured treatments and health services"/>
            <div className="container mx-auto mt-10">
                <div className="flex flex-row">
                    <Swiper className="mx-10"
                            breakpoints={
                                {
                                    0: { slidesPerView: 1, spaceBetween: 20 },
                                    480: { slidesPerView: 2, spaceBetween: 20 },
                                    768: { slidesPerView: 2, spaceBetween: 20},
                                    980: { slidesPerView: 7, spaceBetween: 20 } }
                            }
                    >
                        <SwiperSlide>
                            <Treatment title="Aesthetic" result="343" link="/" img="/img/svg/treatments/aesthetic.svg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Treatment title="Caver" result="343" link="/" img="/img/svg/treatments/canser.svg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Treatment title="Eye diseases" result="343" link="/" img="/img/svg/treatments/eye-diseases.svg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Treatment title="Heart" result="343" link="/" img="/img/svg/treatments/heart.svg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Treatment title="Hair Transplant" result="343" link="/" img="/img/svg/treatments/hair-transplant.svg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Treatment title="Nutritionist" result="343" link="/" img="/img/svg/treatments/nutritionist.svg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Treatment title="Psychology" result="9044" link="/" img="/img/svg/treatments/psychology.svg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Treatment title="Urology" result="343" link="/" img="/img/svg/treatments/urology.svg"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Treatment title="Physiotherapy" result="1342" link="/" img="/img/svg/treatments/physiotherapy.svg"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}