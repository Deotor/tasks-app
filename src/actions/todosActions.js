import { FETCH_TODOS, ADD_TODO, COMPL_TODO, DEL_TODO } from "./types";

export const fetchTodos = () => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) {
    localStorage.setItem(
      "todos",
      JSON.stringify([
        {
          id: 1,
          title: "buy a pony",
          completed: false
        },
        {
          id: 2,
          title: "learn japanese",
          completed: false
        },
        {
          id: 3,
          title: "give dmitry a job",
          completed: false
        }
      ])
    );
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return {
    type: FETCH_TODOS,
    payload: todos
  };
};

export const addTodo = todo => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  return {
    type: ADD_TODO,
    payload: todos
  };
};

export const completeTodo = todo => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === todo.id) {
      todos[i].complete = !todos[i].complete;
    }
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  return {
    type: COMPL_TODO,
    payload: todos
  };
};

export const delTodo = id => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1);
    }
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  return {
    type: DEL_TODO,
    payload: todos
  };
};
