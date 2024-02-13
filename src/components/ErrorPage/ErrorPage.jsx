import { useRouteError } from "react-router-dom";
import styles from './ErrorPage.module.scss';
import logo from '../../assets/logo.svg';

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className={styles.error} id='error-page'>
            <img src={logo}></img>
            <h1>{error.statusText || error.message}</h1>
        </div>
    )
}

export default ErrorPage;