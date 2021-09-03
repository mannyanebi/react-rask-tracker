import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    const buttonStyle = {
        backgroundColor: color
    }
    return <button className="btn" style={buttonStyle} onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Click'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onclick: PropTypes.func,
}

export default Button