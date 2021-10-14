import TodoListItem from "../todoListItem/TodoListItem";
import "./TodoList.css"

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="listGroupItem">
        <TodoListItem 
        {...itemProps}
        onDeleted={() => onDeleted(id)} 
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  if (elements.length === 0) {
    return <p className="emptyToDo">Add ToDo</p>
  } 
  
  return (
    <ul className="list-group toDoList">
      {elements}
    </ul>
  );
};

export default TodoList;
