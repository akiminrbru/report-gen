import styles from './App.module.scss';
import { useSelector } from 'react-redux';
import ProjectsPage from './components/pages/ProjectsPage/ProjectsPage';
import AuthPage from './components/pages/AuthPage/AuthPage';
import ProjectPage from './components/pages/ProjectPage/ProjectPage';
import CreateReport from './components/pages/CreateReportPage/CreateReportPage';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuth } from './redux/authSlice';
import { useGetAllProjectsQuery, useIsAuthMutation } from './redux';
import Loader from "react-js-loader";


const routerAuth = [
  {
      path: "/",
      element: <ProjectsPage/>,
      errorElement: <Navigate to="/" replace />,
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
  const [checkIsAuth, {isLoading}] = useIsAuthMutation();

  useEffect(() => {
    checkIsAuth().unwrap()
    .then(res => {
      // console.log(res);
      dispatch(setIsAuth(true));
    })
    .catch(err => {
      // console.log(err);
      dispatch(setIsAuth(false));
    })
  }, [isAuth]);

  // useEffect(() => {
  //   try {
  //     fetch('https://report.rbru-test.ru/api/project/all', {
  //       method: "GET",
  //       headers: {
  //         "Authorization": `Bearer ${localStorage.getItem('token')}`
  //     }
  //     }).then(data => {
  //       if (data.ok) {
  //         dispatch(setIsAuth(true));
  //       } else {
  //         dispatch(setIsAuth(false));
  //       }
  //     })
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [isAuth]);


  if (isLoading) return (
      <div className={styles.app__loading}>
        <Loader type="spinner-default" bgColor={"#000"} color={"#000"} title={"Загрузка..."} size={100} />
      </div>
  )

  const router = createBrowserRouter(
    isAuth ? routerAuth : routerNotAuth
  );

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App;
