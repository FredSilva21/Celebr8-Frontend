import React, { useRef, useEffect, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import useTask from '@/hooks/Tasks/useTask';
import TaskDetailsModal from './modal/taskDetail';
import ConfirmationModal from '../notifications/confirmationComponent';
import { deleteTask } from '@/api/tasks';
import { getData } from '@/storage/secureStorage';

const { height } = Dimensions.get('window');

interface IndividualModalProps {
    task_id: number;
    visible: boolean;
    onClose: () => void;
    onTaskDelete: () => void;
}

export default function IndividualTask({
    task_id,
    visible,
    onClose,
    onTaskDelete,
}: IndividualModalProps) {
    const task = useTask(task_id);
    const slideAnim = useRef(new Animated.Value(height)).current;
    const [confirmVisible, setConfirmVisible] = useState(false);

    const handleModal = () => {
        setConfirmVisible(true);
    };

    const handleDelete = async () => {
        try {
            const token = await getData('access_token');
            const user_id = await getData('user_id');

            if (!token || !user_id || !task) return;

            const fields = { user_id, event_id: task.event_id, task_id: task.task_id };

            if (!fields.event_id || !fields.task_id) return;

            await deleteTask(token, fields);
            onTaskDelete();
            setConfirmVisible(false);
            onClose();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleCancel = () => {
        setConfirmVisible(false);
    };

    useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: height * 0.3,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: height,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    if (!task) return null;

    return (
        <>
            <TaskDetailsModal
                task={task}
                visible={visible}
                slideAnim={slideAnim}
                onClose={onClose}
                onEdit={() => console.log('Edit Task')}
                onDelete={handleModal}
            />
            <ConfirmationModal
                message="Are you sure you want to delete this task?"
                visible={confirmVisible}
                onConfirm={handleDelete}
                onCancel={handleCancel}
            />
        </>
    );
}