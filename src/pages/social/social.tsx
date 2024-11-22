import Layout from "../../hocs/layout";
import SocialArticle from "./social-article/social-article";
import SocialSwiper from "./social-swiper/social-swiper";

import styles from "./social.module.css";

import griefs from "../../assets/images/griefs.jpg";
import SocialReadNext from "./social-read-next/social-read-next";

const SocialPage = () => {

    return (
        <Layout isNeedFooter isNeedHeader>
            <section className={styles.contents}>
                <h1 className={styles.heading}>Social</h1>
                
                <section className={styles.articles}>
                    <SocialSwiper />

                    <section className={styles.socialArticles}>
                        {[1,2,3,4,5,6,7,8].map((element) => (
                            <SocialArticle 
                                key={element}
                                photo={griefs}
                                description="Why do skinny jeans get so much hate?  Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend ..."
                                title="title"
                            />
                        ))}
                    </section>

                    <section className={styles.socialReadNext}>
                        <SocialReadNext/>
                    </section>
                </section>
            </section>
        </Layout>
    )
};

export default SocialPage;