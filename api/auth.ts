import { LoginProps, TokenProps } from '@/types/user';
const url="http://192.168.1.70:3000"

//Login
export async function login(fields: LoginProps){
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
export async function register(fields: {email:string,password:string, name:string}) {
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