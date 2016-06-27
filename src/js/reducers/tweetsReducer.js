export const tweetsReducer = (state=[], action) => {
  switch(action.type) {
    case "CHANGE_MESSAGE": {
        state = [...state, message: action.payload ]
      }
      break;
  }
  return state;
};
