// export const userReducer = (state ={}, action) => {
//   switch(action.type) {
//     case "CHANGE_NAME": {
//       state = {...state, name: action.payload}
//       break;
//     }
//     case "CHANGE_AGE": {
//       state = {...state, age: action.payload}
//       break;
//     }
//   }
//   return state;
// };

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos