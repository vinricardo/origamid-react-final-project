import React from "react";
import Input from "../../../Shared/Forms/Components/Input/Input";
import Button from "../../../Shared/Forms/Components/Button/Button";
import useForm from "../../../../Hooks/useForm";
import { UserContext } from "../../../../Contexts/UserContext";
import Error from "../../../Shared/Helpers/Error";
import styles from './LoginForm.module.css';
import stylesBtn from '../../../Shared/Forms/Components/Button/Button.module.css';

import { Link } from "react-router-dom";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const {userLogin, error, loading} = React.useContext(UserContext)

    async function handleSubmit(event) {
        event.preventDefault();
        if(username.validate() && password.validate())
            userLogin(username.value, password.value)
    }

    return (
    <section className="animeLeft">
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username}/>
            <Input label="Senha" type="password" name="password" {...password}/>
            {loading ? (<Button disabled>Carregando...</Button>) : (<Button>Entrar</Button>)}
            <Error error={error}/>
        </form>
        <Link className={styles.forget} to="/login/forget">Perdeu a Senha?</Link>
        <div className={styles.register}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui conta?Cadastre-se no site.</p>
            <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
        </div>
    </section>)
}

export default LoginForm;