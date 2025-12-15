import React from "react";
import Input from "../../../Shared/Forms/Components/Input/Input";
import Button from "../../../Shared/Forms/Components/Button/Button";
import useForm from "../../../../Hooks/useForm";
import { UserContext } from "../../../../Contexts/UserContext";

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
    <section>
        <div>
            <h1>Login</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username}/>
            <Input label="Senha" type="password" name="password" {...password}/>
            {loading ? (<Button disabled>Carregando...</Button>) : (<Button>Entrar</Button>)}
            
            {error && <p>{error}</p>}
        </form>
    </section>)
}

export default LoginForm;