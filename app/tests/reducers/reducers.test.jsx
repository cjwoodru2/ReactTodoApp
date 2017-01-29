var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');


describe('Reducers', () => {
  describe('searchTextReducer', () =>{
    it('should set search text', ()=> {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showReducer', () => {
    it('should toggle showcompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    })
  })
});

describe('todosReducer', () => {
  it('should add new todo', () => {
    var action  = {
      type: 'ADD_TODO',
      todo: {
        id: '122',
        text: 'something to do',
        completed: false,
        completedAt: 92341
      }
    };
    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(action.todo);
  });

  it('should update todo and add time stamp', () => {
    var todos = [{
      id: '10',
      text: 'Ask a question',
      completed: true,
      createdAt: 12345,
      completedAt: 125
    }];
    var updates = {
      completed: false,
      completedAt: null
    };
    var action = {
      type: 'UPDATE_TODO',
      id: todos[0].id,
      updates
    }
    var res = reducers.todosReducer(df(todos), df(action));

    expect(res[0].completed).toEqual(updates.completed);
    expect(res[0].completedAt).toEqual(updates.completedAt);
    expect(res[0].text).toEqual(todos[0].text);
  });

  it('should add existing todos', () => {
    var todos = [{
      id: 111,
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 3500
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  });
});
