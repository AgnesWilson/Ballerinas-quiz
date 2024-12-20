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
        questionText: 'Vad betyder namnet Ballerina?',
        answerOptionA: 'Ett dansande kex',
        answerOptionB: 'Elegans och lätthet',
        answerOptionC: 'Inget, det är ett släkt namn',
        correctAnswer: 'Elegans och lätthet',
        isPlayed: false,
    },

    {
        id: 11,
        questionText: 'Vilken typ av kex är Ballerina?',
        answerOptionA: 'En fylld kaka',
        answerOptionB: 'En småkaka',
        answerOptionC: 'Ett flarna v något slag',
        correctAnswer: 'En fylld kaka',
        isPlayed: false,
    },

    {
        id: 12,
        questionText: 'Vad var speciellt med Ballerina Kladdkaka?',
        answerOptionA: 'Den har extra mycket fyllning',
        answerOptionB: 'Den är rundare än andra Ballerina kex',
        answerOptionC: 'Den smakar kladdkaka',
        correctAnswer: 'Den smakar kladdkaka',
        isPlayed: false,
    },

    {
        id: 13,
        questionText: 'Vilken av följande var aldrig en Ballerina smak?',
        answerOptionA: 'Blåbär',
        answerOptionB: 'Lakrits',
        answerOptionC: 'Kola',
        correctAnswer: 'Lakrits',
        isPlayed: false,
    },

    {
        id: 14,
        questionText: 'Vad gör att kexen inte smular så lätt?',
        answerOptionA: 'De har en anti-smulbeläggning.',
        answerOptionB: 'Karlssons Klister',
        answerOptionC: 'De är bakade med en unik teknik',
        correctAnswer: 'De är bakade med en unik teknik',
        isPlayed: false,
    },

    {
        id: 15,
        questionText: 'Heter det Ballerina kex eller Ballerina kex?',
        answerOptionA: 'K-ex',
        answerOptionB: 'Kex',
        answerOptionC: 'Kjecks',
        correctAnswer: 'Kex',
        isPlayed: false,
    },

    {
        id: 16,
        questionText: 'Vad är en typisk Ballerina pick-up line?',
        answerOptionA: 'Tjena kexet, sitter du här och smular?',
        answerOptionB: 'Utan dig känner jag mig halvfylld.',
        answerOptionC: 'Gillar du hasselnötskräm, dårå?',
        correctAnswer: 'Tjena kexet, sitter du här och smular?',
        isPlayed: false,
    },

    {
        id: 17,
        questionText: 'Hur förvarar du bäst dina Ballerina kex?',
        answerOptionA: 'Höger innerficka',
        answerOptionB: 'Handskfacket',
        answerOptionC: 'Förvara??',
        correctAnswer: 'Förvara??',
        isPlayed: false,
    },

    {
        id: 18,
        questionText: 'Hur tar man bäst isär ett Ballerina kex?',
        answerOptionA: 'Vrider motsols',
        answerOptionB: 'Vrider medsols',
        answerOptionC: 'Rattar liksom fram och tillbaka',
        correctAnswer: 'Rattar liksom fram och tillbaka',
        isPlayed: false,
    },

    {
        id: 19,
        questionText: 'Ballerina är också namnet på...',
        answerOptionA: 'Et programmeringsspråk',
        answerOptionB: 'En katt sort från Mongoliet',
        answerOptionC: 'Piskan som lejontämjare använder',
        correctAnswer: 'Et programmeringsspråk',
        isPlayed: false,
    },

    {
        id: 20,
        questionText: 'Ballerina är också namnet på...',
        answerOptionA: 'Et programmeringsspråk',
        answerOptionB: 'En katt sort från Mongoliet',
        answerOptionC: 'Piskan som lejontämjare använder',
        correctAnswer: 'Et programmeringsspråk',
        isPlayed: false,
    },


];

export default questions;