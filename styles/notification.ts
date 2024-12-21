import { StyleSheet } from "react-native"
import { TypeScale } from "@/constants/TypeScale";
import { Colors } from "@/constants/Colors";

export const NotStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fundo semitransparente
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: 300,
        alignItems: 'center',
    },
    modalMessage: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },
    closeButton: {
        color: '#007bff',  // Cor do botão de fechar
        fontSize: 16,
        fontWeight: 'bold',
    },
});