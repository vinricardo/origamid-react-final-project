import React from "react";
import Input from "../../../Shared/Forms/Components/Input/Input";
import Button from "../../../Shared/Forms/Components/Button/Button";
import useForm from "../../../../Hooks/useForm";
import { USER } from "../../../../Endpoints/Api";
import {UserContext} from "../../../../Contexts/UserContext"

const LoginCreate = () => {
    const username = useForm()
    const email = useForm('email')
    const password = useForm()

    const {userLogin} = React.useContext(UserContext)

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = USER.POST({
            username: username.value,
            password: password.value,
            email: email.value
        })
        const response = await fetch(url, options);
        if(response.ok) userLogin(username.value, password.value)
    }

    return <section className="animeLeft">
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username}/>
            <Input label="Email" type="email" name="email" {...email}/>
            <Input label="Senha" type="password" name="password" {...password}/>
            <Button>Cadastrar</Button>
        </form>
    </section>
}

export default LoginCreate;