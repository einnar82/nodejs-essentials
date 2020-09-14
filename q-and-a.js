const collectAnswers = require('./lib/collectAnswers');

const questions = [
    'what is your name? ',
    'what are you doing? ',
    'what is your preferred programming language? '
];


const answerEvents = collectAnswers(questions, answers => {
    console.log('Thank you for the answers!')
    console.log(`The answers are ${answers.join()}`)
    process.exit();
})

answerEvents.on('answer', answer => {
    console.log(`question answered: ${answer}`)
})

answerEvents.on('complete', answers => {
    process.exit();
})