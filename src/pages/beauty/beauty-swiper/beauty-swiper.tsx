import { useState, useRef, useCallback } from "react";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { A11y } from "swiper/modules";
import SwiperArticle from "./swiper-article/swiper-article";
import SwiperControl from "../../../components/swiper-control/swiper-control";

import griefs from "../../../assets/images/griefs.jpg";

import styles from "./beauty-swiper.module.css";
import 'swiper/css';


const BeautySwiper = () => {
    const [isReach, setIsReach] = useState({
        end: false,
        start: true
    })
    const swiperRef = useRef<SwiperClass>();

    const handleNextSlide = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current?.slideNext();
        }
    }, []);

    const handlePrevSlide = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }, [])

    const resetReaches = () => {
        setIsReach((prev) => {
            if (swiperRef.current) {
                return ({
                    end: swiperRef.current.isEnd,
                    start: swiperRef.current.isBeginning
                })
            } else {
                return { ...prev }
            }
        })
    };

    return (
        <section className={styles.swiperWrapper}>
            <SwiperControl
                direction="prev"
                disabled={isReach.start}
                handlerClick={handlePrevSlide}
                className={styles.control}
            />

            <Swiper
                modules={[A11y]}
                spaceBetween={20}
                onSwiper={(swiper: SwiperClass) => { swiperRef.current = swiper }}
                onSlideChange={resetReaches}
                breakpoints={{
                    480: {
                        slidesPerView: 2
                    },
                    600: {
                        slidesPerView: 2.5
                    },
                    720: {
                        slidesPerView: 3
                    },
                    1120: {
                        slidesPerView: 4
                    },
                    1380: {
                        slidesPerView: 5
                    }
                }}
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element) => (
                        <SwiperSlide key={element}>
                            <SwiperArticle
                                photo={griefs}
                                title="Title"
                                description="Why do skinny jeans get so much hate?..."
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <SwiperControl
                direction="next"
                disabled={isReach.end}
                handlerClick={handleNextSlide}
                className={styles.control}
            />
        </section>
    )
};

export default BeautySwiper;