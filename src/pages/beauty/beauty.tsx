import Layout from "../../hocs/layout";
import BeautyArticle from "./beauty-article/beauty-article";
import BeautySwiper from "./beauty-swiper/beauty-swiper";
import BeautyReadNext from "./beauty-read-next/beauty-read-next";

import griefs from "../../assets/images/griefs.jpg";

import styles from "./beauty.module.css";

const BeautyPage = () => {
    return (
        <Layout isNeedFooter isNeedHeader>
            <section className={styles.contents}>
                <h1 className={styles.heading}>Beauty</h1>

                <section className={styles.articles}>
                    {[1, 2].map(() => {
                        return (
                            <BeautyArticle
                                photo={griefs}
                                description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend ..."}
                                title={"Title"}
                            />
                        )
                    })}
                </section>

                <BeautySwiper />

                <section className={styles.articles}>
                    {[1, 2, 3, 4].map(() => {
                        return (
                            <BeautyArticle
                                photo={griefs}
                                description={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend ..."}
                                title={"Title"}
                            />
                        )
                    })}
                </section>

                <BeautyReadNext />
            </section>
        </Layout>
    )
};

export default BeautyPage;