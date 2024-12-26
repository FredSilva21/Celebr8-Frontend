import { Tabs } from "expo-router";
import CustomTabBar from "@/components/TabNavigation"; // Atualize o caminho se necessário

export default function EventLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen
                name="tasks"
                options={{
                    title: 'Tasks',
                }}
            />
            <Tabs.Screen
                name="tables"
                options={{
                    title: 'Tables',
                }}
            />
            <Tabs.Screen
                name="costs"
                options={{
                    title: 'Settings',
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Chat',
                }}
            />
        </Tabs>
    );
}
