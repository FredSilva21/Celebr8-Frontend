import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { NotStyles } from '@/styles/notification';

interface ConfirmationModalProps {
    message: string;
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmationModal({ message, visible, onConfirm, onCancel }: ConfirmationModalProps) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={NotStyles.modalOverlay}>
                <View style={NotStyles.modalContainer}>
                    <Text style={NotStyles.modalMessage}>{message}</Text>
                    <View style={NotStyles.buttonContainer}>
                        <TouchableOpacity style={NotStyles.confirmButton} onPress={onConfirm}>
                            <Text style={NotStyles.confirmButtonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={NotStyles.cancelButton} onPress={onCancel}>
                            <Text style={NotStyles.cancelButtonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
