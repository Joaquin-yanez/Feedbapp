import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { IFeedbackItem } from '../types';
import Card from './Card';

interface FeedbackItemProps {
  feedbackItem: IFeedbackItem;
  handleDelete: (id: number | string) => void;
}

const FeedbackItem = ({ feedbackItem, handleDelete }: FeedbackItemProps) => {
  return (
    <Card>
      <div className="num-display">{feedbackItem.rating}</div>
      <button onClick={() => handleDelete(feedbackItem.id)} className="close">
        <FaTimes color="green" />
      </button>
      <div className="text-display">{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
