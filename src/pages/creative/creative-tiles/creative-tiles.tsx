import styles from "./creative-tiles.module.css";
import Tile from "../../../components/tile/tile";
import Button from "../../../components/button/button";

import YuliaHLetter from "../assets/images/yulia-h-image.png";
import YuliaYLetter from "../assets/images/yulia-y-image.png";
import YuliaGLetter from "../assets/images/yulia-g-image.png";


const CreativeTiles = () => {
    return (
        <>
            <div className={styles.tiles}>
                {[YuliaHLetter, 2, 3, 4, 5, 6, YuliaYLetter, 8, 9, YuliaGLetter, 11, 12, 13, 14, 15, YuliaYLetter].map((element) => {
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