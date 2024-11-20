const quizData = [
    {
      id: 1,
      question: "Which of these items can be recycled?",
      options: [
        { id: "a", text: "Plastic bottles", isCorrect: true },
        { id: "b", text: "Styrofoam", isCorrect: false },
        { id: "c", text: "Food waste", isCorrect: false },
        { id: "d", text: "Used tissues", isCorrect: false }
      ],
      xpReward: 10,
    },
    {
      id: 2,
      question: "What does the 'Mobius Loop' symbol indicate?",
      options: [
        { id: "a", text: "Biodegradable", isCorrect: false },
        { id: "b", text: "Reusable", isCorrect: false },
        { id: "c", text: "Recyclable", isCorrect: true },
        { id: "d", text: "Compostable", isCorrect: false }
      ],
      xpReward: 15,
    },
    {
      id: 3,
      question: "Which bin should glass bottles go into?",
      options: [
        { id: "a", text: "Blue bin", isCorrect: false },
        { id: "b", text: "Green bin", isCorrect: true },
        { id: "c", text: "Red bin", isCorrect: false },
        { id: "d", text: "Yellow bin", isCorrect: false }
      ],
      xpReward: 10,
    },
    {
      id: 4,
      question: "How many times can aluminum be recycled?",
      options: [
        { id: "a", text: "Once", isCorrect: false },
        { id: "b", text: "5 times", isCorrect: false },
        { id: "c", text: "10 times", isCorrect: false },
        { id: "d", text: "Infinite times", isCorrect: true }
      ],
      xpReward: 20,
    }
  ];

  module.exports = quizData