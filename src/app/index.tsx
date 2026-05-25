
import { api } from '@/server/api';
import { isAxiosError } from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    async function handleSignIn() {
        try {
           const response = await api.post("/user", {email, password}); 
              Alert.alert("Olá",response.data.name);
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.response) {
                } else if (error.request) {
                    return Alert.alert("Erro de Conexão", "O servidor não respondeu. Verifique o IP na configuração da API.");
                }
            }
            Alert.alert("Erro", "Ocorreu um erro inesperado");
        }
    }
   
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#000" />
            <TextInput style={styles.input} placeholder="E-mail" onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" 
            secureTextEntry={true} onChangeText={setPassword} />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.text}>Entrar </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        gap: 16,
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        height: 54, 
        padding: 16,
        borderRadius: 5,
        backgroundColor: '#E3E3E3',
    },
    button: {
        width: '100%',
        height: 54, 
        borderRadius: 5,
        backgroundColor: '#CECECE',
        alignItems: 'center',
        justifyContent: 'center',
    }
})