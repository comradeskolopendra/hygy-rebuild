import styles from "./top-news-read-next.module.css";
import vertical from "../../../assets/images/hygy-first.jpg";
import horizontal from "../../../assets/images/hygy-third.jpg"
import griefs from "../../../assets/images/griefs.jpg";

const TopNewsReadNext = () => {

    return (
        <section className={styles.readNext}>
            <h2 className={styles.heading}>Read Next</h2>

            <section className={styles.articles}>
                <section className={styles.innerArticles}>
                    {
                        [1, 2, 3, 4].map((_, idx) => (
                            <article className={styles.article}>
                                <img className={styles.photo} src={
                                    idx === 0 ? vertical : idx === 3 ? horizontal : griefs
                                } alt={"griefs"}/>
                                <h3 className={styles.articleHeading}>Title</h3>
                                <p className={styles.description}>Why do skinny jeans get so much hate? Watch any TikTok
                                    or IG Reel asking London’s Gen ...</p>
                            </article>
                        ))
                    }
                </section>
            </section>
        </section>
    )
};

export default TopNewsReadNext;