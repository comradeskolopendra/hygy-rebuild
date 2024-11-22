import { A11y } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { FC, useCallback, useRef, useState } from 'react';
import styles from "./fashion-swiper.module.css";
import SwiperArticle from './swiper-article/swiper-article';
import SwiperControl from '../../../components/swiper-control/swiper-control';

import photo from "../../../assets/images/griefs.jpg";

const FashionSwiper: FC = () => {
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
            <SwiperControl direction='prev' disabled={isReach.start} handlerClick={handlePrevSlide} />
            <Swiper
                modules={[A11y]}
                spaceBetween={10}
                slidesPerView={2}
                navigation
                className={styles.swiper}
                onSwiper={(swiper: SwiperClass) => { swiperRef.current = swiper }}
                onSlideChange={resetReaches}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        centeredSlides: true
                    },
                    1380: {
                        slidesPerView: 2,
                        centeredSlides: false
                    }
                }}
            >
                {[1, 2, 3, 4].map(element => (
                    <SwiperSlide className={styles.slide}>
                        <SwiperArticle
                            photo={photo}
                            title={"TITLE"}
                            text='Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is almost always some variation of ‘skiNNy JeAnS’.'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <SwiperControl direction='next' disabled={isReach.end} handlerClick={handleNextSlide} />
        </section>
    )
};

export default FashionSwiper;