import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

const StyledLabel = styled.label`
    font-size: 24px;
    margin-top: -1in;
    color: linear-gradient(to right, #BF4F74, #FF8C94);
`;

export const Input: React.FC = () => {
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        const todos = JSON.parse(localStorage.getItem("todo") || "[]");
        const updatedTodo = todos.concat(todo);
        localStorage.setItem("todo", JSON.stringify(updatedTodo));
    };

    return (
        <>
            <StyledLabel htmlFor="todoInp">Enter new todo<br /></StyledLabel>

            <input 
                type="text" 
                id="todoInp"
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
                placeholder="Enter the text here..."
            />

            <StyledButton onClick={() => {
                addTodo();
                // alert(todo);
            }}>Submit</StyledButton>
        </>
    );
};
