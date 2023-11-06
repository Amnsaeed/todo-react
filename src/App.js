import './App.css';
import AddTasks from './components/AddTasks';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">

        <Header />

        <GlobalProvider>

            <AddTasks />

            <TaskList />

        </GlobalProvider>

    </div>
  );
}

export default App;
