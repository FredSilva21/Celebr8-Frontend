export interface CostIds {
    costId:number,
    userId:number,
    eventId:number
}

export interface CostFields extends CostIds{
    name:string,
    value:number,
    date:string,
    payment_type: "Total" | "Per Person" | "Per Group"
}