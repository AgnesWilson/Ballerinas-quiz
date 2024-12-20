import questions from './quizQuestions.ts';

let i = 1;

questions.forEach((check) => {
    if (check.answerOptionA === check.correctAnswer) {
        console.log(i);
        i ++;
    } else if (check.answerOptionB === check.correctAnswer) {
        console.log(i);
        i++;
    } else if (check.answerOptionC === check.correctAnswer) {
        console.log(i);
        i++;
    } else {
        console.log('Found mistake');
    }

});
