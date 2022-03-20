import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <TodoList />
      </div>
    );
  }
}

export default App;
