import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TaskFields } from '@/types/task';
import { TaskCardStyles } from '@/styles/task/taskCard';
import { useState } from 'react';
import IndividualTask from './individualTask';

export default function TaskCard({ task }: { task: TaskFields }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <IndividualTask
                visible={modalVisible}
                task_id={task.task_id}
                onClose={() => setModalVisible(false)}
            />
            <View style={TaskCardStyles.cardContainer}>
                <Text style={TaskCardStyles.title}>Name:{task.title}</Text>
                <Text style={TaskCardStyles.description}>Description:{task.description}</Text>
                <Text style={TaskCardStyles.dueDate}>Due Date:{task.end_date}</Text>
                <Text style={TaskCardStyles.status}>Status:{task.status}</Text>
            </View>
        </TouchableOpacity>
    );
}