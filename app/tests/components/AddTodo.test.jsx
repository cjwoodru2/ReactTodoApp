var React     = require('react'),
    ReactDOM  = require('react-dom'),
    expect    = require('expect'),
    $         = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    {AddTodo}   = require('AddTodo');



describe('AddTodo', () => {
  it('should exist', () => {
    expect('AddTodo').toExist();
  });

  it('should dispatch ADD_TODO with valid todo text', () => {
    var todoText = 'Trim the grass';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    var todoText = ''
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
