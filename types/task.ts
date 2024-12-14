export interface TaskIds {
    taskId:number,
    userId:number,
    eventId:number
}

export interface TaskFields extends TaskIds{
    title:string,
    description:string,
    start_date:string,
    end_date:string,
    priority: "Low" | "Medium" | "High"
}