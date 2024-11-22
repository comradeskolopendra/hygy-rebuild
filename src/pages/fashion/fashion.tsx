import Layout from "../../hocs/layout";
import FashionArticles from "./fashion-articles/fashion-articles";
import styles from "./fashion.module.css";

import FashionSwiper from "./fashion-swiper/fashion-swiper";
import FashionReadNext from "./fashion-read-next/fashion-read-next";

import photo from "../../assets/images/griefs.jpg";
import Button from "../../components/button/button";

const FashionPage = () => {
    return (
        <Layout isNeedFooter isNeedHeader>
            <section className={styles.contents}>
                <div className={styles.articles}>
                    <h3 className={styles.heading}>FASHION</h3>
                    <section className={styles.topArticles}>
                        <FashionArticles
                            articles={[1, 2, 3, 4]}
                        />

                        <Button className={styles.showMore}>
                            Show More
                        </Button>
                    </section>

                    <FashionSwiper />

                    <h3 className={styles.heading} style={{ color: "#D50032" }}>READ NEXT</h3>

                    <FashionReadNext
                        photo={photo}
                        title={"TITLE"}
                        text={"Why do skinny jeans get so much hate? Watch any TikTok or IG Reel asking London’s Gen"}
                    />
                </div>
            </section>
        </Layout>
    )
};

export default FashionPage;