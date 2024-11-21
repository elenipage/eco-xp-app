const quizzes = [
    // Quiz 1
    [
      {
        id: 1,
        question: "Which of these items can be recycled?",
        options: [
          { id: "a", text: "Plastic bottles", isCorrect: true },
          { id: "b", text: "Styrofoam", isCorrect: false },
          { id: "c", text: "Food waste", isCorrect: false },
          { id: "d", text: "Used tissues", isCorrect: false },
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
          { id: "d", text: "Compostable", isCorrect: false },
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
          { id: "d", text: "Yellow bin", isCorrect: false },
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
          { id: "d", text: "Infinite times", isCorrect: true },
        ],
        xpReward: 20,
      },
    ],
  
    // Quiz 2
    [
      {
        id: 1,
        question: "What does the 'green dot' recycling symbol represent?",
        options: [
          { id: "a", text: "Compostable", isCorrect: false },
          { id: "b", text: "Recyclable", isCorrect: false },
          { id: "c", text: "Part of a recycling program", isCorrect: true },
          { id: "d", text: "Made of biodegradable materials", isCorrect: false },
        ],
        xpReward: 15,
      },
      {
        id: 2,
        question: "Which type of plastic is the easiest to recycle?",
        options: [
          { id: "a", text: "PET (Plastic #1)", isCorrect: true },
          { id: "b", text: "PVC (Plastic #3)", isCorrect: false },
          { id: "c", text: "LDPE (Plastic #4)", isCorrect: false },
          { id: "d", text: "PS (Plastic #6)", isCorrect: false },
        ],
        xpReward: 20,
      },
      {
        id: 3,
        question: "What should you do before recycling cardboard boxes?",
        options: [
          { id: "a", text: "Remove all tape and stickers", isCorrect: true },
          { id: "b", text: "Rinse them", isCorrect: false },
          { id: "c", text: "Leave them as is", isCorrect: false },
          { id: "d", text: "Soak them in water", isCorrect: false },
        ],
        xpReward: 10,
      },
      {
        id: 4,
        question: "Which of these materials is NOT recyclable curbside?",
        options: [
          { id: "a", text: "Aluminum cans", isCorrect: false },
          { id: "b", text: "Glass jars", isCorrect: false },
          { id: "c", text: "Plastic bags", isCorrect: true },
          { id: "d", text: "Cardboard", isCorrect: false },
        ],
        xpReward: 10,
      },
    ],
  
    // Quiz 3
    [
      {
        id: 1,
        question: "What is the first step in the recycling process?",
        options: [
          { id: "a", text: "Melting down materials", isCorrect: false },
          { id: "b", text: "Sorting waste", isCorrect: true },
          { id: "c", text: "Transporting materials", isCorrect: false },
          { id: "d", text: "Crushing materials", isCorrect: false },
        ],
        xpReward: 15,
      },
      {
        id: 2,
        question: "What happens to recycled paper?",
        options: [
          { id: "a", text: "It becomes compost", isCorrect: false },
          { id: "b", text: "It is turned into new paper products", isCorrect: true },
          { id: "c", text: "It is burned for energy", isCorrect: false },
          { id: "d", text: "It is stored in landfills", isCorrect: false },
        ],
        xpReward: 10,
      },
      {
        id: 3,
        question: "Which of these is an example of upcycling?",
        options: [
          { id: "a", text: "Turning old jeans into a tote bag", isCorrect: true },
          { id: "b", text: "Recycling paper into new paper", isCorrect: false },
          { id: "c", text: "Melting down glass bottles", isCorrect: false },
          { id: "d", text: "Using biodegradable bags", isCorrect: false },
        ],
        xpReward: 20,
      },
      {
        id: 4,
        question: "What is a circular economy?",
        options: [
          { id: "a", text: "An economy that relies on renewable energy", isCorrect: false },
          { id: "b", text: "An economic system focused on reducing waste", isCorrect: true },
          { id: "c", text: "A trade system between circular nations", isCorrect: false },
          { id: "d", text: "A way to improve product transport", isCorrect: false },
        ],
        xpReward: 15,
      },
    ],
  ];
  
  module.exports = quizzes;
  