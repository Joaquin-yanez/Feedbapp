import { IFeedbackItem } from '../types';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';

interface FeedbackListProps {
    feedback: IFeedbackItem[];
    handleDelete: (id: number | string) => void;
}

const FeedbackList = ({ feedback, handleDelete }: FeedbackListProps) => {
    console.log('feedback', feedback);
    return !feedback || feedback.length === 0 ? (
        <p>No Feedback Yet</p>
    ) : (
        <>
            {feedback.map((feedbackItem, index) => (
                <AnimatePresence key={index}>
                    <div>
                        <motion.div
                            key={feedbackItem.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <FeedbackItem
                                feedbackItem={feedbackItem}
                                handleDelete={handleDelete}
                            />
                        </motion.div>
                    </div>
                </AnimatePresence>
            ))}
        </>
    );
};

export default FeedbackList;
