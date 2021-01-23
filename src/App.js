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

  return (
    <div className="container">
     <Header />
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> 
      : 'No Tasks to show' 
    }
    </div> 
  );
}

export default App;
