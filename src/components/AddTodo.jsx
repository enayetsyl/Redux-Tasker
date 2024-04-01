// Import necessary dependencies from React
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice"; // Importing addTodo action from todoSlice
import Button from "./Button"; // Importing Button component
import { toast } from "react-toastify"; // Importing toast from react-toastify

// Define the AddTodo component
const AddTodo = () => {
  // State to manage input value
  const [input, setInput] = useState("");

  // Initialize dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle adding todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    // Check if input is empty
    if (!input) {
      // Show error toast if input is empty
      toast.error('Please write Something.');
    }
    // If input is not empty, dispatch addTodo action and reset input
    if (input) {
      dispatch(addTodo(input));
      toast.success("New todo successfully added.")
      setInput("");
    }
  };

  // Render the AddTodo component
  return (
    <div className="max-w-5xl mx-auto">
      {/* Form for adding todo */}
      <form onSubmit={handleAddTodo} className="flex w-full gap-5 justify-center">
        {/* Input field for todo text */}
        <input
          type="text"
          value={input}
          placeholder="Add Todo"
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          className="border border-solid border-copy text-primaryContent outline-none font-semibold bg-foreground rounded-lg px-2 w-1/2 placeholder:text-copyLight"
        />
        {/* Button to add todo */}
        <Button>Add Todo</Button>
      </form>
    </div>
  );
};

// Export the AddTodo component as the default export
export default AddTodo;
