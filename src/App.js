import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componets/Home';
import AddUser from './componets/AddUser';
import Update from './componets/Update';

function App() {

  const router = createBrowserRouter([
    {path : '/' , element : <Home></Home>,
    loader : () => fetch('http://localhost:5000/users')
    },
    {path : '/users/add' , element : <AddUser/> },
    {path : '/update/:id' , element : <Update/>,
    loader : ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
    },

  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
