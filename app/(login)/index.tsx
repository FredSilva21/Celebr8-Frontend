import React from 'react';
import { SafeAreaView,View,Text,StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { LoginForm } from '@/components/auth/AuthForms';

export default function LoginPage() {
    return (
        <SafeAreaView style={styles.container}>
            <LoginForm />  
        </SafeAreaView> 
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});