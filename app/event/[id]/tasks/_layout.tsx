import { Stack } from "expo-router";

export default function TasksLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
            <Stack.Screen name="[id]" options={{
                title: 'Individual Task',
                headerTitleAlign: 'center',
            }} />
        </Stack>
    );
}