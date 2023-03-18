import Link from 'next/link';

import QuizCardQ1 from '@/components/QuizCardQ1';
import QuizCardQ2 from '@/components/QuizCardQ2';
import QuizCardQ3 from '@/components/QuizCardQ3';
import QuizCardQ4 from '@/components/QuizCardQ4';

import styles from '@../../styles/Quiz.module.css';


export default function Quiz() {
    return (
        <div>
            <Link href="/">
                <button className={`${styles.anchorButton}`}>Go back to home</button>
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