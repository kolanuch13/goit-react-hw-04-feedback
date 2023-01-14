import { useState, useEffect } from "react";
import Section from "components/Section/Section";
import Statistic from "components/Statistic/Statistic";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(-2);
    const [rate, setRate] = useState(0)

    useEffect(() => {
        setTotal(total => total + 1)
    }, [good, neutral, bad]);

     useEffect(() => {
        setRate( Math.floor((good * 100) / total))
    }, [good, total]);

    return (
        <Section title="Please leave feedback">
            <FeedbackOptions
                good={()=> setGood(good + 1)}
                neutral={()=> setNeutral(neutral + 1)}
                bad={()=> setBad(bad + 1)}
            />
            <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={rate}
            />
        </Section>
    );
}

export default Feedback;