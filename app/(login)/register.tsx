import React from 'react';
import { SafeAreaView,View,Text,StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { RegisterForm } from '@/components/auth/AuthForms';

export default function RegisterPage() {
    return (
        <SafeAreaView style={styles.container}>
            <RegisterForm />  
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