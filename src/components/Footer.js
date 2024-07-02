import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.css";

const Footer=()=> {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <img src="/Logo-white.png" alt=""/>
                </div>
                <ul>
                    <h3>NAVIGATION</h3>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/order">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
                <ul>
                    <h3>Contact Us</h3>
                    <li>123 Main Street, Chicago, Illinios</li>
                    <li>0123-4567-89</li>
                    <li>littlelemon@restaurant.com</li>
                </ul>
                <ul>
                    <h3>Follow Us</h3>
                    <div className={styles.footerLinks}>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon size="2x" icon={faFacebookSquare}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon size="2x" icon={faTwitterSquare}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon size="2x" icon={faInstagramSquare}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon size="2x" icon={faPinterestSquare}/>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
