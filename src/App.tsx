import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import { questions } from './data/questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  const handleScoreUpdate = (team: 'left' | 'right', points: number) => {
    if (team === 'left') {
      setLeftScore(prev => prev + points);
    } else {
      setRightScore(prev => prev + points);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 py-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-8">
          100 Mexicanos Dijeron
        </h1>

        <ScoreBoard leftScore={leftScore} rightScore={rightScore} />
        
        <GameBoard
          question={questions[currentQuestionIndex]}
          onScoreUpdate={handleScoreUpdate}
        />

        <div className="text-center mt-8">
          <button
            onClick={nextQuestion}
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-xl font-bold transition-colors"
          >
            Siguiente Pregunta
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;