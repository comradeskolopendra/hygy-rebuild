import styles from "./events-read-next.module.css";
import griefs from "../../../assets/images/griefs.jpg";

const EventsReadNext = () => {

    return (
        <section className={styles.readNext}>
            <h2 className={styles.heading}>Read Next</h2>

            <section className={styles.articles}>
                <section className={styles.innerArticles}>
                    {
                        [1, 2, 3, 4].map((element) => (
                            <article className={styles.article}>
                                <img src={griefs} alt="" className={styles.photo} />
                                <h3 className={styles.articleHeading}>Title</h3>
                                <p className={styles.description}>Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen ...</p>
                            </article>
                        ))
                    }
                </section>
            </section>
        </section>
    )
};

export default EventsReadNext;