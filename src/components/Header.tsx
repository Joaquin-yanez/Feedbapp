interface HeaderProps {
    text?: string;
}

const Header = ({ text }: HeaderProps) => {
    return (
        // We can use CSS-in-JS this way.
        <header
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#ff6a95' }}
        >
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    );
};

// Podemos colocar valores default a las props.
Header.defaultProps = {
    text: 'FeedbackUI'
};

export default Header;
