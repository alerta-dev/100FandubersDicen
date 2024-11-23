import React, { useState } from 'react';
import { X, Check, RefreshCw } from 'lucide-react';
import { Question, Answer } from '../data/questions';
import { useSound } from '../hooks/useSound';

interface GameBoardProps {
  question: Question;
  onScoreUpdate: (team: 'left' | 'right', points: number) => void;
}

export default function GameBoard({ question, onScoreUpdate }: GameBoardProps) {
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());
  const [strikes, setStrikes] = useState<number>(0);
  const [currentTeam, setCurrentTeam] = useState<'left' | 'right'>('left');
  const { playSound } = useSound();

  const revealAnswer = (index: number, answer: Answer) => {
    if (!revealedAnswers.has(index)) {
      setRevealedAnswers(new Set([...revealedAnswers, index]));
      onScoreUpdate(currentTeam, answer.points);
      playSound('correct');
      playSound('reveal');
    }
  };

  const addStrike = () => {
    playSound('wrong');
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    if (newStrikes >= 3) {
      setCurrentTeam(currentTeam === 'left' ? 'right' : 'left');
      setStrikes(0);
    }
  };

  const resetGame = () => {
    setRevealedAnswers(new Set());
    setStrikes(0);
    setCurrentTeam('left');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-blue-900 rounded-lg shadow-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">{question.text}</h2>
        
        <div className="grid gap-4">
          {question.answers.map((answer, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg p-4 flex justify-between items-center"
            >
              <div className="text-2xl font-bold text-white w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
                {index + 1}
              </div>
              
              {revealedAnswers.has(index) ? (
                <div className="flex-1 mx-4">
                  <p className="text-2xl text-white font-bold text-center">{answer.text}</p>
                </div>
              ) : (
                <div className="flex-1 mx-4">
                  <div className="h-8 bg-blue-600 rounded animate-pulse"></div>
                </div>
              )}
              
              {revealedAnswers.has(index) ? (
                <div className="text-2xl font-bold text-yellow-300 w-20 text-center">
                  {answer.points}
                </div>
              ) : (
                <button
                  onClick={() => revealAnswer(index, answer)}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  Revelar
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  i < strikes ? 'bg-red-500' : 'bg-gray-700'
                }`}
              >
                <X className="text-white" size={24} />
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={addStrike}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <X size={20} /> Error
            </button>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <RefreshCw size={20} /> Reiniciar
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xl text-white">
            Turno del equipo: {' '}
            <span className="font-bold text-yellow-300">
              {currentTeam === 'left' ? 'Izquierdo' : 'Derecho'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}