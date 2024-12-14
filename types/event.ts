export interface EventIds {
    eventId:number,
    userId:number
}

export interface EventFields extends EventIds{
    name:string,
    date:string, 
    local:string,
    costs_limit:number,
    guests_limit:number
}