import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import styles from "./social-swiper.module.css";
import SwiperArticle from "./swiper-article/swiper-article";

import { useCallback, useRef, useState } from "react";
import griefs from "../../../assets/images/griefs.jpg";
import SwiperControl from "../../../components/swiper-control/swiper-control";

const SocialSwiper = () => {
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
                handlerClick={handlePrevSlide}
                disabled={isReach.start}
                color="black"
            />
            <Swiper
                slidesPerView={2}
                spaceBetween={65}
                className={styles.swiper}
                onSwiper={(swiper: SwiperClass) => swiperRef.current = swiper}
                onSlideChange={resetReaches}
                breakpoints={
                    {
                        320: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }
                }
            >
                {
                    [1, 2, 3, 4, 5, 6].map((element) => (
                        <SwiperSlide key={element}>
                            <SwiperArticle
                                title="TITLE"
                                description="Why do skinny jeans get so much hate?  Watch any TikTok or IG Reel asking London’s Gen Z about their least ..."
                                photo={griefs}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <SwiperControl
                direction="next"
                handlerClick={handleNextSlide}
                disabled={isReach.end}
                color="black"
            />
        </section>
    )
}

export default SocialSwiper