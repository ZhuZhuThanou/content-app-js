import styles from '../styles/QuizCard.module.css';

function QuizCard() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Do you expect to work when you reached 18?</h2>
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
                <label htmlFor="textAnswer" className={styles.textInputLabel}>If no, at what age?</label>
                <input type="number" id="textAnswer" name="textAnswer" placeholder="Enter your age here" className={styles.textInput} />
            </div>

        </div>
    );
}

export default QuizCard;
