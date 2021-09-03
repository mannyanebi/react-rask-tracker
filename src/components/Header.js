import PropTypes from 'prop-types'
import Button from "./Button";
import {useLocation} from 'react-router-dom'

const Header = ({title, toggleShowAddTask, showAddTask}) => {
    const location = useLocation()
    return (
        <div>
            <header className={'header'}>
                <h1>Task Tracker|{title}</h1>
                {location.pathname === '/' && <Button color={`${!showAddTask ? 'green' : ''}`} text={!showAddTask ? 'Add' : 'Close'}
                         onClick={toggleShowAddTask}/>}
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Ameno'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header