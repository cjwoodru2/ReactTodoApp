var React           = require('react'),
    ReactDOM        = require('react-dom'),
    expect          = require('expect'),
    $               = require('jQuery'),
    TestUtils       = require('react-addons-test-utils'),
    {Provider}      = require('react-redux'),
    configureStore  = require('configureStore');

import {TodoApp} from 'TodoApp';
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should properly render', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList)

    expect(todoList.length).toEqual(1);
  })
});
