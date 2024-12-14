export interface CategoryIds {
    categoryId:number,
    userId:number
}

export interface CategoryCostFields extends CategoryIds{
    name:string,
    cost_id:number,
}

export interface CategoryEventFields extends CategoryIds{
    name:string,
    event_id:number,
}

export interface CategoryGuestFields extends CategoryIds{
    name:string,
    guest_id:number,
}

export interface CategoryTaskFields extends CategoryIds{
    name:string,
    task_id:number,
}