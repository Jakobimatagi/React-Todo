// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import styled from "styled-components";


const TodoList = props => {
    
    
    return(
        <StyledDiv>
        <div> {props.todo.map(item => (
            <Todo toggleDone={props.toggleDone} key={item.id} todo={item} />
        ))}
        <button className="clearBtn" onClick={() => props.clearCompleted()}>Clear Completed</button>

        </div>
        </StyledDiv>
    )
}


export default TodoList;

const StyledDiv = styled.div`


.clearBtn{
    margin-left: 2.5em;
    margin-bottom: 1em;
    padding: .25em 1em;
    font-size: 1em;
    background-color: #F1DEDE;
    border: none;
}

.clearBtn:hover{

    background-color: #d496a7;
}
`