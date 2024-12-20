import styles from "./creative-tiles.module.css";
import Tile from "../../../components/tile/tile";
import Button from "../../../components/button/button";

import HLetter from "../assets/images/h-image.jpg";
import YLetter from "../assets/images/y-image.jpg";
import GLetter from "../assets/images/g-image.jpg";


const CreativeTiles = () => {
    return (
        <>
            <div className={styles.tiles}>
                {[HLetter, 2, 3, 4, 5, YLetter, 7, 8, GLetter, 10, 11, 12, 13, 14, 15, YLetter].map((element) => {
                    if (typeof element === "string") {
                        return <img className={styles.letter} src={element} alt="one of `H Y G Y` letter" />
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