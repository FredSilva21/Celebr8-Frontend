import { url } from "./users";
import { CostIds,CostFields } from "../types/cost";

//Get All Event Costs
export async function getAllCost(token: string, fields: CostIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/costs`, {
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

//Create Cost
export async function createCost(token: string, fields: CostFields) {
    try {
        const { costId, userId, eventId, ...costBody } = fields;
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/costs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(costBody)
        });
        const data = await response.json();
        return data.result
    } catch (error) {
        console.log(error)
    }
}

//Get Cost by ID
export async function getCost(token: string, fields: CostIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/costs/${fields.costId}`, {
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

//Edit Cost
export async function editCost(token: string, fields: CostIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/costs/${fields.costId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(fields)
        });
        const data = await response.json();
        return data.result
    } catch (error) {
        console.log(error)
    }
}

//Delete Cost
export async function deleteCost(token: string, fields: CostIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/costs/${fields.costId}`, {
            method: 'DELETE',
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