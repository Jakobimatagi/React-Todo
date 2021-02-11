import React from "react";
import styled from "styled-components";

const Todo = props => {
    return(
        <StyledDiv>
        <div className={props.todo.completed ? "completedTodo" : null}onClick={() => props.toggleDone(props.todo.id)} >
            <p>{props.todo.todo}</p>
        </div>
        </StyledDiv>
    )
}


export default Todo;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
p{
    border: 2px solid black;
    padding: 1em;
    
}

.completedTodo{
    text-decoration: line-through;
}
`