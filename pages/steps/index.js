import Link from 'next/link';
import React, { useContext } from 'react';
import AppStateContext from '../../state/AppStateContext';


import styles from '@../../styles/Quiz.module.css';


export default function Quiz() {

    const { state, setState } = useContext(AppStateContext);
    console.log('at read tasks: ', state.tasks.length, state.tasks);
    return (
        <div>
            <Link href="/quiz">
                <button className={`${styles.anchorButton}`}>Go back to quiz</button>
            </Link>
           {state.tasks.map((task) => (
            <div  key={task.id}>{task.title}</div>
           ))}
        </div>
    );
}