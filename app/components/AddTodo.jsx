var React = require('react');

var AddTodo = React.createClass ({
  handleSubmit: function (e) {
    e.preventDefault();

    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.todoText.focus();
    }

  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Add new todo here"/>
          <button className="button expanded hollow">Add Todo</button>
        </form>
      </div>
    )
  }

});

module.exports = AddTodo;
