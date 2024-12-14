import {url} from './users';

//Login
export async function login(fields: {email:string,password:string}) {
    try {
        const response = await fetch(`${url}/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(fields)
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

//Register
export async function register(fields: {email:string,password:string}) {
    try {
        const response = await fetch(`${url}/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(fields)
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

//Forgot Password
export async function forgotPassword(fields: {email:string}) {
    try {
        const response = await fetch(`${url}/forgot-password`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(fields)
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}