import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

// Render must return only one element. If we don't want a parent element we can use a fragment that is an empty tag <>

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    console.log('feedback app', feedback);
    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedback} />
                {/* With && we can do if inline rendering and with ternary operation if-else inline rendering */}
            </div>
        </>
    );
}

export default App;
