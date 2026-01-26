import React from "react";
import Input from "../../../Shared/Forms/Components/Input/Input";
import Button from "../../../Shared/Forms/Components/Button/Button";
import useForm from "../../../../Hooks/useForm";

const LoginCreate = () => {
    const username = useForm()
    const email = useForm('email')
    const password = useForm('password')

    function handleSubmit(event) {
        event.preventDefault();
    }

    return <section className="animeLeft">
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username"/>
            <Button>Cadastrar</Button>
        </form>
    </section>
}

export default LoginCreate;