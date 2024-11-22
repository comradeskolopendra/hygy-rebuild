import { FC } from "react";
import styles from "./events-short-article.module.css";

interface ShortArticleProps {
    photo: string;
    title: string;
    description: string;
}

const ShortArticle: FC<ShortArticleProps> = ({ photo, description, title }) => {

    return (
        <article className={styles.article}>
            <img src={photo} alt="" className={styles.photo} />

            <section>
                <h3 className={styles.heading}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </section>
        </article>
    )
}

export default ShortArticle;