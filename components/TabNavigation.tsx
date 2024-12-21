import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomTabBarProps {
    state: any;
    descriptors: any;
    navigation: any;
}

export default function CustomTabBar({ state, descriptors, navigation }: CustomTabBarProps) {
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.title || route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={[styles.tabItem, isFocused && styles.tabItemActive]}
                    >
                        <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderColor: '#ddd',
        height: 60,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabItemActive: {
        backgroundColor: '#e0e0e0',
    },
    tabLabel: {
        fontSize: 14,
        color: '#555',
    },
    tabLabelActive: {
        color: '#000',
        fontWeight: 'bold',
    },
});