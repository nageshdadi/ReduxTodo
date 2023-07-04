import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './TodoSlice';

const Store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
});

export default Store;
