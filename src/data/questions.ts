export interface Answer {
  text: string;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Fandubs mas comunes en la comunidad",
    answers: [
      { text: "Helluva Boss", points: 35 },
      { text: "Hazbin Hotel", points: 25 },
      { text: "Kimetsu No Yaiba", points: 15 },
      { text: "Digital Circus", points: 12 },
      { text: "Boku No Hero", points: 8 },
      { text: "five nights at freddy's", points: 5 },
    ],
  },
  {
    id: 2,
    text: "Nombra un lugar donde la gente odia hacer fila",
    answers: [
      { text: "Banco", points: 30 },
      { text: "Supermercado", points: 25 },
      { text: "Hospital", points: 20 },
      { text: "Oficinas de gobierno", points: 15 },
      { text: "Baño público", points: 10 },
    ],
  },
];
