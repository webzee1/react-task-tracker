import PropTypes from 'prop-types'

import Button from "./Button";

export const Header = ({title , onAdd , showAdd}) => {

    return (
        <div>

            <header className="header">
                <h1>{title}</h1>
            <Button 
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            </header>

            
        </div>
    )
}

// Define Default Props

Header.defaultProps = {
    title: ' Task Tracker' ,
}

// Define Props Type
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// const HeaderStyle = {
//     color : 'red',
//     fontWeight : '700',
//     backgroundColor : 'gray',
// }

export default Header;
