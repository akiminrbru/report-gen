import { Link } from "react-router-dom";
import styles from "./CommonButton.module.scss";

const CommonButton = ({ text, color, isLink, href, imgLink, handler }) => {
	return isLink ? (
		<Link data-color={color} className={styles.button} to={href || "#"}>
			{imgLink && <img src={imgLink} alt="icon" />}
			{text && <p>{text}</p>}
		</Link>
	) : (
		<button data-color={color} className={styles.button} onClick={handler ? handler : () => {}}>
			{imgLink && <img src={imgLink} alt="icon" />}
			{text && <p>{text}</p>}
		</button>
	);
};

export default CommonButton;
