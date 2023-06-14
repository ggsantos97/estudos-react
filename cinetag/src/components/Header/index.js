import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Header.module.css';
import HeaderLink from "components/HeaderLInk";
function Header() {
    return (
        <header className={styles.header}> 
        <Link to="./">
            <img src={logo} alt="Logo do cinetag"/>
        </Link>
        <nav>
            <HeaderLink url="./">Home</HeaderLink>
            <HeaderLink url="./favoritos">Favoritos</HeaderLink>
            <HeaderLink url=""></HeaderLink>
        </nav>
        </header>
    )
}

export default Header;