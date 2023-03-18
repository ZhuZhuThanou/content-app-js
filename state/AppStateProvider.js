import React, { useState } from 'react';
import AppStateContext from './AppStateContext';

// JS hoisting means variable needs to defined in order
const question01Answer01Tasks = [{
    id: 1,
    answerId: 'q01a01',
    title: 'How to travel safely',
    description: 'Description of traveling safely',
    links: ['http://url.com']
},
{
    id: 2,
    answerId: 'q01a01',
    title: 'How to travel safely',
    description: 'Description of traveling safely',
    links: ['http://url.com']
}];

const question01Answer02Tasks = [{
    id: 3,
    answerId: 'q01a02',
    title: 'Stay home is best',
    description: 'Description stay home is best',
    link: ['http://url.com']
}];

const question01Answer01 = {
    id: 'q01a01',
    answerText: 'Yes',
    tasks: question01Answer01Tasks
}
const question01Answer02 = {
    id: 'q01a02',
    answerText: 'No',
    tasks: question01Answer02Tasks
}

const question01 = {
    id: 'q01',
    question: '1. Do you want to travel?',
    answers: [question01Answer01, question01Answer02]
};

const quizzes = [question01];



const tasks = [{
    id: 4,
    answerId: 'default01',
    title: 'Default task 01',
    description: 'Description of default task 01',
    links: ['http://url.com']
}];

/**** end of define data model ****/

function AppStateProvider(props) {
    const [state, setState] = useState({
        // your app-wide state goes here
        message: "hello world",
        quizzes,
        tasks,
        clearTasks: (...args) => {
            const currentTasks = [...tasks];
            console.log('remove task ids', args);
            return currentTasks.filter(task => {
                return !args.includes(task.answerId); // only take items not in arguments
            });
        }
    });

    return (
        <AppStateContext.Provider value={{ state, setState }}>
            {props.children}
        </AppStateContext.Provider>
    );
}

export default AppStateProvider;


