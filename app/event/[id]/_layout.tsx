import { Tabs } from "expo-router";

export default function EventLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="tasks" options={{
                title: 'Tasks',
                headerTitleAlign: 'center',
            }} />
            <Tabs.Screen name="tables" options={{
                title: 'Tables',
                headerTitleAlign: 'center',
            }} />
            <Tabs.Screen name="costs" options={{
                title: 'Settings',
                headerTitleAlign: 'center',
            }} />
            <Tabs.Screen name="chat" options={{
                title: 'Chat',
                headerTitleAlign: 'center',
            }} />
        </Tabs>
    );
}