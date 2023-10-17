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
import CreateReport from './components/CreateReport/CreateReport';


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProjectsPage/>,
        errorElement: <ErrorPage/>,
    },
    {
      path: "/auth",
      element: <AuthPage/>,
    },
    {
        path: "/project/:counterId",
        element: <ProjectPage/>,
    },
    {
        path: "/createReport/:counterId",
        element: <CreateReport/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
);
