import styles from '../styles/QuizCard.module.css';

function QuizCardQ2() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>2. My age is...</h2>
            <div className={styles.answerContainer}>
                <button className={styles.button}>Below 18 years old</button>
                <button className={styles.button}>At 18 years old</button>
                <button className={styles.button}>Above 18 years old</button>
            </div>

        </div>
    );
}

export default QuizCardQ2;
