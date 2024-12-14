import { Stack } from "expo-router";

export default function EventsLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: "Event",
                headerTitleAlign: "center",
            }} />
            <Stack.Screen name="event/[id]" options={{
                title: "Event Individual",
                headerTitleAlign: "center",
            }} />
        </Stack>
    );
}