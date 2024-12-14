export interface GuestIds {
    guestId:number,
    userId:number,
    eventId:number
}

export interface GuestFields extends GuestIds{
    name:string,
    email:string,
    phone:string
}