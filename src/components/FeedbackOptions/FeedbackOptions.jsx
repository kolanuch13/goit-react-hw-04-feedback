import React from "react";
import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        <ul className={css.FeedbackList}>
            {options.map(item => 
                <li key={item}> <button type="button" onClick={onLeaveFeedback} name={item} className={css.FeedbackButton}>{item.charAt(0).toUpperCase() + item.slice(1)}</button> </li>
            )}
        </ul>
    </div>
)

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;