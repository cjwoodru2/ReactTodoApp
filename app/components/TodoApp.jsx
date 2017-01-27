var React       = require('react');
var TodoList    = require('TodoList');
var AddTodo     = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clea my room'
        },
        {
          id: 3,
          text: 'Get a new teacher for React'
        },
        {
          id: 4,
          text: 'Learn React myself'
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    alert('New Todo: ' + text);

  },
  render: function() {
    var {todos} = this.state;

    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1>Todo App</h1>
          <h2>Search Section</h2>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
          )
  }

});

module.exports = TodoApp;
