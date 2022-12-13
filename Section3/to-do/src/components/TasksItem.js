import React, { useState, useRef } from "react";

import Button from "./Button";

const ChckedTask = () => {
  return (
    <>
      <div>Successfully done To-do task !!!</div>
    </>
  );
};

const TasksItem = ({ task, id }) => {
  const [isChecked, setIsChcked] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [editTask, setEditTask] = useState(task);
  const [checkedBox, setCheckedBox] = useState();
  const editInput = useRef();
  const changeHandler = () => {
    setIsChcked(!isChecked);
    setIsEdit(true);
  };
  const editHandler = () => {
    if (isChecked === true) {
      alert("완료한 To-do는 수정할 수 없습니다.");
      return;
    } else {
      setEditTask(task);
      setIsEdit(!isEdit);
    }
  };
  const updateTask = () => {
    if (!editTask) {
      alert("수정하실 내용을 입력해주세요");
      editInput.current.focus();
      return;
    }
    if (editTask.length > 50) {
      alert("50글자를 초과해서는 안됩니다.");
      editInput.current.focus();
      return;
    }
    if (window.confirm("수정하시겠습니까?")) {
      const newTask = {
        task: editTask,
      };
      fetch(`http://localhost:3001/data/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      window.location.reload();
    }
  };

  const removeTask = () => {
    if (window.confirm(`${task} 를 삭제하시겠습니까?`)) {
      fetch(`http://localhost:3001/data/${id}`, {
        method: "DELETE",
      }).then(() => {});
      window.location.reload();
    }
  };

  return (
    <div className="TasksItem">
      <div className={isChecked ? "chckedTaskBox" : "taskItemBox"}>
        <div className="checkBox">
          <input
            type={"checkbox"}
            value={isChecked}
            onClick={() => changeHandler()}
          />
        </div>

        <div className="taskBox">
          {isChecked ? (
            <ChckedTask />
          ) : isEdit ? (
            <div className="taskBox">{task}</div>
          ) : (
            <textarea
              className="editTextArea"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              ref={editInput}
            />
          )}
        </div>

        <div className="buttonBox">
          {isEdit ? (
            <Button text={"삭제"} onClick={removeTask} />
          ) : (
            <Button text={"취소하기"} onClick={editHandler} />
          )}

          {isEdit ? (
            <Button text={"수정"} onClick={editHandler} />
          ) : (
            <Button text={"수정하기"} onClick={updateTask} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TasksItem;
