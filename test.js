const test = require('tape');
const { updateState } = require('./logic.js');

test('Добавление новой задачи (ADD)', (t) => {
  const initialState = { todos: [], filter: 'all' };
  const action = { type: 'ADD', payload: 'Выучить JavaScript' };
  
  const newState = updateState(initialState, action);

  t.equal(newState.todos.length, 1, 'В массиве должна появиться 1 задача');
  t.equal(newState.todos[0].title, 'Выучить JavaScript', 'Название задачи совпадает');
  t.equal(newState.todos[0].completed, false, 'По умолчанию задача не выполнена');
  t.notEqual(newState, initialState, 'Функция возвращает новый объект');
  
  t.end();
});

test('Переключение статуса задачи (TOGGLE)', (t) => {
  const initialState = { 
    todos: [{ id: 1, title: 'Тест', completed: false }], 
    filter: 'all' 
  };
  const action = { type: 'TOGGLE', payload: 1 };
  
  const newState = updateState(initialState, action);

  t.equal(newState.todos[0].completed, true, 'Статус задачи изменился на true');
  t.end();
});

test('Удаление задачи (DELETE)', (t) => {
  const initialState = { 
    todos: [{ id: 1, title: 'Тест', completed: false }]
  };
  const action = { type: 'DELETE', payload: 1 };
  
  const newState = updateState(initialState, action);

  t.equal(newState.todos.length, 0, 'Задача успешно удалена из массива');
  t.end();
});