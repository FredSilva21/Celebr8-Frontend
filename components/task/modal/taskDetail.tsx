import React from 'react';
import { Animated, Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native';
import { IndividualTaskStyles } from '@/styles/task/individualTask';
import CloseIcon from '@/assets/images/Close.svg';
import EditIcon from '@/assets/images/Edit.svg';
import ButtonComponent from '../../button/Button';
import { TaskDetailsModalProps } from '@/types/task';

const { height } = Dimensions.get('window');
export default function TaskDetailsModal({
    task,
    visible,
    slideAnim,
    onClose,
    onEdit,
    onDelete,
}: TaskDetailsModalProps) {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={IndividualTaskStyles.modalOverlay}>
                <Animated.View
                    style={[
                        IndividualTaskStyles.modalContainer,
                        { transform: [{ translateY: slideAnim }] },
                    ]}
                >
                    <View style={IndividualTaskStyles.actions}>
                        <TouchableOpacity onPress={onClose}>
                            <CloseIcon />
                        </TouchableOpacity>
                        <Text>In Progress</Text>
                        <TouchableOpacity onPress={onEdit}>
                            <EditIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={IndividualTaskStyles.titleContainer}>
                        <Text style={IndividualTaskStyles.title}>{task.title}</Text>
                    </View>
                    <View style={IndividualTaskStyles.inputsContainer}>
                        <View style={IndividualTaskStyles.input}>
                            <Text style={IndividualTaskStyles.label}>Due Date:</Text>
                            <Text style={IndividualTaskStyles.dueDate}>{task.end_date}</Text>
                        </View>
                        <View style={IndividualTaskStyles.input}>
                            <Text style={IndividualTaskStyles.label}>Priority:</Text>
                            <Text style={IndividualTaskStyles.dueDate}>{task.priority}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={IndividualTaskStyles.label}>Description:</Text>
                        <Text style={IndividualTaskStyles.description}>{task.description}</Text>
                    </View>
                    <View style={IndividualTaskStyles.buttonContainer}>
                        <ButtonComponent title="Delete Task" onPress={onDelete} />
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}