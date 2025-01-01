import styles from "./full-article-third.module.css";
import Layout from "../../hocs/layout";

import HygyFirst from "./test-assets/hygy-first.jpg";
import HygySecond from "./test-assets/hygy-second.jpg";
import HygyThird from "./test-assets/hygy-third.jpg";
import HygyFourth from "./test-assets/hygy-fourth.jpg";

const FullArticleThirdPage =  () => {

    return (
        <Layout isNeedFooter={true} isNeedHeader={true}>
            <section className={styles.contents}>
                <h1 className={styles.articleHeader}>Why Women Artists Deserve More Than a Glance – A Look at Art's
                    Gendered Gaze</h1>

                <section className={styles.topImages}>
                    <img className={styles.hygyFirst} src={HygyFirst} alt=""/>
                </section>

                <section className={styles.textBlock}>
                    <p className={styles.text}>
                        Picture this: walking into a museum filled with masterpieces—beautiful, dramatic, provocative.
                        But pause for a moment. How many of these works were painted by women? The truth is, the names
                        we remember are overwhelmingly male. The narrative of art history has often cast women as muses
                        rather than creators, symbols rather than storytellers.
                        <br/>
                        Today, more voices are joining the conversation about gender in art. In every corner of the art
                        world, from high-fashion exhibits to bold contemporary galleries, we're witnessing a movement
                        that seeks to shine a spotlight on the once-overlooked women artists. Think of “The Dinner
                        Party” by Judy Chicago or the provocative posters by the Guerrilla Girls asking, “Do women have
                        to be naked to get into the museum?” These aren’t just works—they’re statements.
                    </p>
                    <p className={styles.text}>
                        Why did we lose so many women from the history books? Classics like The Story of Art by Ernst
                        Gombrich skim right over female artists, either by habit or design. The result? Generations of
                        women left searching for role models in a world that told them art wasn’t for them. This “canon”
                        of art has unwittingly—or maybe intentionally—cast women as the seen, not the seers.
                        <br/>
                        Consider the iconic Venus motif in Western art. Starting with Giorgione's Sleeping Venus, the
                        goddess is serene and untouched, her eyes closed as if dreaming of another world. Fast-forward
                        to Titian's Venus of Urbino, and she is fully aware, gazing back at us with a seductive, knowing
                        look. Then, in Manet's daring Olympia, we meet a woman who is unapologetically herself, staring
                        back with a boldness that caused a social uproar. Each painting reflects the shifting role of
                        women in art—but only as subjects, not creators.
                    </p>

                    <p className={styles.text}>
                        Even in the eyes of the “greats,” women were crafted to fit ideals that both elevated and constrained them. Women were muses, saints, seductresses—but rarely artists. This male-dominated lens objectified women, placing them as the “beauty” rather than the creator of beauty. As art critic Linda Nochlin argued, it's not that there were no great women artists; it’s that the system didn’t allow women the same opportunities.
                        <br/>
                        Now, art history is being reimagined by artists and curators dedicated to recovering these lost voices. The impact? A canon that's growing, challenging long-held norms, and recognizing that women were never absent from art’s story—they were just hidden in the margins.
                    </p>
                </section>

                <section className={styles.botImages}>
                    <img className={styles.hygyFirstBot} src={HygyFirst} alt=""/>
                    <img className={styles.hygySecondBot} src={HygySecond} alt=""/>
                    <img className={styles.hygyThirdBot} src={HygyThird} alt=""/>
                    <img className={styles.hygyFourthBot} src={HygyFourth} alt=""/>
                </section>
            </section>
        </Layout>
    )
};

export default FullArticleThirdPage;