import TestimonialItems from "./TestimonialItems";
import styles from "../styles/Testimonials.module.css";

const Testimonials=()=> {
    const testimonials=[
        {
            id: 1,
            name: "Maria Sanchez",
            image: `${process.env.PUBLIC_URL}/maria.jpg`,
            rating: 4.5,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
        },
        {
            id: 2,
            name: "Antony Clifton",
            image: `${process.env.PUBLIC_URL}/antony.jpg`,
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
        },
        {
            id: 3,
            name: "Tamika Jackson",
            image: `${process.env.PUBLIC_URL}/tamika.jpg`,
            rating: 4.5,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
        },
        {
            id: 4,
            name: "Brandon Ming",
            image: `${process.env.PUBLIC_URL}/brandon.jpg`,
            rating: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos veritatis quasi libero cupiditate labore",
        },
    ];
    return (
        <div className={styles.testimonials}>
            <div className={styles.testimonialsContainer}>
                <h2>What people say about us!</h2>
                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial)=> (
                        <TestimonialItems key={testimonial.id} testimonial={testimonial}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;