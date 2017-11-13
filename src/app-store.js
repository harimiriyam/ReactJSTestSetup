import { createStore } from 'redux';

export function appReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_USER':
        return [...state, {
            name: action.name,
            contact: action.contact
        }];
      case 'REMOVE_USER':
        return state.filter((user) => user.name != action.payload)
      default:
        return state;
    }
  }

  export default createStore(appReducer);