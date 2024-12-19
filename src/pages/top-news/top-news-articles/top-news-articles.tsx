import {FC} from "react";
import styles from "./top-news-articles.module.css";
import clsx from "clsx";

import griefs from "../../../assets/images/griefs.jpg";

interface SectionArticlesProps {
    name: string;
    side: "left" | "right";
}

const TopNewsArticles: FC<SectionArticlesProps> = ({name, side}) => {

    return (
        <section className={styles.block}>
            <h4 className={clsx(styles.name, {
                [styles.nameLeft]: side === "left",
                [styles.nameRight]: side === "right"
            })}>
                <span className={`${side === "left" ? styles.left : styles.right}`}/>
                {name}
            </h4>

            <section className={styles.articles}>
                {[1,2,3,4].map(() => (
                    <article className={styles.article}>
                        <img className={styles.image} src={griefs} alt={"griefs"}/>
                        <h3 className={styles.articleTitle}>Title</h3>
                        <p className={styles.articleDescription}>
                            Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen ...
                        </p>
                    </article>
                ))}
            </section>
        </section>
    )
};

export default TopNewsArticles;