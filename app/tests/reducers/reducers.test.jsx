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
      text: 'Take out the TRASH!'
    };
    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0].text).toEqual(action.text);
  });

  it('should toggle todo and add time stamp', () => {
    var todos = [{
      id: '10',
      text: 'Ask a question',
      completed: true,
      createdAt: 12345,
      completedAt: 125
    }];
    var action = {
      type: 'TOGGLE_TODO',
      id: '10'
    }
    var res = reducers.todosReducer(df(todos), df(action));

    expect(res[0].completed).toEqual(false);
    expect(res[0].completedAt).toEqual(undefined);
  })
})
