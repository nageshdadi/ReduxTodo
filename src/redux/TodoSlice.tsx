import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  description: string;
}

interface TodoState {
  todoList: Todo[];
}

const initialState: TodoState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{id: number; title: string; description: string}>,
    ) => {
      const obj = action.payload;
      const existedValues = state.todoList.filter(
        (each: any) => each.id === obj.id,
      );
      if (existedValues.length !== 0) {
        console.log('Edit2');
        const editValueTodos = state.todoList.map((each: any) => {
          if (each.id === obj.id) {
            return obj;
          }
          return each;
        });
        state.todoList = editValueTodos;
      } else {
        state.todoList = [...state.todoList, obj];
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        todo => todo.id !== action.payload,
      );
    },
  },
});

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
