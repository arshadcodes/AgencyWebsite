import PropTypes from 'prop-types';

const Button = ({ text, onClick, className }) => {
    return (
        <button
            className={`bg-black text-white text-3xl w-52 h-14 rounded-lg py-2 px-4 uppercase transform transition-transform duration-300 hover:scale-105 ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Button;