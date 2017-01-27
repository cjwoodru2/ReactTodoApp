var React     = require('react'),
    ReactDOM  = require('react-dom'),
    expect    = require('expect'),
    $         = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoApp   = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect('TodoApp').toExist();
  });

  it('should add todo to the todos sate on handleAddTodo', ()=> {
    var todoText = "Eat Chinese food";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
