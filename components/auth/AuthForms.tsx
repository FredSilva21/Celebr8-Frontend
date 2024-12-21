import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { AuthStyles } from '@/styles/auth';
import ButtonComponent from '@/components/Button';
import useLogin from '@/hooks/Auth/useLogin';
import { useRouter } from 'expo-router';
import useRegister from '@/hooks/Auth/useRegister';
import GradientText from '../gradient/gradientText';
import ErrorModal from '../notifications/errorComponent';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { performLogin, loading, error } = useLogin(); // Hook retorna a função performLogin
    const router = useRouter()

    const handleLogin = () => {
        performLogin({ email, password })
    }

    useEffect(() => {
        if (error) {
            setModalVisible(true);
        }
    }, [error]);

    return (
        <View style={AuthStyles.container}>
            <ErrorModal
                visible={modalVisible}
                message={error || ''}
                onClose={() => setModalVisible(false) }
            />
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
            </View>
            <View style={AuthStyles.lineContainer}>
                <View style={AuthStyles.line}></View>
                <Text style={AuthStyles.orText}>or logged in</Text>
                <View style={AuthStyles.line}></View>
            </View>
            <View style={AuthStyles.changeContainer}>
                <Text style={{ textAlign: 'center' }}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => router.push('/register')}>
                    {/* <GradientText text="Register" /> */}
                    <Text style={AuthStyles.gradientText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    const { performRegister, loading, error } = useRegister();
    const router = useRouter()

    const handleRegister = () => {
        performRegister({ name, email, password })
    }

    useEffect(() => {
        if (error) {
            setModalVisible(true); 
        }
    }, [error]);

    return (
        <View style={AuthStyles.container}>
             <ErrorModal
                visible={modalVisible}
                message={error || ''}
                onClose={() => setModalVisible(false) }
            />
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
                    onPress={handleRegister}
                    style={AuthStyles.button}
                    disabled={loading}
                />
            </View>
            <View style={AuthStyles.lineContainer}>
                <View style={AuthStyles.line}></View>
                <Text style={AuthStyles.orText}>or sign in with</Text>
                <View style={AuthStyles.line}></View>
            </View>
            <View>
                {/* <ButtonComponent
                title={loading ? "Carregando..." : "Sign in with Google"}
                onPress={handleGoogle}
                style={AuthStyles.button}
                disabled={loading}></ButtonComponent> */}
            </View>
            <View style={AuthStyles.container}>
                <Text style={{ textAlign: 'center' }}>
                    Already have an account? <Text onPress={() => router.push('/(login)')}>Login</Text>
                </Text>
            </View>
        </View>
    );
}