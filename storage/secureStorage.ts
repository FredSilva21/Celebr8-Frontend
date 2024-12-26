// src/utils/storage.ts
import * as SecureStore from 'expo-secure-store';
import { TokenProps } from '@/types/user';

const debugSecureStore = async () => {
    const KEYS = ['refresh_token', 'access_token', 'user_id'];

    try {
        const results = await Promise.all(
            KEYS.map(async (key) => {
                const value = await SecureStore.getItemAsync(key);
                return { key, value };
            })
        );

        console.log('SecureStore Debug:', JSON.stringify(results, null, 2));
    } catch (error) {
        console.error('Error debugging SecureStore:', error);
    }
};


export const storeToken = async (key: string, value: string) => {
    try {
        const existingData = await SecureStore.getItemAsync(key);
        if (existingData) {
            removeData(key);
        }
        
        let newData = value

        await SecureStore.setItemAsync(key, newData);

        console.log(`Data successfully stored for key: ${key}`);
        debugSecureStore();
    } catch (error) {
        console.error("Error storing data in SecureStore:", error);
    }
};

export const getData = async (key: string) => {
    try {
        const data = await SecureStore.getItemAsync(key);
        
        if (!data) {
            return null;
        } 
        if(typeof data === 'string') {
            return data;
        }
        return JSON.parse(data);
    } catch (error) {
        console.error("Error getting data from SecureStore:", error);
        return null;
    }
}

export const removeData = async (key: string) => {
    try {
        await SecureStore.deleteItemAsync(key);
        debugSecureStore()
    } catch (error) {
        console.error("Error removing data from SecureStore:", error);
    }
}