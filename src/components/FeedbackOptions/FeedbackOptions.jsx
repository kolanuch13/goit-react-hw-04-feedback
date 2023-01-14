import React from "react";
import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

const FeedbackOptions = ({good, neutral, bad}) => (
    <div>
        <ul className={css.FeedbackList}>
            <li><button onClick={good} type="button" className={css.FeedbackButton}>Good</button></li>
            <li><button onClick={neutral} type="button" className={css.FeedbackButton}>Neutral</button></li>
            <li><button onClick={bad} type="button" className={css.FeedbackButton}>Bad</button></li>
        </ul>
    </div>
)

FeedbackOptions.propTypes = {
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad: PropTypes.func.isRequired,
}

export default FeedbackOptions;