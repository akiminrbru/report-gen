import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logo}></img>
    </header>
  )
}

export default Header;