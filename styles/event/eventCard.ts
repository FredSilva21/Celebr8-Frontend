import { StyleSheet } from "react-native";

export const eventCardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    text: {
        fontSize: 20,
        fontWeight: "bold",
    },

    date: {
        fontSize: 16,
    },

    location: {
        fontSize: 16,
    },

    guests: {
        fontSize: 16,
    },

    costs: {
        fontSize: 16,
    },

    category: {
        fontSize: 16,
    },

    button: {
        backgroundColor: "#f4511e",
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
});