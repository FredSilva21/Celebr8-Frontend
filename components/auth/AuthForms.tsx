import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { AuthStyles } from '@/styles/auth';
import ButtonComponent from '@/components/Button';
import useLogin from '@/hooks/Auth/useLogin';
import { useRouter } from 'expo-router';
import useRegister from '@/hooks/Auth/useRegister';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { performLogin, loading, error } = useLogin(); // Hook retorna a função performLogin
    const router = useRouter()

    const handleLogin = () => {
        performLogin({ email, password })
    }

    return (
        <View style={AuthStyles.container}>
            <View style={AuthStyles.container}>
                <Text style={AuthStyles.title}>Login Account</Text>
                <Text style={AuthStyles.description}>Welcome Back!</Text>
            </View>
            <View style={AuthStyles.formContainer}>
                <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={AuthStyles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={AuthStyles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <ButtonComponent
                    title={loading ? "Carregando..." : "Login"}
                    onPress={handleLogin}
                    style={AuthStyles.button}
                    disabled={loading}
                />

                {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
            </View>
            <Text>
                Don't have an account? <Text onPress={() => router.push('/register')} style={{ color: 'blue' }}>Register</Text>
            </Text>
        </View>
    );
}

export function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { performRegister, loading, error } = useRegister(); // Hook retorna a função performLogin
    const router = useRouter()

    const handleRegisyter = () => {
        performRegister({name, email, password })
    }

    return (
        <View style={AuthStyles.container}>
            <View style={AuthStyles.container}>
                <Text style={AuthStyles.title}>Create Account</Text>
                <Text style={AuthStyles.description}>Sign up to continue!</Text>
            </View>
            <View style={AuthStyles.formContainer}>
                <TextInput
                    placeholder="Name"
                    style={AuthStyles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={AuthStyles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    style={AuthStyles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <ButtonComponent
                    title={loading ? "Carregando..." : "Register"}
                    onPress={handleRegisyter}
                    style={AuthStyles.button}
                    disabled={loading}
                />

                {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
            </View>
            <Text>
                Already have an account? <Text onPress={() => router.push('/(login)')} style={{ color: 'blue' }}>Login</Text>
            </Text>
        </View>
    );
}