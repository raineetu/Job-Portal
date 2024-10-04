import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';  
import Login from './Components/auth/login'; 
import Signup from './Components/auth/signup'; 

// Define the routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />  // Capitalized Login
  },
  {
    path: '/signup',
    element: <Signup />  // Capitalized Signup
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
