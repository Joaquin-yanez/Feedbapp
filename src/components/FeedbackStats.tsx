import { IFeedbackItem } from '../types';

interface FeedbackStatsProps {
    feedback: IFeedbackItem[];
}

const FeedbackStats = ({ feedback }: FeedbackStatsProps) => {
    let average: number | string = (
        feedback.reduce((acc, cur) => {
            return acc + cur.rating;
        }, 0) / feedback.length
    )
        .toFixed(1)
        // Remove floating point if zero.
        .replace(/[.,]0$/, '');
    average = parseFloat(average);

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
};

export default FeedbackStats;
