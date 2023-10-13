import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ProjectPage from './components/ProjectPage/ProjectPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
      path: "/auth",
      element: <AuthPage/>,
    },
    {
        path: "/projects",
        element: <ProjectsPage/>,
    },
    {
        path: "/project/:projectId",
        element: <ProjectPage/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
);
