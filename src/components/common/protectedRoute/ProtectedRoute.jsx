import styles from "../../../App.module.scss";
import { useEffect } from "react";
import { useIsAuthMutation } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setIsAuth } from "../../../redux/authSlice";
import Loader from "react-js-loader";
import { useAuth } from "../../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
	const [checkIsAuth, { isLoading, isSuccess, isError }] = useIsAuthMutation();
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();

	useEffect(() => {
		checkIsAuth();
	}, [isAuth]);

	if (isLoading) {
		return (
			<div className={styles.app__loading}>
				<Loader type="spinner-default" bgColor={"#000"} color={"#000"} title={"Загрузка..."} size={100} />
			</div>
		);
	}

	if (isSuccess) {
		dispatch(setIsAuth(true));
		if (isAuth) {
			return children;
		}
	}

	if (isError) {
		dispatch(setIsAuth(false));
		return <Navigate to="/login" />;
	}
};

export default ProtectedRoute;
