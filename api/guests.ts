import { url } from "./users";
import { GuestFields,GuestIds } from "@/types/guest";

//Get All Event Guests
export async function getAllGuest(token: string, fields: GuestIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/guests`, {
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

//Create Guest
export async function createGuest(token: string, fields: GuestFields) {
    try {
        const { guestId, userId, eventId, ...guestBody } = fields;
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/guests`, {
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

//Get Guest by ID
export async function getGuest(token: string, fields: GuestIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/guests/${fields.guestId}`, {
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

//Edit Guest
export async function editGuest(token: string, fields: GuestIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/guests/${fields.guestId}`, {
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

//Delete Guest
export async function deleteGuest(token: string, fields: GuestIds) {
    try {
        const response = await fetch(`${url}/users/${fields.userId}/events/${fields.eventId}/guests/${fields.guestId}`, {
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