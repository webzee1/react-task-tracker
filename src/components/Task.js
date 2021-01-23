//Cross icon from React
import { FaTimes } from 'react-icons/fa'

// props from Tasks.js
const Task = ({task , onDelete , onToggle}) => {
    return (

        // task is default className and ${task.reminder ? 'reminder' : ''} is condition 
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
         onDoubleClick={() => onToggle (task.id)}>

           <h3> {task.text} 
           
           <FaTimes style={{color: 'red' , cursor: 'pointer'}} onClick={() => onDelete (task.id)}/>
           
           </h3>
           <p> {task.day} </p>
        </div>
    )
}

export default Task
