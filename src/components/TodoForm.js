import React from "react";
import styled from "styled-components";

class TodoForm extends React.Component {

 constructor() {
     super();
     this.state = {
         item: ''
     }
 }
handleChanges = e => {
    this.setState({item: e.target.value})
};

submitTodo = e => {
    e.preventDefault();
    this.setState({item: ''});
    this.props.addTodo(this.state.item, e)
}

 render(){
     return(
         <div>

        <StyledForm>
         <form>
             <input 
             className="todoInput"
             type="text"
             name="item"
             value={this.state.item}
             onChange={this.handleChanges}
             />
         </form>
         
         <button className="addBtn" onClick={this.submitTodo}>Add</button>
         </StyledForm> 
         </div>
     )
 }






}


export default TodoForm;

const StyledForm = styled.form`


.todoInput{
    background-color: #F1DEDE; 
    margin-left: 2.5em;
    border: none;
    margin-bottom: 2em;
}

.addBtn{
    margin-left: 5em;
    margin-bottom: 1em;
    padding: .25em 1em;
    font-size: 1em;
    background-color: #F1DEDE;
    border: none;
}
.addBtn:hover{
    background-color: #d496a7;
}
`