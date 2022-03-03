import React, { useEffect, useState } from 'react';

interface RatingSelectProps {
  select: (rating: number) => void;
}

const RatingSelect = ({ select }: RatingSelectProps) => {
  const [selected, setSelected] = useState(10);
  const handleChange = (e: React.ChangeEvent) => {
    setSelected(+(e.target as HTMLInputElement).value);
  };

  useEffect(() => {
    select(selected);
  }, [selected, select]);

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
