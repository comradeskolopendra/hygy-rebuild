import Layout from "../../hocs/layout";

import FullArticle from "./events-full-article/events-full-article";

import griefs from "../../assets/images/griefs.jpg";
import styles from "./events.module.css";
import ShortArticle from "./events-short-article/events-short-article";
import EventsReadNext from "./events-read-next/events-read-next";


const EventsPage = () => {

    return (
        <Layout isNeedFooter isNeedHeader>
            <section className={styles.contents}>
                <h1 className={styles.heading}>Events</h1>

                <section className={styles.fullArticles}>
                    {[1, 2, 3, 4].map((element) => (
                        <FullArticle
                            photo={griefs}
                            title={"Title"}
                            description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend ..."}
                        />
                    ))}
                </section>

                <section className={styles.shortArticles}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element) => (
                        <ShortArticle
                            photo={griefs}
                            title={"Title"}
                            description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend ..."}
                        />
                    ))}
                </section>

                <section className={styles.fullArticles}>
                    {[1, 2, 3, 4].map((element) => (
                        <FullArticle
                            photo={griefs}
                            title={"Title"}
                            description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend ..."}
                        />
                    ))}
                </section>

                <EventsReadNext />
            </section>
        </Layout >
    )
};

export default EventsPage;