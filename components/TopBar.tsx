import React from 'react';
import { View, Text, Image } from 'react-native';
import { topBarStyles } from '@/styles/topBar';
import useUser from '@/hooks/User/useUser';
import NotificationIcon from '@/assets/images/Notification Button.svg';

export default function TopBar() {
    const user = useUser();
    console.log("User:", user)

    if (!user) {
        return (
            <View style={topBarStyles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={topBarStyles.container}>
            <View style={topBarStyles.leftContainer}>
                <NotificationIcon style={topBarStyles.image} />
                <View style={topBarStyles.text}>
                    <Text style={topBarStyles.title1}>Welcome Back,</Text>
                    <Text style={topBarStyles.title2}>{user.name}</Text>
                </View>
            </View>
            <View style={topBarStyles.rightContainer}>
                <NotificationIcon style={topBarStyles.image} />
            </View>
        </View>
    );
}