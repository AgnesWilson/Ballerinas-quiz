interface IQuizQuestions {
    id: number;
    questionText: string;
    answerOptionA: string;
    answerOptionB: string;
    answerOptionC: string;
    correctAnswer: string;
    isPlayed: boolean;
}

const questions: IQuizQuestions[] = [
    {
        id: 1,
        questionText: 'Vilket år lanserades Ballerina kexet?',
        answerOptionA: '1963',
        answerOptionB: '1973',
        answerOptionC: '1983',
        correctAnswer: '1973',
        isPlayed: false,
    },

    {
        id: 2,
        questionText: 'Vad är inte ett Ballerina kex?',
        answerOptionA: 'Singoalla',
        answerOptionB: 'Ballerina',
        answerOptionC: 'Ballerina',
        correctAnswer: 'Singoalla',
        isPlayed: false,
    },
    
    {
        id: 3,
        questionText: 'Vilket kex företag tillverkar Ballerina kexet?',
        answerOptionA: 'Marabou',
        answerOptionB: 'Göteborgs Kex',
        answerOptionC: 'Cloetta',
        correctAnswer: 'Göteborgs Kex',
        isPlayed: false,
    },

    {
        id: 4,
        questionText: 'Det första Ballerina kexet hade en smak av vad?',
        answerOptionA: 'Vanilj & choklad',
        answerOptionB: 'Hallon & Lakrits',
        answerOptionC: 'Choklad & Hasselnöt',
        correctAnswer: 'Choklad & Hasselnöt',
        isPlayed: false,
    },

    {
        id: 5,
        questionText: 'Vad är det unika med Ballerina kexets form?',
        answerOptionA: 'Det är hjärtformat',
        answerOptionB: 'Det har ett hål i mitten',
        answerOptionC: 'Det är trekantigt',
        correctAnswer: 'Det har ett hål i mitten',
        isPlayed: false,
    },

    {
        id: 6,
        questionText: 'Hur många Ballerina kex finns det i en vanlig förpackning?',
        answerOptionA: '12',
        answerOptionB: '18',
        answerOptionC: '24',
        correctAnswer: '18',
        isPlayed: false,
    },

    {
        id: 7,
        questionText: 'Vad heter Ballerina kexets onda amerikanska släkting?',
        answerOptionA: 'Arne',
        answerOptionB: 'Oreo',
        answerOptionC: 'Jaffa',
        correctAnswer: 'Oreo',
        isPlayed: false,
    },

    {
        id: 8,
        questionText: 'Vad är Ballerina kexets slogan?',
        answerOptionA: 'För den lilla stunden av njutning',
        answerOptionB: 'Lika god som den ser ut',
        answerOptionC: 'Perfekt för alla tillfällen',
        correctAnswer: 'För den lilla stunden av njutning',
        isPlayed: false,
    },

    {
        id: 9,
        questionText: 'Vilken är den äckligaste Ballerina smaken?',
        answerOptionA: 'Salt Vanilj',
        answerOptionB: 'Salt Vanilj',
        answerOptionC: 'Salt Vanilj',
        correctAnswer: 'Salt Vanilj',
        isPlayed: false,
    },

    {
        id: 10,
        questionText: 'Vad betyder namnet Ballerina',
        answerOptionA: 'Ett dansande kex',
        answerOptionB: 'Elegans och lätthet',
        answerOptionC: 'Inget, det är ett släkt namn',
        correctAnswer: 'Elegans och lätthet',
        isPlayed: false,
    },


];


/* ---------------Funktion för att testa att alla frågor ger ett korrekt svar. ---------------------

Rekommendation:  Om nya frågor läggs till, kör den funktion i terminalen för att testa att inga buggar finns.


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
*/



export default questions;

