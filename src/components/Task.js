//Cross icon from React
import { FaTimes } from 'react-icons/fa'

// props from Tasks.js
const Task = ({task}) => {
    return (
        <div className="task">
           <h3> {task.text} <FaTimes style={{color: 'red' , cursor: 'pointer'}}/></h3>
           <p> {task.day} </p>
        </div>
    )
}

export default Task
