import { useEffect, useState } from "react";
import { getAllTasks } from "@/api/tasks";
import { TaskFields } from "@/types/task";
import { getData } from "@/storage/secureStorage";

export default function useTasks() {
    const [tasks, setTasks] = useState<TaskFields[]>([]);


    const fetchTasks = async () => {
        const token = await getData('access_token');
        const userId = await getData('user_id');
        const fields = {
            user_id: userId,
            event_id: 2150,
        };
        if (token) {
            const fetchedTasks = await getAllTasks(token, fields);
            setTasks(fetchedTasks);
            console.log("Tasks after fetch:", fetchedTasks)
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);

    return { tasks, fetchTasks }
}