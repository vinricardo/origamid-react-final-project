import React from "react";
import { TOKEN, USER } from "../Endpoints/Api";

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    async function getUser(token) {
        const {url, options} = USER.GET(token)
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
        
    }

    async function userLogin(username, password) {
        const {url, options} = TOKEN.POST({username, password})
        const tokenResponse = await fetch(url, options)
        const {token} = await tokenResponse.json();
        window.localStorage.setItem('token', token);
        getUser(token);
    }

    return (
        <UserContext.Provider value={{userLogin, data}}>
            {children}
        </UserContext.Provider>
    )
}