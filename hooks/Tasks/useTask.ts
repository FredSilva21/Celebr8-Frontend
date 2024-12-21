import { useEffect, useState } from "react";
import { getTask } from "@/api/tasks";
import { TaskFields } from "@/types/task";
import { getData } from "@/storage/secureStorage";

export default function useTasks(task_id: number) {
    const [task, setTask] = useState<TaskFields>();

    useEffect(() => {
        const fetchTasks = async () => {
            const token = await getData('access_token');
            const user_id = await getData('user_id');
           
            const fields = {
                user_id: user_id,
                task_id: task_id,
                event_id: 2150
            };
            if (token) {
                console.log(token);
                console.log(fields);
                const task = await getTask(token, fields);
                setTask(task);
            }
        };
        fetchTasks();
    }, []);

    return task;
}