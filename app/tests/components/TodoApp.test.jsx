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
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  });

  it('should toggle completed value when handleToggle is called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    // Expect completed at to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  });

  // should toggle completedAt to undefined when unchecked
  it('should toggle completedAt to undefined when unchecked', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    // Expect completed at to be a number
    expect(todoApp.state.todos[0].completedAt).toBe(undefined)
  });
});
