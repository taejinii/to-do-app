import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export const TaskInput = styled.input`
  text-align: center;
  width: 300px;
  height: 60px;
  font-size: 15px;
  border-radius: 30px;
  outline: none;
  padding-left: 10px;
  background-color: white;
  border: 1px solid black;
  ::placeholder {
    color: skyblue;
    font-weight: lighter;
    font-size: 30px;
  }
`;

const TasksEditor = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date().getTime());
  const textInput = useRef();
  const handleChangeState = (e) => {
    setTask(e.target.value);
  };
  const createTask = (e) => {
    e.preventDefault();
    if (!task) {
      alert("task 를 적어주세요!");
      textInput.current.focus();
    } else if (task.length > 50) {
      alert("To-Do Task는 50글자를 초과할 수 없습니다.");
    } else {
      const newTask = {
        task,
        date,
        isComplete: false,
      };
      fetch("http://localhost:3001/data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      window.location.reload();
    }
  };

  return (
    <div className="tasksEditor">
      <TaskInput
        value={task}
        onChange={handleChangeState}
        ref={textInput}
        placeholder={"Write To-do"}
      />
      <FontAwesomeIcon
        icon={faCirclePlus}
        size="3x"
        onClick={createTask}
        className="addButton"
      />
    </div>
  );
};

export default TasksEditor;
