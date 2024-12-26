import { TaskIds, CreateTask } from '../types/task'; //Import Task Interfaces
import { url } from './users'; //Import backend url

//Get All Event Tasks
export async function getAllTasks(token: string, fields: { user_id: number, event_id: number }) {
    try {
        const response = await fetch(`${url}/${fields.user_id}/events/${fields.event_id}/tasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        console.log("data", data)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

//Create Task
export async function createTask(token: string, fields: CreateTask ) {
    try {
        const response = await fetch(`${url}/${fields.user_id}/events/${fields.event_id}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(fields.fields)
        });
        const data = await response.json();
        return data.result
    } catch (error) {
        console.log(error)
    }
}

//Get Task by ID
export async function getTask(token: string, fields: TaskIds) {
    try {
        const response = await fetch(`${url}/${fields.user_id}/events/${fields.event_id}/tasks/${fields.task_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data.result
    } catch (error) {
        console.log(error)
    }
}

//Edit Task
export async function editTask(token: string, fields: TaskIds) {
    try {
        const response = await fetch(`${url}/${fields.user_id}/events/${fields.event_id}/tasks/${fields.task_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(fields)
        });
        const data = await response.json();
        return data.message
    } catch (error) {
        console.log(error)
    }
}

//Delete Task
export async function deleteTask(token: string, fields: TaskIds) {
    try {
        const response = await fetch(`${url}/${fields.user_id}/events/${fields.event_id}/tasks/${fields.task_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data.message
    } catch (error) {
        console.log(error)
    }
}