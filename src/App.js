import styles from './App.module.scss';
import { useSelector } from 'react-redux';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthPage from './components/AuthPage/AuthPage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import CreateReport from './components/CreateReport/CreateReport';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuth } from './redux/authSlice';
import { useGetAllProjectsQuery } from './redux';
import Loader from "react-js-loader";


const routerAuth = [
  {
      path: "/",
      element: <ProjectsPage/>,
      errorElement: <Navigate to="/" replace />,
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
  },
];

const routerNotAuth = [
  {
    path: "/",
    element: <AuthPage/>,
    errorElement: <Navigate to="/" replace />,
  },
];

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  // const {data, isLoading, error} = useGetAllProjectsQuery();

  useEffect(() => {
    try {
      fetch('https://report.rbru-test.ru/api/project/all', {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
      }).then(data => {
        if (data.ok) {
          dispatch(setIsAuth(true));
        } else {
          dispatch(setIsAuth(false));
        }
      })
    } catch (e) {
      console.log(e);
    }
  }, [isAuth]);


  const router = createBrowserRouter(
    isAuth ? routerAuth : routerNotAuth
  );

  // if (isLoading) return (
  //     <div className={styles.projects__loading}>
  //       <Loader type="spinner-default" bgColor={"#000"} color={"#000"} title={"Загрузка..."} size={100} />
  //     </div>
  // )

  // if (data) {
  //   dispatch(setIsAuth(true));
  // } else {
  //   dispatch(setIsAuth(false));
  // }
  
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App;
