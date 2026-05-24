function updateState(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [
          ...state.todos, 
          { id: Date.now(), title: action.payload, completed: false }
        ]
      };
      
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.payload 
            ? { ...todo, completed: !todo.completed } 
            : todo
        )
      };
      
    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
      
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
      
    default:
      return state;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { updateState };
}