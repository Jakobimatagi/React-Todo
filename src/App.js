import React from 'react';
import styled from 'styled-components'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const todo = [
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  toggleDone = (todoId) => {
    const newTodo = this.state.todo.map(item => {
      if (todoId === item.id) {
        return{
          ...item,
          completed: !item.completed
        }
      }
      else {return item;}
    })
    this.setState({
      
      ...this.state,
      todo: newTodo
    })
  }

  clearCompleted = () => {
    console.log('cleared');

    this.setState({
      
      ...this.state,
      todo: this.state.todo.filter(item => !item.completed)
    })
  }

  addTodo = (todoName, e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      todo: todoName,
      completed: false
    }
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo]
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <StyledDiv>
      <div>
        <div>
        <h2>Todo App</h2>
        
        <TodoForm addTodo={this.addTodo} className='todoForm'/>
        
        </div>
        <TodoList clearCompleted={this.clearCompleted} toggleDone={this.toggleDone} todo={this.state.todo} />
      </div>
      </StyledDiv>
    );
  }
}

export default App;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fe938c;
  margin: 3em 25%;
  
h2{
  font-size: 3rem;
  display: flex;
  border: 2px solid black;
  padding: 1rem;
}


`
