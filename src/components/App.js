import React from 'react';
import ToDoItem from "./ToDoItem"
import todoData from "./ToDoData"

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      todos: todoData
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      let updatedState = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item 
      })
      
      return {
        todos:updatedState
      }

    })
  }

  render() {
    let todoComponent = this.state.todos.map(item => {
      return (<ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    });
    return (
      <div className="App">
        {todoComponent}
      </div>
    )
  }
}

export default App;
