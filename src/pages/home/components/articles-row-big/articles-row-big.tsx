import { FC } from "react";
import Button from "../../../../components/button/button";
import Article from "./article/article";
import styles from "./articles-row-big.module.css";
import { BASE_URL } from "../../../../constants";

import photo from "../../../../assets/images/griefs.jpg";

interface ArticlesSpaceProps {
    name: string;
    articles: { shortInfo: string; heading: string; photo: string }[];
    showMoreHandler: () => void;
}

const ArticlesBigRow: FC<ArticlesSpaceProps> = ({ name, articles, showMoreHandler }) => {
    return (
        <section id={name} className={styles.articlesInfo}>
            <h2 className={styles.articlesTitle}>{name}</h2>

            <div className={styles.contentWrapper}>
                <section className={styles.articles}>
                    {articles.map((element, index) => (
                        <Article
                            key={index}
                            isCenter={index === 1}
                            heading={"ARTICLE TITLE"}
                            photo={photo}
                            shortInfo="Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend "
                        />
                    ))}
                </section>

                <div className={styles.buttonWrapper}>
                    <Button onClick={showMoreHandler}>
                        SHOW MORE
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default ArticlesBigRow;