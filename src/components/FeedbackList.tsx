import { IFeedbackItem } from '../types';
import FeedbackItem from './FeedbackItem';

interface FeedbackListProps {
    feedback: IFeedbackItem[];
}

const FeedbackList = ({ feedback }: FeedbackListProps) => {
    console.log('feedback', feedback);
    return !feedback || feedback.length === 0 ? (
        <p>No Feedback Yet</p>
    ) : (
        <>
            {feedback.map((feedbackItem) => (
                <div key={feedbackItem.id}>
                    <FeedbackItem feedbackItem={feedbackItem} />
                </div>
            ))}
        </>
    );
};

export default FeedbackList;
