import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import React from "react";
import './TodoList.css';

export default function TodoList () {
    let todo = [
        {id: 1, title: 'Сходить за книгой'},
        {id: 2, title: 'Помыть посуду'},
        {id: 3, title: 'Дописать сайт'},
        {id: 4, title: 'Закрутить огурцы'}
    ]

    const [todoList, setTodoList] = useState(todo);

    function TodoItemClickDelete (uid) {
        setTodoList(
            todoList.filter(todoItem => todoItem.id !== uid)
        );
    };

    let textareaRef = React.createRef();

    function addNewTodoItem (text) {
        if (text.trim() !== '') {
            let countItems = todoList.length;
            setTodoList([
                ...todoList,
                {id: countItems+1, title: text}
            ]);
            textareaRef.current.value = '';
        }
    };

    let todoListComponents = todoList.map(todoItem => {
        return(<TodoItem key={todoItem.id} todoItem={todoItem} deleteTodoItem={TodoItemClickDelete}/>)
    });

    return(
        <div>
            <div className="todo-inf-container">
                <div className="todo-input-container">
                    <textarea className="todo-input-text" ref={textareaRef}/>
                </div>
                <div className="todo-button-container">
                    <button className="todo-button-add" onClick={() => addNewTodoItem(textareaRef.current.value)}>
                        Добавить
                    </button>
                </div>
            </div>
            <div>
                {todoListComponents}
            </div>
        </div>
    );
};