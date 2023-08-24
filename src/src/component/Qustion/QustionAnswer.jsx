import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuestionAnswer = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch('../../../public/questionData.json')
      .then(res => res.json())
      .then(data => {
        setAnswers(data);
      });
  }, []);

  const questionAnswer = answers.find(answer => answer.id === parseInt(id));

  return (
    <div>
      {questionAnswer && (
        <div>
          <h1>{questionAnswer.title}</h1>
          <p>{questionAnswer.body}</p>
          <div>
            <h2>Answers:</h2>
            {questionAnswer.answers.length > 0 ? (
              <ul>
                {questionAnswer.answers.map((answer, index) => (
                  <li key={index}>
                    <p>{answer.comments}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No answers yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;
