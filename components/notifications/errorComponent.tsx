import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { NotStyles } from '@/styles/notification';


interface ErrorComponentProps {
    message: string;
    visible: boolean;
    onClose: () => void;
}

export default function ErrorModal({ message, visible, onClose }: ErrorComponentProps) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={NotStyles.modalOverlay}>
                <View style={NotStyles.modalContainer}>
                    <Text style={NotStyles.modalMessage}>{message}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={NotStyles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}