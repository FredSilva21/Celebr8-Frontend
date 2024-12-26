import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TaskFields } from '@/types/task';
import { TaskCardStyles } from '@/styles/task/taskCard';
import { useState } from 'react';
import IndividualTask from './individualTask';
import useTasks from '@/hooks/Tasks/useTasks';

export default function TaskCard({ task }: { task: TaskFields }) {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { fetchTasks } = useTasks();

    return (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <IndividualTask
                visible={modalVisible}
                task_id={task.task_id}
                onClose={() => setModalVisible(false)}
                onTaskDelete={fetchTasks}
            />
            <View style={TaskCardStyles.cardContainer}>
                <Text style={TaskCardStyles.title}>{task.title}</Text>
                <Text style={TaskCardStyles.dueDate}>Due Date:{task.end_date}</Text>
                <Text style={TaskCardStyles.textContainer}>Priority: {task.priority}</Text>
            </View>
        </TouchableOpacity>
    );
}