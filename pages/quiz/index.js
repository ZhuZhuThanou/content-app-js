import Link from 'next/link';
import React, { useContext } from 'react';
import AppStateContext from '../../state/AppStateContext';

import QuizCardQ1 from '@/components/QuizCardQ1';
import QuizCardQ2 from '@/components/QuizCardQ2';
import QuizCardQ3 from '@/components/QuizCardQ3';
import QuizCardQ4 from '@/components/QuizCardQ4';

import styles from '@../../styles/Quiz.module.css';


export default function Quiz() {

    const { state, setState } = useContext(AppStateContext);

    return (
        <div>
            <Link href="/">
                <button className={`${styles.anchorButton}`}>Go back home</button>
            </Link>
            <Link href="/steps">
                <button className={`${styles.anchorButton}`}>Go steps</button>
            </Link>
            <div className={styles.container}>
                <QuizCardQ1 />
                <QuizCardQ2 />
                <QuizCardQ3 />
                <QuizCardQ4 />
            </div>
        </div>
    );
}