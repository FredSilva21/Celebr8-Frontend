import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from "react-native";
import useTasks from "@/hooks/Tasks/useTasks";
import TaskCard from "@/components/task/taskCard";
import { TaskFields } from "@/types/task";
import { TaskMainStyles } from "@/styles/task/taskMain";
//import CalendarDays from "react-native-calendar-slider-carousel";
import BackIcon from '@/assets/images/Back Button.svg'
import DotsIcon from '@/assets/images/Dots.svg'
import { useRouter } from "expo-router";
import CreateTask from "@/components/task/createTask";
import { useState } from "react";

export default function TaskPage() {
    const { tasks } = useTasks();
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    const renderItem = ({ item }: { item: TaskFields }) => (
        <TaskCard task={item} />
    );
    return (
        <SafeAreaView style={TaskMainStyles.mainContainer}>
            <View style={TaskMainStyles.container}>
                <View style={TaskMainStyles.topContainer}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <BackIcon></BackIcon>
                    </TouchableOpacity>
                    <Text style={TaskMainStyles.text}>Tasks</Text>
                    <TouchableOpacity>
                        <DotsIcon></DotsIcon>
                    </TouchableOpacity>
                </View>
                <View style={TaskMainStyles.taskContainer}>
                    <FlatList
                        data={tasks}
                        renderItem={renderItem}
                        keyExtractor={item => item.task_id.toString()}
                        style={{ width: '100%' }}
                    />
                </View>
                <View>
                    <TouchableOpacity style={TaskMainStyles.floatingButton} onPress={()=> setVisible(true)}>
                        <Text style={TaskMainStyles.addTaskText}>Create Task</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <CreateTask visible={visible} onClose={() => setVisible(false)} />
        </SafeAreaView>
    );
}