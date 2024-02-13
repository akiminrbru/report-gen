import styles from "./Header.module.scss";
import logo from "../../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to={"/"}>
				<img src={logo}></img>
			</Link>
		</header>
	);
};

export default Header;
