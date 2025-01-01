import {FC} from "react";
import styles from "./top-news-articles.module.css";
import clsx from "clsx";

import griefs from "../../../assets/images/griefs.jpg";
import vertical from "../../../assets/images/hygy-first.jpg";
import horizontal from "../../../assets/images/hygy-third.jpg"
import {useNavigate} from "react-router";

interface SectionArticlesProps {
    name: string;
    side: "left" | "right";
}

const TopNewsArticles: FC<SectionArticlesProps> = ({name, side}) => {
    const navigate = useNavigate()

    const handleNavigateArticle = (idx: number) => {
        if (idx === 1) {
            navigate("/full-article-second")
        } else if (idx === 2) {
            navigate("/full-article-third")
        } else {
            navigate("/full-article")
        }
    };

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
                {[1,2,3,4].map((_, idx) => (
                    <article onClick={() => handleNavigateArticle(idx)} className={styles.article}>
                        <img className={styles.image} src={
                            idx === 0 ? vertical : idx === 3 ? horizontal : griefs
                        } alt={"griefs"}/>
                        <h3 className={styles.articleTitle}>Title</h3>
                        <p className={clsx(styles.articleDescription, {
                            [styles.articleSanvaDesc]: idx === 0,
                            [styles.articleFlindersDesc]: idx === 1,
                            [styles.articleHovesDesc]: idx === 2
                        })}>
                            Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen ...
                            {idx === 0 ? "Sanva" : idx === 1 ? "Flinders" : "TT Hoves"}
                        </p>
                    </article>
                ))}
            </section>
        </section>
    )
};

export default TopNewsArticles;