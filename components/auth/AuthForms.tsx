import React from 'react';
import { View, Text } from "react-native";
import { login, register } from '@/api/auth';
import { NativeBaseProvider, Box } from "native-base";

export function LoginForm() {
    return (
        <View>
        <NativeBaseProvider>
            <Box>Hello world</Box>
        </NativeBaseProvider>
    );
}

export function RegisterForm() {
    return (
        <View>
            <Text>Register Form</Text>
        </View>
    );
}