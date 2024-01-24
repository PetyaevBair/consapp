import './TodoItem.css';

export default function TodoItem({todoItem, deleteTodoItem}) {
    return(
        <div className="todo-item">
            <div className="todo-item-text">
                {todoItem.title}
            </div>
            <div className="todo-item-delete">
                <button className="todo-item-button-delete" onClick={() => deleteTodoItem(todoItem.id)}>
                    Х
                </button>
            </div>
        </div>
    );
}