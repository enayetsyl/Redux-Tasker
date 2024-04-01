// Import necessary dependencies from React and Redux
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removeTodo } from "../features/todos/todoSlice"; // Importing actions from todoSlice
import DeleteIcon from "@mui/icons-material/Delete"; // Importing DeleteIcon from Material UI
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors"; // Importing RunningWithErrorsIcon from Material UI
import DoneIcon from "@mui/icons-material/Done"; // Importing DoneIcon from Material UI
import { toast } from "react-toastify"; // Importing toast from react-toastify

// Define the TodoList component
const TodoList = () => {
  // Select todos from the Redux store state
  const todos = useSelector((state) => state.todos);

  // Initialize dispatch function from Redux
  const dispatch = useDispatch();

  // Render the TodoList component
  return (
    <>
      {/* Todo List title */}
      <div className="text-center text-4xl my-10 font-bold tracking-wider">
        Todo List
      </div>
      {/* Todo items */}
      <div className="space-y-5 md:px-10">
        {/* Mapping through todos and rendering each todo item */}
        { todos.length > 0 ? (
          todos?.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center border rounded-lg bg-primaryDark py-3 px-2 md:px-10 border-primaryContent odd:hover:-translate-x-2 even:hover:translate-x-2 transition-all duration-500 hover:bg-primary"
            >
              {/* Todo text */}
              <p className=" md:text-2xl font-semibold text-primaryContent">{todo.text}</p>
              {/* Action buttons */}
              <div className="flex gap-5">
                {/* Delete button */}
                <button
                  className="text-secondary p-1 border border-border rounded-lg hover:text-secondaryDark hover:scale-125 transition-all duration-500"
                  onClick={() => {
                    // Dispatch removeTodo action and show toast message
                    dispatch(removeTodo(todo.id));
                    toast.error("Todo deleted successfully");
                  }}
                >
                  <DeleteIcon />
                </button>
                {/* Complete/Incomplete button */}
                <button
                  onClick={() => {
                    // Dispatch completeTodo action based on todo completion status and show toast message
                    dispatch(completeTodo(todo.id));
                    if (todo.completed) {
                      toast.warning("Task Marked as Incomplete");
                    } else {
                      toast.success("Task Marked as Complete.");
                    }
                  }}
                  className={`${todo.completed ? "text-warning border-border" : "border-border text-successContent"} border border-solid rounded-lg p-1 hover:scale-125 transition-all duration-500`}
                >
                  {/* Render appropriate icon based on todo completion status */}
                  {todo.completed ? <DoneIcon />: <RunningWithErrorsIcon />  }
                </button>
              </div>
            </div>
          ))
        ) : (<div>
          <p className=" text-center text-2xl text-primaryContent">You Do not have any to do. Please Add some.</p>
        </div>)
        }
      </div>
    </>
  );
};

// Export the TodoList component as the default export
export default TodoList;
