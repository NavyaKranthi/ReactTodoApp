import React, { Component } from 'react';
import Todos from "./Todos"
import AddTodos from "./AddTodos"

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }

  addTodos = (todo) => {
    todo.id=Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos : todos
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id != id
    })
    this.setState({
      todos : todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodos={this.addTodos}/>
      </div>
    );
  }
}

export default App;
