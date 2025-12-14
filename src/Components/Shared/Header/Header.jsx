import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import Dogs from '../../../Assets/dogs.svg?react';
import { UserContext } from "../../../Contexts/UserContext";

const Header = () => {
    const {data} = React.useContext(UserContext);
    
    return (<div className={styles.header}>
        <header className={`${styles.nav} container`}>
            <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                <Dogs/>
            </Link>
            {data ? (<Link className={styles.login}  to="/conta">{data.nome}</Link>) :
            (<Link className={styles.login}  to="/login">Login / Criar</Link>)}
        </header>
    </div>)
}

export default Header;