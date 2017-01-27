var React     = require('react'),
    ReactDOM  = require('react-dom'),
    expect    = require('expect'),
    $         = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoList  = require('TodoList'),
    Todo      = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect('TodoList').toExist();
  });

  it('should render one Todo component for each todo Item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todos.length).toBe(todosComponents.length);
  });
})
