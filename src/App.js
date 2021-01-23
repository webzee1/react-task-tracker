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

  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} />
    </div> 
  );
}

export default App;
