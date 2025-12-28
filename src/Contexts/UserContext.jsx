import React from "react";
import { TOKEN, USER } from "../Endpoints/Api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const navigate = useNavigate();
    const userLogout = React.useCallback( async function() {
        setData(null)
        setError(null)
        setLoading(false)
        setLogin(false)
        window.localStorage.removeItem('token')
        navigate('/login');
    }, [navigate])

    async function getUser(token) {
        const {url, options} = USER.GET(token)
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null)
            setLoading(true)
            const {url, options} = TOKEN.POST({username, password})
            const tokenResponse = await fetch(url, options)
            if(!tokenResponse.ok) throw new Error(`Error: ${tokenResponse.status}`)
            const {token} = await tokenResponse.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate('/conta');
        } catch(error) {
            setError(error.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if(!token) return;
            try {
                setError(null)
                setLoading(true)
                const {url, options} = TOKEN.VALIDATE(token);
                const response = await fetch(url, options);
                if(!response.ok) throw new Error('Token inválido')
                await getUser(token);
            } catch(error) {
                userLogout()
            } finally {
                setLoading(false)
            }
        }
        autoLogin();
    }, [userLogout])

    return (
        <UserContext.Provider value={{userLogin, userLogout, data, error, loading, login}}>
            {children}
        </UserContext.Provider>
    )
}