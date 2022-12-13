import TasksItem from "./TasksItem";

const TasksList = ({ tasks }) => {
  return (
    <div className="task-wrapper">
      <h2>
        {tasks.length >= 1
          ? `Your To-do are ${tasks.length} left `
          : "No exist To-do hooraay!!!"}
      </h2>
      <div className="task-list">
        {tasks && tasks.map((el) => <TasksItem key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default TasksList;
