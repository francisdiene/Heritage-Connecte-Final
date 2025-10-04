// frontend/src/components/Quiz.js

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Quiz = ({ quizData }) => {
    const { currentLang } = useLanguage();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const questionKey = `question_${currentLang.toUpperCase()}`;
    const answersKey = `answers_${currentLang.toUpperCase()}`;
    const question = quizData[questionKey] || 'Question non disponible';
    const answers = quizData[answersKey] || [];

    const handleSubmit = (index) => {
        setSelectedAnswer(index);
        setShowResult(true);
    };

    return (
        <div className="quiz-container" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
            <h3>Le Coin de l'Apprenti : Testez vos connaissances !</h3>
            <h4>{question}</h4>
            
            <div className="answers-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                {answers.map((answer, index) => {
                    const isCorrect = index === quizData.correct_index;
                    const isSelected = index === selectedAnswer;
                    
                    let style = { padding: '10px', borderRadius: '5px', border: '1px solid #ccc', cursor: 'pointer' };
                    if (showResult && isSelected) {
                        style.backgroundColor = isCorrect ? '#28a745' : '#dc3545';
                        style.color = 'white';
                    } else if (showResult && isCorrect) {
                        style.backgroundColor = '#d4edda'; 
                    }

                    return (
                        <button 
                            key={index} 
                            onClick={() => handleSubmit(index)}
                            disabled={showResult} 
                            style={style}
                        >
                            {answer}
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
                    {selectedAnswer === quizData.correct_index 
                        ? 'Félicitations ! Bonne réponse.' 
                        : `Dommage, la bonne réponse est : ${answers[quizData.correct_index]}`}
                </p>
            )}
        </div>
    );
};

export default Quiz;