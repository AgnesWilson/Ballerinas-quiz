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
    questionText: 'Vilket år lanserades Ballerinakexet?',
    answerOptionA: '1963',
    answerOptionB: '1973',
    answerOptionC: '1983',
    correctAnswer: '1973',
    isPlayed: false,
  },

  {
    id: 2,
    questionText: 'Vad är inte ett Ballerinakex?',
    answerOptionA: 'Singoalla',
    answerOptionB: 'Ballerina',
    answerOptionC: 'Ballerina',
    correctAnswer: 'Singoalla',
    isPlayed: false,
  },

  {
    id: 3,
    questionText: 'Vilket kexföretag tillverkar Ballerinakexet?',
    answerOptionA: 'Marabou',
    answerOptionB: 'Göteborgs Kex',
    answerOptionC: 'Cloetta',
    correctAnswer: 'Göteborgs Kex',
    isPlayed: false,
  },

  {
    id: 4,
    questionText: 'Det första Ballerinakexet hade en smak av vad?',
    answerOptionA: 'Vanilj & choklad',
    answerOptionB: 'Hallon & Lakrits',
    answerOptionC: 'Choklad & Hasselnöt',
    correctAnswer: 'Choklad & Hasselnöt',
    isPlayed: false,
  },

  {
    id: 5,
    questionText: 'Vad är det unika med Ballerinakexets form?',
    answerOptionA: 'Det är hjärtformat',
    answerOptionB: 'Det har ett hål i mitten',
    answerOptionC: 'Det är trekantigt',
    correctAnswer: 'Det har ett hål i mitten',
    isPlayed: false,
  },

  {
    id: 6,
    questionText: 'Hur många Ballerinakex finns det i en vanlig förpackning?',
    answerOptionA: '12',
    answerOptionB: '18',
    answerOptionC: '24',
    correctAnswer: '18',
    isPlayed: false,
  },

  {
    id: 7,
    questionText: 'Vad heter Ballerinakexets onda amerikanska släkting?',
    answerOptionA: 'Arne',
    answerOptionB: 'Oreo',
    answerOptionC: 'Jaffa',
    correctAnswer: 'Oreo',
    isPlayed: false,
  },

  {
    id: 8,
    questionText: 'Vad är Ballerinakexets slogan?',
    answerOptionA: 'För den lilla stunden av njutning',
    answerOptionB: 'Lika god som den ser ut',
    answerOptionC: 'Perfekt för alla tillfällen',
    correctAnswer: 'För den lilla stunden av njutning',
    isPlayed: false,
  },

  {
    id: 9,
    questionText: 'Vilken är den äckligaste Ballerinasmaken?',
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
    answerOptionC: 'Inget, det är ett släktnamn',
    correctAnswer: 'Elegans och lätthet',
    isPlayed: false,
  },

  {
    id: 11,
    questionText: 'Vilken typ av kex är Ballerina?',
    answerOptionA: 'En fylld kaka',
    answerOptionB: 'En småkaka',
    answerOptionC: 'Ett flarn av något slag',
    correctAnswer: 'En fylld kaka',
    isPlayed: false,
  },

  {
    id: 12,
    questionText: 'Vad var speciellt med Ballerina Kladdkaka?',
    answerOptionA: 'Den har extra mycket fyllning',
    answerOptionB: 'Den är rundare än andra Ballerinakex',
    answerOptionC: 'Den smakar kladdkaka',
    correctAnswer: 'Den smakar kladdkaka',
    isPlayed: false,
  },

  {
    id: 13,
    questionText: 'Vilken av följande var aldrig en Ballerinasmak?',
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
    questionText: 'Heter det Ballerinakex eller Ballerinakex?',
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
    questionText: 'Hur förvarar du bäst dina Ballerinakex?',
    answerOptionA: 'Höger innerficka',
    answerOptionB: 'Handskfacket',
    answerOptionC: 'Förvara??',
    correctAnswer: 'Förvara??',
    isPlayed: false,
  },

  {
    id: 18,
    questionText: 'Hur tar man bäst isär ett Ballerinakex?',
    answerOptionA: 'Vrider motsols',
    answerOptionB: 'Vrider medsols',
    answerOptionC: 'Rattar liksom fram och tillbaka',
    correctAnswer: 'Rattar liksom fram och tillbaka',
    isPlayed: false,
  },

  {
    id: 19,
    questionText: 'Ballerina är också namnet på...',
    answerOptionA: 'Ett programmeringsspråk',
    answerOptionB: 'En kattsort från Mongoliet',
    answerOptionC: 'Piskan som lejontämjare använder',
    correctAnswer: 'Ett programmeringsspråk',
    isPlayed: false,
  },

  {
    id: 20,
    questionText: 'Hur ska man plantera Ballerinapotatis?',
    answerOptionA: '5-7 mm radavstånd',
    answerOptionB: '5-15 m radavstånd',
    answerOptionC: '50-70 cm radavstånd',
    correctAnswer: '50-70 cm radavstånd',
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
