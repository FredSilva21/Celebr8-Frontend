import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import useTask from '@/hooks/Tasks/useTask';
import { IndividualTaskStyles } from '@/styles/task/individualTask';

interface IndividualModalProps {
    task_id: number;
    visible: boolean;
    onClose: () => void;
}

export default function IndividualTask({ task_id, visible, onClose }: IndividualModalProps) {
    const task = useTask(task_id);
    console.log("task", task);
    if(!task) return null;

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={IndividualTaskStyles.modalOverlay}>
                <View style={IndividualTaskStyles.modalContainer}>
                    <Text style={IndividualTaskStyles.title}>{task.title}</Text>
                    <Text style={IndividualTaskStyles.description}>{task.description}</Text>
                    <Text style={IndividualTaskStyles.dueDate}>{task.end_date}</Text>
                    <Text style={IndividualTaskStyles.status}>{task.status}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={IndividualTaskStyles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}