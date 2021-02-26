import PropTypes from 'prop-types'


// tsy maintsy respectena ny rang anle color sy text ao am header.js sy Button.js
const Button = ({color, text, onClick}) => {
    return  (
        <button onClick={onClick} style={{backgroundColor: color,}} className="btn">{color, text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
