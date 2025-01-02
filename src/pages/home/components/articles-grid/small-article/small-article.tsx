import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

import clsx from "clsx";
import styles from "./small-article.module.css";

interface SmallArticleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image: string;
    title: string;
    description: string;
}

const SmallArticle: FC<SmallArticleProps> = ({ image, title, description, className }) => {

    return (
        <article
            className={clsx(styles.article, className)}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover"
            }}
        >

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </article>
    );
};

export default SmallArticle;