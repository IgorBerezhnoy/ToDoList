import React from "react";
import "./App.css";
import TodoList from "./TodoList";

const tasks1 = [
  { id: 1, title: "HTML&CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "ReactJS", isDone: false },
  { id: 3, title: "ReactJS", isDone: false },
];
const tasks2 = [
  { id: 1, title: "Hello world", isDone: true },
  { id: 2, title: "I am Happy", isDone: false },
  { id: 3, title: "Yo", isDone: false },
];

function App() {
  return (
    <div className="App">
      <TodoList track1={"string1"} track2={56456} tasks={tasks1} />
      <TodoList track1={"string2"} tasks={tasks2} />
    </div>
  );
}

export default App;
