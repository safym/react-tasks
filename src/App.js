// import styles
import "./App.css";

// import components
import Task_1 from "./components/task-1/task-1";
import Task_2 from "./components/task-2/task-2";

function App() {
  return (
    <div className="App">
      <div className="task-wrapper">
        <Task_1 />
        <hr/>
        <Task_2 />
      </div>
    </div>
  );
}

export default App;
