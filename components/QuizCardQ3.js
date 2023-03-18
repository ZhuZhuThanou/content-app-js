import styles from '../styles/QuizCard.module.css';

function QuizCard3() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>3. What type of card do you like?</h2>
            <div className={styles.answerContainer}>
                <label htmlFor="select" className={styles.selectLabel}>Select a type:</label>
                <select className={styles.select}>
                    <option value="">Select a type</option>
                    <option value="option1">Sadan</option>
                    <option value="option3">Sports car</option>
                    <option value="option2">SUV</option>
                    <option value="option3">Truck</option>
                </select>
            </div>

        </div>
    );
}

export default QuizCard3;
