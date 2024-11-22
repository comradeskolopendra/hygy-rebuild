import { FC } from "react";
import styles from "./swiper-article.module.css";

interface SwiperArticleProps {
    photo: string;
    title: string;
    description: string;
}

const SwiperArticle: FC<SwiperArticleProps> = ({ description, photo, title }) => {
    return (
        <article className={styles.slide}>
            <h3 className={styles.title}>{title}</h3>
            <img className={styles.photo} src={photo} alt="article info" />
            <p className={styles.description}>{description}</p>
        </article>
    )
};

export default SwiperArticle