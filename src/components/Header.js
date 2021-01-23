import PropTypes from 'prop-types'

import Button from "./Button";

export const Header = ({title}) => {

    const onClick = () => {
        console.log('Click');
    }


    return (
        <div>

            <header className="header">
                <h1>{title}</h1>
            <Button color='green' text='Add Button' onClick={onClick} />
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
