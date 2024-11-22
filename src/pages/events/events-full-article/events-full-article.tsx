import { FC } from "react";
import styles from "./events-full-article.module.css";

interface FullArticleProps {
    photo: string;
    title: string;
    description: string;
}

const FullArticle: FC<FullArticleProps> = ({ photo, description, title }) => {

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

export default FullArticle;