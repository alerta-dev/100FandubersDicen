import React from 'react';
import { Trophy } from 'lucide-react';

interface ScoreBoardProps {
  leftScore: number;
  rightScore: number;
}

export default function ScoreBoard({ leftScore, rightScore }: ScoreBoardProps) {
  return (
    <div className="flex justify-between items-center max-w-4xl mx-auto mb-8 px-6">
      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 w-64">
        <h3 className="text-xl text-white mb-2">Equipo Izquierdo</h3>
        <div className="text-4xl font-bold text-yellow-300 flex items-center justify-center gap-2">
          <Trophy size={32} />
          {leftScore}
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg p-6 w-64">
        <h3 className="text-xl text-white mb-2">Equipo Derecho</h3>
        <div className="text-4xl font-bold text-yellow-300 flex items-center justify-center gap-2">
          <Trophy size={32} />
          {rightScore}
        </div>
      </div>
    </div>
  );
}