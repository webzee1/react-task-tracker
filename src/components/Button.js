import PropTypes from 'prop-types'

import React from 'react'

const Button = ( {color , text , onClick }) => {
    
    return (
        <div>
             <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
        </div>
    )
}

// Define Default Props

Button.defaultProps = {
    color: 'brown' ,
}

// Define Props Type
Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button