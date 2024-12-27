import { useState } from "react";

function Todo() {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const newTodo = { id: Date.now(), value: input };
            setTodoList([...todoList, newTodo]);
            setInput("");
        }
    };

    const deleteItem = (key) => {
        setTodoList(todoList.filter((item) => item.id !== key));
    };

    const editItem = (id) => {
        const editedTodo = prompt("Edit the todo:");
        if (editedTodo !== null && editedTodo.trim() !== "") {
            const updatedList = todoList.map((item) =>
                item.id === id ? { ...item, value: editedTodo } : item
            );
            setTodoList(updatedList);
        }
    };

    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border" />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id} className="bg-gray-400 w-72 m-2 list-none px-3 flex justify-between">{todo.value}
                        <div><button className="p-2 bg-red-400 mx-2" onClick={() => deleteItem(todo.id)}>Delete</button>
                            <button className="p-2 bg-green-400" onClick={() => editItem(todo.id)}>Edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
