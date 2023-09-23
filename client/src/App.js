import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import all the components
import Signin from './components/Signin';
import Verify from './components/Verify';
import Login from './components/Login';
import InvalidRoute from './components/InvalidRoute';
// root routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin/>
  },
  {
    path: '/verify',
    element: <Verify/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:"*",
    element:<InvalidRoute/>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
