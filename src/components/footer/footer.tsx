import { Link, useLocation } from "react-router-dom";
import styles from "./footer.module.css";

import inst from "../../assets/images/socials/inst.png";
import medium from "../../assets/images/socials/medium.png";
import yt from "../../assets/images/socials/yt.png";

import Marquee from "../marquee/marquee";

const Footer = () => {
    const location = useLocation();

    return (
        <footer>
            {location.pathname === "/" && <Marquee />}
            <section className={styles.contents}>
                <div className={styles.socialNetworks}>
                    <img src={yt} alt="" />
                    <img src={inst} alt="" />
                    <a href="https://medium.com/@hygy_magazine" target="_blank">
                        <img src={medium} alt="" />
                    </a>
                </div>

                <div className={styles.externalLinks}>
                    <Link to={"/career"}>career</Link>
                    <Link to={"/contacts"}>contacts</Link>
                    <Link to={"/about-us"}>about us</Link>
                    <Link to={"/privacy-policy"}>privacy policy</Link>
                </div>
            </section>
        </footer>
    )
};

export default Footer;