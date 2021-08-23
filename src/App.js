import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Business Meeting',
      day: 'Feb 6th at 1:30 PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 4:30 PM',
      reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  } 

  const toggleReminder = (id) => {
    console.log('Set reminder for ', id)
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder } :task
      )
    )
  }

  return (
    <div className="container">
      <Header /> 
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
