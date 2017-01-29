var expect = require('expect');

var TodoAPI = require('TodoAPI')

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

    describe ('filterTodos', () => {
      var todos = [{
        id: 1,
        text: 'Text here',
        completed: true
      },{
        id: 2,
        text: 'Second here',
        completed: false
      },
      {
        id: 3,
        text: 'Other here',
        completed: false
      }];

      it('should return all items if show completed is true', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
      });

      it('should return non-completed when showcompleted is false', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, false, '');
        expect(filteredTodos.length).toBe(2);
      });

      it('should sort by completed status', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos[0].completed).toEqual(false);
      });

      it('should filter todos by search text', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, 'other');
        expect(filteredTodos.length).toBe(1);
      });

      it('should return all todos is search text is empty', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
      });
    });
  });
