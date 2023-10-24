import React, { FormEvent } from "react";
import {useAuth} from "../context/auth-context";

export const LoginScreen = () => {
    const {login} = useAuth()
    // HTMLFormElement extends Element
    const handleSubmit = (event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        const username:string = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password:string = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username,password})
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id={'password'} />
        </div>
        <button type={'submit'}>登陆</button>
    </form>;
};
