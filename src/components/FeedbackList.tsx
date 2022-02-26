import { IFeedbackItem } from '../types';
import FeedbackItem from './FeedbackItem';

interface FeedbackListProps {
    feedback: IFeedbackItem[];
    handleDelete: (id: number) => void;
}

const FeedbackList = ({ feedback, handleDelete }: FeedbackListProps) => {
    console.log('feedback', feedback);
    return !feedback || feedback.length === 0 ? (
        <p>No Feedback Yet</p>
    ) : (
        <>
            {feedback.map((feedbackItem) => (
                <div key={feedbackItem.id}>
                    <FeedbackItem
                        feedbackItem={feedbackItem}
                        handleDelete={handleDelete}
                    />
                </div>
            ))}
        </>
    );
};

export default FeedbackList;
