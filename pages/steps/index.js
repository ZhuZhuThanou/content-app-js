import Link from 'next/link';
import React, { useContext } from 'react';
import AppStateContext from '../../state/AppStateContext';
import Accordion from '@/components/Accordion';

import styles from '@../../styles/Steps.module.css';

export default function Quiz() {

    const { state, setState } = useContext(AppStateContext);
    console.log('at read tasks: ', state.tasks.length, state.tasks);
    return (
        <div className={styles.container}>
            <Link href="/quiz">
                <button className={`${styles.anchorButton}`}>Go back to quiz</button>
            </Link>
           {state.tasks.map((task) => (
             <Accordion key= {task.id} title = {task.title}>
                <div dangerouslySetInnerHTML={{__html: task.description}}></div>
             </Accordion>
           ))}
        </div>
    );
}