interface IQuizQuestions {
  id: number;
  questionText: string;
  answerOptionA: string;
  answerOptionB: string;
  answerOptionC: string;
  correctAnswer: string;
  isPlayed: boolean;
}

// Takes input: Question Array
// Returns: Question Array
export function getRandomQuestions(questionsArray: IQuizQuestions[]): IQuizQuestions[] {
  const allPlayed = questionsArray.every(question => question.isPlayed); 
  // Checks if all questions are played = true and then returns true if that's the case. 
  // So allPlayed will = true if every question has been played.

  if (allPlayed) {
    // Reset all questions to unplayed
    questionsArray.forEach(question => {
      question.isPlayed = false;
    });
  }
  // Takes all question that are not played = true
  const availableQuestions = questionsArray.filter(question => !question.isPlayed); 
  // Shuffles the questions so they are random
  const shuffledQuestions = availableQuestions.sort(() => Math.random() - 0.5); 
  // Takes 10 questions from the shuffled array
  const selectedQuestions = shuffledQuestions.slice(0, 10); 
    selectedQuestions.forEach((question) => { 
      // Marks the selected questions as played = true
        question.isPlayed = true; 
    });
    
    return selectedQuestions;
}