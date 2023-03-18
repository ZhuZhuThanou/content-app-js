import styles from '../styles/QuizCard.module.css';

function QuizCardQ1() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>1. Do you want to travel?</h2>
            <p className={styles.question}>What is the capital city of France?</p>
            <div className={styles.answerContainer}>
                <div className={styles.options}>
                    <label htmlFor="option1" className={styles.optionLabel}>
                        <input type="radio" id="option1" name="answer" value="Paris" className={styles.radioInput} />
                        <span className={styles.radioLabel}>Yes</span>
                    </label>
                    <label htmlFor="option2" className={styles.optionLabel}>
                        <input type="radio" id="option2" name="answer" value="Berlin" className={styles.radioInput} />
                        <span className={styles.radioLabel}>No</span>
                    </label>
                </div>
            </div>

        </div>
    );
}

export default QuizCardQ1;
