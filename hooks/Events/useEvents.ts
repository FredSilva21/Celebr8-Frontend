import { useEffect, useState } from "react";
import { getAllEvents } from "@/api/events";
import { EventProps } from "@/types/event";
import { getData } from "@/storage/secureStorage";

export default function useEvents() {
    const [events, setEvents] = useState<EventProps[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const token = await getData('access_token');
            const userId= await getData('user_id');
            
            if (token) {
                const events = await getAllEvents(token, Number(userId));
                setEvents(events);
            }
        };
        fetchEvents();
    }, []);

    return events;
}