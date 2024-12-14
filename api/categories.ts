import { url } from "./users";
import { CategoryIds, CategoryTaskFields, CategoryGuestFields } from "../types/category";

//Create Category Task
export async function createCategoryTask(token: string, fields: CategoryTaskFields) {
    try {
        const { task_id, userId, categoryId, ...taskBody } = fields;
        const response = await fetch(`${url}/users/${fields.userId}/categories/${fields.categoryId}/tasks`, {
            method: 'POST',
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

//Edit Category Task
export async function editCategoryTask(token: string, fields: CategoryIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/categories/${fields.categoryId}/tasks/${fields.task_id}`, {
            method: 'PUT',
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

//Create Category Guest
export async function createCategoryGuest(token: string, fields: CategoryGuestFields) {
    try {
        const { guest_id, userId, categoryId, ...guestBody } = fields;
        const response = await fetch(`${url}/users/${fields.userId}/categories/${fields.categoryId}/guests`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(guestBody)
        });
        const data = await response.json();
        return data.result
    } catch (error) {
        console.log(error)
    }
}