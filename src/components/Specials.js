import MealCard from "./MealCard";
import styles from "../styles/Specials.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Specials=()=> {
    const meals=[
        {
            id: 1,
            title: "Greek salad",
            image: `${process.env.PUBLIC_URL}/greek-salad.jpg`,
            price: 12.99,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
        },
        {
            id: 2,
            title: "Bruschetta",
            image: `${process.env.PUBLIC_URL}/bruschetta.jpg`,
            price: 5.99,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
        },
        {
            id: 3,
            title: "Lemon Dessert",
            image: `${process.env.PUBLIC_URL}/lemon-dessert.jpg`,
            price: 5.0,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
        },
    ];
    return (
        <div className={styles.specials}>
            <div className={styles.specialsContainer}>
                <div className={styles.specialsHeader}>
                    <h2>This weeks specials!</h2>
                    <Link to="/menu">
                        <Button>Online Menu</Button>
                    </Link>
                </div>
                <div className={styles.specialsGrid}>
                    {meals.map((meal)=>(
                        <MealCard key={meal.id} meal={meal}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Specials;