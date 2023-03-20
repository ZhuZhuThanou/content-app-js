import React, { useContext } from 'react';
import AppStateContext from '../state/AppStateContext';

import styles from '../styles/QuizCard.module.css';

function QuizCardQ1() {
    const { state, setState } = useContext(AppStateContext);
    const question1 = state.quizzes[0];
    const answer1 = question1.answers[0];
    const answer2 = question1.answers[1];

    console.log('answer 1 tasks are...', answer1.tasks);
    const handleOptionChanged = (event) => {
        const selectedAnswerId = event.target.value;
        const newState = {...state};
        let trimmedTaskList = [];
        let answerTasks = [];
        if (selectedAnswerId === answer2.id) {
            trimmedTaskList = state.clearTasks(answer1.id); // remove answer 1 task from
            answerTasks = answer2.tasks;  // add answer 2 tasks
            newState.quizzes[0].answers[1].selected = true;
            newState.quizzes[0].answers[0].selected = false;
        } else {
            trimmedTaskList = state.clearTasks(answer2.id); // remove answer 2 task from
            answerTasks = answer1.tasks;  // add answer 1 tasks
            newState.quizzes[0].answers[1].selected = false;
            newState.quizzes[0].answers[0].selected = true;
        }
        newState.tasks = trimmedTaskList.concat(answerTasks);
        console.log('new tasks to add', answerTasks, newState.tasks);
        setState(newState);
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{question1.question}</h2>
            <div className={styles.answerContainer}>
                <div className={styles.options}>
                    <label className={styles.optionLabel}>
                        <input type="radio" id={answer1.id} name="answer" value={answer1.id} 
                            checked={answer1.selected} className={styles.radioInput} onChange={handleOptionChanged} />
                        <span className={styles.radioLabel}>{answer1.answerText}</span>
                    </label>
                    <label className={styles.optionLabel}>
                        <input type="radio" id={answer2.id} name="answer" value={answer2.id} 
                        checked={answer2.selected} className={styles.radioInput} onChange={handleOptionChanged}/>
                        <span className={styles.radioLabel}>{answer2.answerText}</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default QuizCardQ1;
