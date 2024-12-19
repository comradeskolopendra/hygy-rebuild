import Layout from "../../hocs/layout";
import styles from "./top-news.module.css";
import TopNewsArticles from "./top-news-articles/top-news-articles";
import TopNewsReadNext from "./top-news-read-next/top-news-read-next";

const TopNewsPage = () => {

    return (
        <Layout isNeedFooter isNeedHeader>
            <section className={styles.contents}>
                <h3 className={styles.heading}>TOP NEWS</h3>

                {["FASHION", "ART", "BEAUTY", "SOCIAL", "CREATIVE", "EVENTS"].map((name, idx) => (
                    <TopNewsArticles name={name} side={idx % 2 ? "right" : "left"} />
                ))}

                <TopNewsReadNext/>
            </section>
        </Layout>
    )
};

export default TopNewsPage;