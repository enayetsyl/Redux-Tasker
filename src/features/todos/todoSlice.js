import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load todos from local storage if available, or initialize as empty array
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

// Define slice for todo-related actions
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Action to add a new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      // Update local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // Action to remove a todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      // Update local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // Action to mark a todo as complete or incomplete
    completeTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      // Update local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }
  }
});

// Export actions
export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
