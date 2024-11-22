import { FC, memo } from "react";
import styles from "./swiper-control.module.css";

interface SwiperControlProps {
    direction: "next" | "prev";
    handlerClick: () => void;
    disabled: boolean;
    className?: string;
    color?: "black" | "white"
}

const SwiperControl: FC<SwiperControlProps> = ({ color = "white", direction, handlerClick, disabled, className = "" }) => {

    return (
        <button onClick={handlerClick} disabled={disabled} className={`${styles.control} ${className}`}>
            {direction === "prev" ?
                <svg className={styles.arrow} width="43" height="80" viewBox="0 0 43 80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
                    <path d="M41 2L4 36.4874L35.7677 78"  strokeWidth="5"/>
                </svg>
                :
                <svg className={styles.arrow} width="43" height="81" viewBox="0 0 43 81" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
                    <path xmlns="http://www.w3.org/2000/svg" d="M2.46886 78.2246L39.0419 43.2847L6.76596 2.16603" strokeWidth="5"/>
                </svg>
            }
        </button>
    )
};

export default memo(SwiperControl);