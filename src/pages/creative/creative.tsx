import Layout from "../../hocs/layout";
import styles from "./creative.module.css";
import CreativeTiles from "./creative-tiles/creative-tiles";
import CreativeReadNext from "./creative-read-next/creative-read-next";


const CreativePage = () => {

    return (
        <Layout isNeedFooter isNeedHeader>
            <section className={styles.contents}>
                <h1 className={styles.heading}>CREATIVE</h1>

                <CreativeTiles/>

                <CreativeReadNext/>
            </section>
        </Layout>
    );
};

export default CreativePage;