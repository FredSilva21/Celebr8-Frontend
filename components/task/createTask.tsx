import React, { useRef, useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Animated, Dimensions, TextInput } from 'react-native';
import { createTask } from '@/api/tasks';
import { getData } from '@/storage/secureStorage';
import CloseIcon from '@/assets/images/Close.svg';
import { TaskFormStyles } from '@/styles/task/taskForm';
import { CheckBox } from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import SlideButtonComponent from '../button/SlideButton';

const { height } = Dimensions.get('window');

export default function CreateTask({ visible, onClose }: { visible: boolean, onClose: () => void }) {
    const slideAnim = useRef(new Animated.Value(height)).current;

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleSubmit = async () => {
        try {
            const token = await getData('access_token');
            const user_id = await getData('user_id');

            console.log("Token", token);
            console.log("User ID", user_id);

            if (!token || !user_id) return;

            if (typeof user_id !== 'string') return;

            const fields = { user_id: Number(user_id), event_id: 2150, fields: { title, description, start_date: new Date().toISOString(), end_date: dueDate.toISOString(), priority, status: false } };
            console.log("Fields", fields);
            await createTask(token, fields).then((data) => {
                console.log("RESPONSE", data);
                setTitle('');
                setPriority('');
                setDescription('');
                setDueDate(new Date());
                onClose();
            })
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: height * 0.15,
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

    const onDateChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || dueDate;
        setShowDatePicker(false);
        setDueDate(currentDate);
    };
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={TaskFormStyles.modalOverlay}>
                <Animated.View
                    style={[
                        TaskFormStyles.modalContainer,
                        { transform: [{ translateY: slideAnim }] },
                    ]}
                >
                    <View style={TaskFormStyles.close}>
                        <TouchableOpacity onPress={onClose} >
                            <CloseIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={TaskFormStyles.form}>
                        <View>
                            <Text style={TaskFormStyles.label}>
                                What's your task?
                            </Text>
                            <TextInput
                                style={TaskFormStyles.input}
                                placeholder="Task Name"
                                value={title}
                                onChangeText={setTitle}
                            />
                        </View>
                        <View>
                            <View>
                                <Text style={TaskFormStyles.label}>
                                    What's the deadline?
                                </Text>
                                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={TaskFormStyles.input}>
                                    <Text>{dueDate.toLocaleDateString()}</Text>
                                </TouchableOpacity>
                                {showDatePicker && (
                                    <DateTimePicker
                                        value={dueDate}
                                        mode="date"
                                        display="default"
                                        onChange={onDateChange}
                                        minimumDate={new Date()}
                                    />
                                )}
                            </View>
                        </View>
                        <View>
                            <Text style={TaskFormStyles.label}>
                                Set the priority
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                                <CheckBox checked={priority === "Low"} title="Label" onPress={() => setPriority("Low")} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" />
                                <CheckBox checked={priority === "Medium"} title="Medium" onPress={() => setPriority("Medium")} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" />
                                <CheckBox checked={priority === "High"} title="High" onPress={() => setPriority("High")} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" />
                            </View>
                        </View>
                        <View>
                            <Text style={TaskFormStyles.label}>
                                Describe your task:
                            </Text>
                            <TextInput
                                style={TaskFormStyles.description}
                                placeholder="Description"
                                value={description}
                                onChangeText={setDescription}
                                multiline
                            />
                        </View>
                    </View>
                    <View style={TaskFormStyles.swipeButton}>
                        <SlideButtonComponent title="Create Task" handleSubmit={handleSubmit} />
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}