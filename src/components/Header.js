import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className="header">
            <h1 className="logo">{title}</h1>
            <Button text="Plus"/>
        </header>
    )
}

Header.defaultProps = {
    title : "Nhr",
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}


export default Header
