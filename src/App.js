import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Tasks from '../src/components/Tasks';
import AddTask from '../src/components/AddTask';
import About from '../src/components/About';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => { 
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, []);

  // fetch tasks
  const fetchTasks = async () => {
    const response = await fetch ('http://localhost:5000/tasks')
    const data = await response.json()
    return data
  };

// add task
  const addTask = async (task) => {
    const res = await fetch ('http://localhost:5000/tasks/',
                              {method : 'POST',
                              headers : {'Content-type' : 'application/json'},
                              body : JSON.stringify(task)})
    const data = await res.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  };

// function delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method : 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
  };

  // fetch task
  const fetchTask = async (id) => {
    const response = await fetch (`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
  };

// toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder : !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
                            {method : 'PUT',
                            headers : {'Content-type' : 'application/json'},
                            body : JSON.stringify(updateTask)})
    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  };

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      
      <Switch>
        <Route path="/" exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show here !'}
          </>
        )} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
