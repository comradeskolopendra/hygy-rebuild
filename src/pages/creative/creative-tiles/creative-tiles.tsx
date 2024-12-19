import styles from "./creative-tiles.module.css";
import Tile from "../../../components/tile/tile";
import Button from "../../../components/button/button";


const CreativeTiles = () => {
    return (
        <>
            <div className={styles.tiles}>
                {["H", 2, 3, 4, 5, "Y", 7, 8, "G", 10, 11, 12, 13, 14, 15, "Y"].map((element) => {
                    if (typeof element === "string") {
                        return (
                            <div className={styles.letter}>
                                {element}
                            </div>
                        )
                    } else {
                        return <Tile/>
                    }
                })}
            </div>
            <div className={styles.buttonWrapper}>
                <Button className={styles.showMoreTiles}>Show more</Button>
            </div>
        </>
    )
};

export default CreativeTiles;