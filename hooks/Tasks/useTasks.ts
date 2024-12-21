import { useEffect, useState } from "react";
import { getAllTasks } from "@/api/tasks";
import { TaskFields } from "@/types/task";
import { getData } from "@/storage/secureStorage";

export default function useTasks() {
    const [tasks, setTasks] = useState<TaskFields[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const token = await getData('access_token');
            const userId = await getData('user_id');
            const fields = {
                user_id: userId,
                event_id: 2150,
            };
            if (token) {
                console.log(token);
                console.log(fields);
                const tasks = await getAllTasks(token, fields);
                setTasks(tasks);
            }
        };
        fetchTasks();
    }, []);

    return tasks;
}