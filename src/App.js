import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  // for Toggle Add task form 
  const [showAddTask , setShowAddTask] = useState(false)

  const [tasks , setTasks ] = useState([
    {
        id: 1,
        text : 'React Task Tracker',
        day: '24 Jan',
        reminder : true,

    },
    {
        id: 2,
        text : 'Node Task Tracker',
        day: '21 Jan',
        reminder : true,

    },
    {
        id: 3,
        text : 'Laravel Task Tracker',
        day: '22 Jan',
        reminder : true,

    },
])

// Add Task
const addTask = (task) => {
  // Give a random id
  const id = Math.floor(Math.random() * 10000) + 1
  // console.log(id)
  const newTask = { id, ...task}
  // copy current tasks and add new one in a array 
  setTasks([...tasks, newTask])
}

// Delete Task
  const deleteTask = (id) => {
    // console.log('delete' , id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

// Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task , reminder: !task.reminder } : task 
    )
  )

  }  

  return (
    <div className="container">
     
     <Header onAdd={() => setShowAddTask(!showAddTask)}
        // Props for changing button text on toggle
        showAdd = {showAddTask}
     />

    { showAddTask && <AddTask onAdd={addTask} />}

     {tasks.length > 0 ? <Tasks tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder} /> 
      : 'No Tasks to show' 
    }
    </div> 
  );
}

export default App;
