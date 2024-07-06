import { Link } from "react-router-dom";
import styles from "../styles/CallToAction.module.css";
import Button from "./Button";

const CallToAction=()=> {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroAction}>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <div className={styles.heroText}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                        doloremque dignissimos molestiae beatae labore, harum accusantium
                        nesciunt officiis non similique.
                        </p>
                    </div>
                    <Link to="/reservations">
                        <Button>Reserve a table</Button>
                    </Link>
                </div>
                <div className={styles.heroImg}>
                    <img src={`${process.env.PUBLIC_URL}/restaurant-food.jpg`} alt="restaurant-food"/>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;