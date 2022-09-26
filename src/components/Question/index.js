import React from 'react';
import './styles.css';

const Question = ({
  question,
  chosenOption,
  handleChosenOption,
}) => {

  return (
    <div className='question-component'>
      <link
        href='https://fonts.googleapis.com/css?family=Montserrat:500,600,700'
        rel='stylesheet'
      ></link>

      <div className='title-container'>
        <p> {question?.title} </p>
      </div>

      <div className='answers-container'>
        {question?.options.map((item, index) => {
          return (
            <button
              key={JSON.stringify(item)}
              onClick={() => {
                handleChosenOption(item.value);
              }}
              className={
                item.value === chosenOption
                  ? 'answer-item selected'
                  : 'answer-item'
              }
            >
              <p className='label'>{item.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
