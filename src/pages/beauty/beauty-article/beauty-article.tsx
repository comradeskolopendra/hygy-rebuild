import { FC } from "react";
import styles from "./beauty-article.module.css"

interface BeautyArticleProps {
    photo: string;
    description: string;
    title: string;
}

const BeautyArticle: FC<BeautyArticleProps> = ({ photo, description, title }) => {
    return (
        <article className={styles.article}>
            <img className={styles.photo} src={photo} alt="" />

            <section className={styles.text}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </section>
        </article>
    )
};

export default BeautyArticle;