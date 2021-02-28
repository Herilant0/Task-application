import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className="header">
            <h1 className="logo">{title}</h1>
            <Button color='green' text="Ajouter" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title : "Task tracker",
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}


export default Header
