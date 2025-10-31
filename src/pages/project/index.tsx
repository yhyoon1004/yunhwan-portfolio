import Layout from "@components/layout/Layout";
import TypingEffectTitle from "@components/common/TypingEffectTitle";
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination} from "swiper/modules";

export default function ProjectPage() {

    return (
        <Layout>
            <TypingEffectTitle title={" 참여 프로젝트"}/>

            <Box>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
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
