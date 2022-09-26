import React, { useContext, useState } from 'react';
import QuestionContext from '../../context/questionContext';
import { Button, Progress } from 'antd';
import Question from '../../components/Question';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import './styles.css';

export const Quiz = () => {
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
  const [optionsSelected, setOptionsSelected] = useState({});
  const { questions, isLoading, setAnswers } = useContext(QuestionContext);

  const handleSubmitAnswers = () => {
    setAnswers(optionsSelected);
  };

  const isQuizComplete =
    Object.values(optionsSelected).length === questions?.length;
  return (
    <div className='containerQuiz'>
      <div className='headerContainerQuiz'>
        <span className='headerContentQuiz'> Teste vocacional</span>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Question
            question={questions?.[currentIndexQuestion]}
            chosenOption={optionsSelected[currentIndexQuestion]}
            handleChosenOption={(value) =>
              setOptionsSelected({
                ...optionsSelected,
                [currentIndexQuestion]: value,
              })
            }
          />
          <div className='footerContent-Question'>
            <div className='progressBarContent-Question'>
              <span className='progressBarLabel-Question'>{`${
                currentIndexQuestion + 1
              } de ${questions?.length}`}</span>
              <div className='progressBarLine-Question'>
                <Progress
                  percent={
                    (100 / (questions?.length ?? 1)) *
                    (currentIndexQuestion + 1)
                  }
                  strokeColor='#726FFF'
                  trailColor='#15193C'
                  showInfo={false}
                />
              </div>
            </div>
            <div className='buttonsContent-Question'>
              {currentIndexQuestion !== 0 ? (
                <Button
                  onClick={() =>
                    setCurrentIndexQuestion(currentIndexQuestion - 1)
                  }
                >
                  <div className='backButton-Question'>
                    <span>{'<'}</span>
                    <label>Voltar</label>
                  </div>
                </Button>
              ) : (
                <div />
              )}
              {!(currentIndexQuestion === questions?.length - 1) ? (
                <Button
                  onClick={() =>
                    setCurrentIndexQuestion(currentIndexQuestion + 1)
                  }
                  disabled={!optionsSelected[currentIndexQuestion]}
                >
                  <div
                    className='nextButton-Question'
                    style={{ display: currentIndexQuestion === questions?.length - 1 && 'none' }}
                  >
                    <span>Avançar</span>
                    <label>{'>'}</label>
                  </div>
                </Button>
              ) : (
                <Link to='/quiz-completed' style={{ textDecoration: 'none' }}>
                  <Button onClick={handleSubmitAnswers} disabled={!isQuizComplete}>
                    <div className='finishButton-Question'>
                      <span>Concluir teste</span>
                    </div>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
