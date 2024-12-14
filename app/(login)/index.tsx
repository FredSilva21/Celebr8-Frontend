import React from 'react';
import { SafeAreaView,View,Text } from "react-native";
import { Link } from 'expo-router';
import { LoginForm } from '@/components/auth/AuthForms';

export default function LoginPage() {
    return (
        <SafeAreaView>
            <Text>Login Page</Text>
            <LoginForm />  
        </SafeAreaView> 
        );
    }