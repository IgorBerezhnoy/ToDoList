type TodoListPropsType = {
  track1: string;
  track2?: number;
  //tasks: Array<TaskType>;
  tasks: TaskType[];
};
type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

const TodoList = (props: TodoListPropsType) => {
  return (
    <div>
      <h3>{props.track1}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((el: TaskType) => {
          return (
            <li>
              <input type="checkbox" checked={el.isDone} />{" "}
              <span>{el.title}</span>
            </li>
          );
        })}

        {/* <li>
          <input type="checkbox" checked={props.tasks[1].isDone} />{" "}
          <span>{props.tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[2].isDone} />{" "}
          <span>{props.tasks[2].title}</span>
        </li> */}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
