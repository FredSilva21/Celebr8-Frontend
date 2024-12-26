export interface EventIds {
    eventId: number,
    userId: number,
    id: number,
}

export interface EventFields extends EventIds {
    event_id: number,
    name: string,
    date: string,
    location: string,
    guests_limit: number,
    costs_limit: number,
    category_id: number | null,
}

export interface EventProps extends EventIds {
    user_type: boolean,
    Event: EventFields,
}