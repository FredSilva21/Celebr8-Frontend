import { User } from '../types/user';
export const url='http://192.168.1.164:3000/users';

// Get User by Id
export async function getUser(id:number){
  try {
    console.log(`${url}/${id}`)
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    const user=data.result
    return user
  } catch (error) {
    console.log(error)
  }
}

export async function editUser(token: string, fields: User) {
  try {
    const response = await fetch(`${url}/${fields.id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`,
        },
        body:JSON.stringify(fields)
    });
    const data = await response.json();
    return data.message
    } catch (error) {
        console.log(error)
    }
}

//Delete User
export async function deleteUser(token: string, id: number) {
  try {
    const response = await fetch(`${url}/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data.message
    } catch (error) {
        console.log(error)
    }
}