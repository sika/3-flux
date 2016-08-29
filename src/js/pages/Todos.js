import React from "react";
import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore.js";

export default class Featured extends React.Component {
  constructor() {
    console.log("Todos");
    // console.log(TodoStore);
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
  }
  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
//{...todo} The properties of the object that you pass in are copied onto the component's props.
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
