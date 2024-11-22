import { FC } from "react";
import styles from "./swiper-article.module.css"

interface SwiperArticleProps {
    photo: string;
    title: string;
    description: string;
}

const SwiperArticle: FC<SwiperArticleProps> = ({ photo, title, description }) => {
    return (
        <article className={styles.article}>
            <img src={photo} alt="" className={styles.photo} />

            <h3 className={styles.heading}>
                {title}
            </h3>
            <p className={styles.description}>
                {description}
            </p>
        </article >
    )
}

export default SwiperArticle