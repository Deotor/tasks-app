import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchTodos,
  addTodo,
  completeTodo,
  delTodo
} from "../actions/todosActions";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.title !== "") {
      var id = 1;
      if (this.props.todos.length) {
        id = this.props.todos[this.props.todos.length - 1].id + 1;
      }
      const todo = {
        id: id,
        title: this.state.title,
        complete: false
      };
      this.setState({ title: "" });
      this.props.addTodo(todo);
    }
  };

  delTodo(todo) {
    this.props.delTodo(todo.id);
  }

  onComplete(todo) {
    this.props.completeTodo(todo);
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    console.log(this.props);
    const todoItems = this.props.todos.map(todo => (
      <div
        className={todo.complete ? "todo todo-complete" : "todo"}
        key={todo.id}
      >
        <h4>
          <p className="todo-id">Todo №{todo.id}</p>
          <p>{todo.title}</p>
        </h4>
        <hr />
        <button
          onClick={this.onComplete.bind(this, todo)}
          type="button"
          className="btn btn-outline-warning copmlete-todo-btn"
        >
          copmlete?
        </button>
        <button
          onClick={this.delTodo.bind(this, todo)}
          type="button"
          className="btn btn-danger del-todo-btn"
        >
          del
        </button>
      </div>
    ));
    const addForm = (
      <div className="add-todo-form">
        <h1>Add Todo</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>need to do: </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </form>
      </div>
    );
    return (
      <div>
        {addForm}
        <div className="todos-block">
          <h1>Todos</h1>
          <div className="todos">{todoItems}</div>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos.items,
  delResponse: state.todos.delResponse,
  todo: state.todos.todo
});

export default connect(
  mapStateToProps,
  { fetchTodos, addTodo, completeTodo, delTodo }
)(Todos);
