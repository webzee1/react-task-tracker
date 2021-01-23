import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

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
     <Header />
     {tasks.length > 0 ? <Tasks tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder} /> 
      : 'No Tasks to show' 
    }
    </div> 
  );
}

export default App;
