import { SafeAreaView, View, Text, FlatList } from "react-native";
import useTasks from "@/hooks/Tasks/useTasks";
import TaskCard from "@/components/task/taskCard";
import { TaskFields } from "@/types/task";
import { TaskMainStyles } from "@/styles/task/taskMain";
//import CalendarDays from "react-native-calendar-slider-carousel";

export default function TaskPage() {
    const tasks = useTasks();

    const renderItem = ({ item }: { item: TaskFields }) => (
        <TaskCard task={item} />
    );
    return (
        <SafeAreaView style={TaskMainStyles.mainContainer}>
            <View style={TaskMainStyles.container}>
                <View style={TaskMainStyles.textContainer}>
                    <Text style={TaskMainStyles.text}>Back</Text>
                    <Text style={TaskMainStyles.text}>Tasks</Text>
                    <Text style={TaskMainStyles.text}>Options</Text>
                </View>
                <View style={TaskMainStyles.textContainer}>
                    <FlatList
                        data={tasks}
                        renderItem={renderItem}
                        keyExtractor={item => item.task_id.toString()}
                        style={TaskMainStyles.FlatList}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}