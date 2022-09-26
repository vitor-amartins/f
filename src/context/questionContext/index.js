import { useEffect } from "react";
import { createContext, useState } from "react";
import questionsMock from './questionsMock.json'

const QuestionContext = createContext(null);

const QuestionContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setQuestions(questionsMock.data)
        setIsLoading(false)
    }, 3000)
  }, [])
  return (
    <QuestionContext.Provider
      value={{
        questions,
        isLoading,
        setAnswers
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContextProvider };
export default QuestionContext;
