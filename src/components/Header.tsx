import React from 'react';
interface HeaderProps {
  text?: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    // We can use CSS-in-JS this way.
    <header style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#b1de00' }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

// Podemos colocar valores default a las props.
Header.defaultProps = {
  text: 'FeedBapp',
};

export default Header;
