import { useState } from 'react';
import { IFeedbackItem } from './types';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';

// Render must return only one element. If we don't want a parent element we can use a fragment that is an empty tag <>

function App() {
    // First element holds the state and second one is used to update the state.
    const [feedback, setFeedback] = useState(FeedbackData);
    const addFeedback = (newFeedback: IFeedbackItem) => {
        setFeedback([newFeedback, ...feedback]);
    };
    const deleteFeedback = (id: number | string): void => {
        window.confirm('Are you sure you want to delete?') &&
            setFeedback(feedback.filter((feedback) => feedback.id !== id));
    };

    return (
        <>
            <Header />
            {/* Passing the same prop through several components is called prop drilling, in those cases is preferred to use ContextAPI */}
            <div className='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
                {/* With && we can do if inline rendering and with ternary operation if-else inline rendering */}
            </div>
        </>
    );
}

export default App;
