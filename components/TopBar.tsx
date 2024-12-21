import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { topBarStyles } from '@/styles/topBar';

export default function TopBar() {
    return (
        <View style={topBarStyles.container}>
            <View style={topBarStyles.leftContainer}>
                <View style={topBarStyles.image}>
                    <Text style={topBarStyles.image}>Image</Text>
                </View>
                <View style={topBarStyles.text}>
                    <Text style={topBarStyles.title1}>Welcome Back,</Text>
                    <Text style={topBarStyles.title2}>Username</Text>
                </View>
            </View>
            <View style={topBarStyles.rightContainer}>
                <Text style={topBarStyles.image}>Notification</Text>
            </View>
        </View>
    );
}