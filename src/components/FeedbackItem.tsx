import { IFeedbackItem } from '../types';

interface FeedbackItemProps {
    feedbackItem: IFeedbackItem;
}

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
    // First element holds the state and second one is used to update the state.

    return (
        <div className='card'>
            <div className='num-display'>{feedbackItem.rating}</div>
            <div className='text-display'>{feedbackItem.text}</div>
        </div>
    );
};

export default FeedbackItem;
