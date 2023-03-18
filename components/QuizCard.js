import styles from '../styles/QuizCard.module.css';

function QuizCard() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Quiz Title</h2>
            <p className={styles.question}>What is the capital city of France?</p>
            <div className={styles.answerContainer}>
                <div className={styles.options}>
                    <label htmlFor="option1" className={styles.optionLabel}>
                        <input type="radio" id="option1" name="answer" value="Paris" className={styles.radioInput} />
                        <span className={styles.radioLabel}>Paris</span>
                    </label>
                    <label htmlFor="option2" className={styles.optionLabel}>
                        <input type="radio" id="option2" name="answer" value="Berlin" className={styles.radioInput} />
                        <span className={styles.radioLabel}>Berlin</span>
                    </label>
                    <label htmlFor="option3" className={styles.optionLabel}>
                        <input type="radio" id="option3" name="answer" value="London" className={styles.radioInput} />
                        <span className={styles.radioLabel}>London</span>
                    </label>
                    <label htmlFor="option4" className={styles.optionLabel}>
                        <input type="radio" id="option4" name="answer" value="Madrid" className={styles.radioInput} />
                        <span className={styles.radioLabel}>Madrid</span>
                    </label>
                </div>
                <button className={styles.button}>Button 1</button>
                <label htmlFor="textAnswer" className={styles.textInputLabel}>Type your answer</label>
                <input type="text" id="textAnswer" name="textAnswer" placeholder="type your answer here" className={styles.textInput} />
                <label htmlFor="select" className={styles.selectLabel}>Select an Option:</label>
                <select className={styles.select}>
                    <option value="">Select an Option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

        </div>
    );
}

export default QuizCard;
