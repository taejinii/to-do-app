import React, { useState, useRef } from "react";
import Button from "./Button";

const ChckedTask = () => {
  return (
    <>
      <div>Successfully done To-do task !!!</div>
    </>
  );
};

const TasksItem = ({ task, id, date, isComplete }) => {
  const [isChecked, setIsChcked] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [editTask, setEditTask] = useState(task);
  const strDate = new Date(date).toLocaleDateString();
  const editInput = useRef();
  const changeHandler = () => {
    if (isComplete === false) {
      const completedTask = {
        isComplete: true,
      };
      fetch(`http://localhost:3001/data/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completedTask),
      });
      window.location.reload();
    } else if (isComplete === true) {
      const completedTask = {
        isComplete: false,
      };
      fetch(`http://localhost:3001/data/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completedTask),
      });
      window.location.reload();
    }

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
  console.log("isComplete", isComplete);
  console.log("isChecked", isChecked);
  return (
    <div className="TasksItem">
      <div className={isComplete === true ? "chckedTaskBox" : "taskItemBox"}>
        <div className="checkBox">
          <input
            type={"checkbox"}
            value={isChecked}
            onClick={() => changeHandler()}
          />
        </div>

        <div className="taskBox">
          <div className="taskBox-Content">
            {isComplete === true ? (
              <ChckedTask />
            ) : isEdit ? (
              <div>{task}</div>
            ) : (
              <textarea
                className="editTextArea"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                ref={editInput}
              />
            )}
          </div>
          <div className="taskBox-Date">{strDate}</div>
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
