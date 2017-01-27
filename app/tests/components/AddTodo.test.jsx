var React     = require('react'),
    ReactDOM  = require('react-dom'),
    expect    = require('expect'),
    $         = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    AddTodo   = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect('AddTodo').toExist();
  });

  it('should call onAddTodo prop with valid data', () => {
    var todoText = 'Trim the grass'
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo prop with invalid input', () => {
    var todoText = ''
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
