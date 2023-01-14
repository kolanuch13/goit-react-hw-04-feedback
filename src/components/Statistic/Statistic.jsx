import React from "react";
import PropTypes from 'prop-types';
import css from "./Statistic.module.css"

const Statistic = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <h2>Statistic</h2>
        {total === 0 ?
            <span>Thiere is no feedbacks</span>
            :
            <ul className={css.StatisticList}>
                <li className={css.StatisticItem}><span>Good: {good}</span></li>
                <li className={css.StatisticItem}><span>Neutral: {neutral}</span></li>
                <li className={css.StatisticItem}><span>Bad: {bad}</span></li>
                <li className={css.StatisticItem}><span>Total: {total}</span></li>
                <li className={css.StatisticItem}><span>Positive feedback: {positivePercentage}% </span></li>
            </ul>
        }
    </div>
)

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistic;