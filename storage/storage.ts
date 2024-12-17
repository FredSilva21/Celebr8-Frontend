// src/utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const debugStorage = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);

        const mappedValues = values.map(([key, value]) => ({
            key,
            value: value ? JSON.parse(value) : null,
        }));

        console.log("AsyncStorage content:", JSON.stringify(mappedValues, null, 2));
    } catch (error) {
        console.error("Error accessing AsyncStorage:", error);
    }
};


export const storeData = async <T>(key: string, value: T, append: boolean = false) => {
    try {
        if (append) {
            const existingData = await AsyncStorage.getItem(key);
            let newData = [];

            if (existingData) {
                newData = JSON.parse(existingData)
                if (Array.isArray(newData)) {
                    newData.push(value);
                } else {
                    console.warn(`Key "${key}" does not contain an array. Overwriting data.`);
                    newData = [value];
                }
            } else {
                newData = [value];
            }

            await AsyncStorage.setItem(key, JSON.stringify(newData));
        } else {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        }

        console.log(`Data successfully stored for key: ${key}`);
        debugStorage();
    } catch (error) {
        console.error("Error storing data in AsyncStorage:", error);
    }
};

// Function to get data from AsyncStorage
export const getData = async <T>(key: string): Promise<T | null> => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (!data) {
            return null;
        }

        return JSON.parse(data);
    } catch (error) {
        console.error("Error getting data from AsyncStorage:", error);
        return null;
    }
}

// Function to remove data from AsyncStorage
export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
        debugStorage();
    } catch (error) {
        console.error("Error removing data from AsyncStorage:", error);
    }
}

// Function to clear all data from AsyncStorage
export const clearAllData = async () => {
    try {
        await AsyncStorage.clear();
        debugStorage();
    } catch (error) {
        console.error("Error clearing all data from AsyncStorage:", error);
    }
}