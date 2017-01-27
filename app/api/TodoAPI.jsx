var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {

    }
    // My incorrect guess at a Turnary Operation from notes
    // Keep for reference and LEARN IT!!!
    // todos: $.isArray(todos) ? return todos : return []
    return $.isArray(todos) ? todos : [];

  }
};
