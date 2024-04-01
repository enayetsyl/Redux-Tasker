// Import necessary components and styles
import { ToastContainer } from "react-toastify"; // Importing the ToastContainer component from react-toastify library
import AddTodo from "./components/AddTodo"; // Importing the AddTodo component
import { Header } from "./components/Header"; // Importing the Header component
import TodoList from "./components/TodoList"; // Importing the TodoList component
import 'react-toastify/dist/ReactToastify.css'; // Importing the default CSS styles for react-toastify

// Define the main App component
function App() {
  // Render the main App component
  return (
    // Outer container with background color and minimum screen height, with padding
    <div className="bg-background min-h-screen px-10">
      {/* Render the Header component */}
      <Header/>
      {/* Container for AddTodo and TodoList components, centered horizontally */}
      <div className="mt-10 md:mt-16 max-w-5xl mx-auto pb-20">
        {/* Render the AddTodo component */}
        <AddTodo/>
        {/* Render the TodoList component */}
        <TodoList/>
      </div>
      {/* Render the ToastContainer component for displaying toasts */}
      <ToastContainer />
    </div>
  );
}

// Export the App component as the default export
export default App;
