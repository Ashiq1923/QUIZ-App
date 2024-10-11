import React, { useState } from 'react';

const questions = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
  { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "N2"], answer: "H2O" },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <h1 className='text-6xl underline p-3 mb-10 text-[white] ' >Result</h1>
         <div className='flex justify-center items-center  w-[30%] h-[50%] border-2 p-5 rounded-[10%] shadow-2xl bg-gradient-to-r from-green-500 to-red-500   '>
       <div className='p-4 ' >
       <h1 className="text-2xl font-bold mb-4 shadow-xl p-2 rounded-[20px]">Quiz Finished!</h1>
       <p className="text-lg shadow-xl rounded-[20px] p-1">Your score: {score} out of {questions.length}</p>
       </div>
</div>
  </div>

    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <h1 className='text-6xl underline p-3 mb-10 text-[white] ' >Quiz</h1>
     <div className=' w-[30%] h-[50%] border-2 p-5 rounded-[10%] shadow-2xl bg-gradient-to-r from-green-500 to-red-500 '>
      <h1 className="text-2xl font-bold mb-6  text-[yellow] underline shadow-2xl bg-none p-2 ">{questions[currentQuestion].question}</h1>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="flex justify-col w-[100%] bg-transparent-600 border-2 text-black  px-4 py-2 rounded hover:bg-yellow-300 transition duration-200 hover:p-3 hover:font-bold hover:text-[white]"
          >
            {option}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
