import { useState, useEffect } from 'react';
import { IFeedbackItem } from '../types';
import { v4 as uuid } from 'uuid';
import Card from './Card';
import Button from './Button';
import RatingSelect from './RatingSelect';

interface FeedbackFormProps {
    handleAdd: (newFeedback: IFeedbackItem) => void;
}

const FeedbackForm = ({ handleAdd }: FeedbackFormProps) => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const [btnDisable, setBtnDisable] = useState(true);
    const [invalidTextMessage, setInvalidTextMessage] = useState<string | null>(
        ''
    );
    // useEffect to simulate setState(state, callback), to avoid the code to trigger before state gets actually updated.
    useEffect(() => {
        if (text.trim().length < 10) {
            setBtnDisable(true);
            setInvalidTextMessage('Text must be at least 10 characters long');
        } else {
            setBtnDisable(false);
            setInvalidTextMessage(null);
        }
    }, [text]);

    // HTML element type needs to be explicitly specified.
    const handleTextChange = (e: React.SyntheticEvent) => {
        setText((e.target as HTMLInputElement).value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (text.trim().length >= 10) {
            const newFeedback = {
                id: uuid(),
                text,
                rating
            };
            handleAdd(newFeedback);
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        onInput={handleTextChange}
                        type='text'
                        placeholder='Place a review'
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisable}>
                        <span>Send</span>
                    </Button>
                </div>
                {invalidTextMessage && (
                    <div className='message'>{invalidTextMessage}</div>
                )}
            </form>
        </Card>
    );
};

export default FeedbackForm;
