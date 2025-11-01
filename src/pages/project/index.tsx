import Layout from "@components/layout/Layout";
import TypingEffectTitle from "@components/common/TypingEffectTitle";
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper/modules";
import useDeviceByClient from "../../../hook/useDeviceByClient";

export default function ProjectPage() {

    const device = useDeviceByClient();

    return (
        <Layout>
            <TypingEffectTitle title={" 참여 프로젝트"}/>

            <Box sx={{height:device === "mobile" ? 300 : 500}}>
                <Swiper
                    modules={[Autoplay,EffectCoverflow,Pagination, Navigation]}
                    cssMode={true}
                    loop={true}
                    pagination={true}
                    navigation={true}
                    effect={'coverflow'}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    slidesPerView={device === "mobile" ? 3 : 5}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                >
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />

                        </div>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Layout>
    );
}
