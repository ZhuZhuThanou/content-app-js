import React, { useState } from 'react';
import AppStateContext from './AppStateContext';

// JS hoisting means variable needs to defined in order
const question01Answer01Tasks = [{
    id: 1,
    answerId: 'q01a01',
    title: 'How to travel safely',
    description: "Traveling can be a wonderful experience, but it's important to prioritize safety while on the go. There are several measures you can take to ensure you travel safely. Firstly, research your destination ahead of time and become familiar with any potential safety concerns such as high crime rates or areas to avoid. Always keep your belongings close to you and secure, especially in crowded areas or public transportation. Consider investing in a money belt or other anti-theft device to keep your valuables safe. When using public transportation, be aware of your surroundings and avoid falling asleep or becoming too distracted by your phone or other devices. Additionally, make sure to keep important documents such as your passport and travel insurance in a secure location, and keep digital copies of these documents in case of emergency. Finally, it's always a good idea to stay in touch with friends or family back home and inform them of your travel plans and itinerary. By taking these precautions and being mindful of your surroundings, you can ensure a safe and enjoyable travel experience.",
    links: ['http://url.com']
},
{
    id: 2,
    answerId: 'q01a01',
    title: 'Budget travels allow you to experience more!',
    description: "<b>Budget travel</b> can be a great way to experience more culture and immerse yourself in the local way of life. When you travel on a tight budget, you tend to stay in less touristy areas and eat at local restaurants, which allows you to interact more with the locals and experience their way of life. You can also explore the local markets and shops, where you can find unique souvenirs and experience the daily life of the locals. Additionally, budget travel often involves using public transportation or walking, which gives you a chance to see more of the city or town and observe how the locals live. Overall, budget travel can provide a rich and authentic cultural experience that may not be possible when staying in high-end hotels and resorts.",
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
    selected: false,
    tasks: question01Answer01Tasks
}
const question01Answer02 = {
    id: 'q01a02',
    answerText: 'No',
    selected: false,
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


