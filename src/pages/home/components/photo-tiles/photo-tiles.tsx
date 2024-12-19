import {FC, useCallback} from "react";
import Button from "../../../../components/button/button";
import styles from "./photo-tiles.module.css";

import Tile from "../../../../components/tile/tile";
import {useNavigate} from "react-router";

interface PhotoTilesProps {
    name: string;
    tiles: any[];
}

const PhotoTiles: FC<PhotoTilesProps> = ({ name, tiles }) => {
    const navigate = useNavigate();

    const handleNavigateCreative = useCallback(() => {
        navigate("/creative")
    }, [navigate]);


    return (
        <section className={styles.tilesInfo} id={name}>
            <h2 className={styles.tilesTitle}>{name}</h2>

            <section className={styles.tiles}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                    <Tile />
                ))}
            </section>

            <Button className={styles.tilesShowMore} onClick={handleNavigateCreative}>Show more</Button>
        </section>
    )
};

export default PhotoTiles;