import { useState } from 'react';

export default function Quiz() {
  const [activeQuestion, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswer] = useState([]);
  return <p>Currently active Question</p>;
}
