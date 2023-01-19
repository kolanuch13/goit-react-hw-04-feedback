import { useState } from "react";
import Section from "components/Section/Section";
import Statistic from "components/Statistic/Statistic";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => {
      return good + bad + neutral;
  }
  const rate = () => {
      return Math.floor((good * 100) / total())
  }

  const onClick = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(prev => prev + 1)
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad':
        setBad(prev => prev + 1)
        break;
      default:
        break;
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
            <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={onClick}
            />
            <Statistic
                good={good} 
                neutral={neutral}
                bad={bad}
                total={total()}
                positivePercentage={rate()}
            />
        </Section>
    </div>
  );
};
