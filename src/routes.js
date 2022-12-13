import {createBrowserRouter} from "react-router-dom";
import {SignIn} from "./pages/SignInPage";
import App from "./App";
import React from "react";
import { Home } from "./pages/HomePage";
import { TodosPage } from "./pages/TodosPage";



export const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      { path: '/',
        element: <Home/>
            
      },  
      { path: 'home',
        element: <Home/>
            
      },
      {
        path: 'sign-in',
        element: <SignIn/>
      },
      {
        path: 'todos',
        element: <TodosPage/>
      },
    ]
  },

]);