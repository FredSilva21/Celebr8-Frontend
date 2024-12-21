export interface TaskIds {
    task_id:number,
    user_id:number,
    event_id:number
}

export interface TaskProps {
    token:string,
    fields:{
        userId:number,
        eventId:number
    }
}

export interface TaskFields extends TaskIds{
    title:string,
    description:string,
    start_date:string,
    end_date:string,
    priority: "Low" | "Medium" | "High",
    status:boolean
}