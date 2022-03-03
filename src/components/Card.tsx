import React from 'react';

import { Children } from '../types';

interface CardProps extends Children {
  reverse?: boolean;
}

// Everything that is passed between two tags from a component is passed as children and not as props
const Card = ({ children, reverse }: CardProps) => {
  // This way we can add conditional classes.
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};

export default Card;
