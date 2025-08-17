import styles from "./ShootingStars.module.scss";

const ShootingStars = () => {
    const stars = Array.from({ length: 20 });

    return (
        <div className={styles.container}>
            {stars.map((_, idx) => (
                <div key={idx} className={styles.shooting_star}></div>
            ))}
        </div>
    );
};

export default ShootingStars;
