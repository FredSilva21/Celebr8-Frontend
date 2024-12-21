import { EventFields, EventIds } from '../types/event'; //Import Task Interfaces
import { url } from './users'; //Import backend url
import { TaskFields, TaskIds } from '../types/task'; //Import Task Interfaces

//Get All Event Tasks
export async function getAllEvents(token: string, userId: number) {
    try {
        const response = await fetch(`${url}/${userId}/events`, {
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

//Create Task
export async function createTask(token: string, fields: TaskFields) {
    try {
        const { taskId, userId, eventId, ...taskBody } = fields;
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/tasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(taskBody)
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
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/tasks/${fields.taskId}`, {
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
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/tasks/${fields.taskId}`, {
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
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/tasks/${fields.taskId}`, {
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