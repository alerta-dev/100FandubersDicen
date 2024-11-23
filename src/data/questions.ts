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
    text: "Nombra algo que la gente hace antes de irse a dormir",
    answers: [
      { text: "Lavarse los dientes", points: 35 },
      { text: "Ponerse pijama", points: 25 },
      { text: "Ver televisión", points: 15 },
      { text: "Rezar", points: 12 },
      { text: "Revisar el celular", points: 8 },
      { text: "Tomar agua", points: 5 },
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