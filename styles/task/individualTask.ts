import { StyleSheet } from "react-native";
import { TypeScale } from "@/constants/TypeScale";
import { Colors } from "@/constants/Colors";

export const IndividualTaskStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightYellow,
        padding: 20,
        borderRadius: 10,
    },

    closeButton: {
        backgroundColor: Colors.lightYellow,
        padding: 10,
        borderRadius: 10,
    },

    closeText: {
        fontSize: TypeScale.body2.fontSize,
        fontFamily: TypeScale.body2.fontFamily,
    },

    title: {
        fontSize: TypeScale.h2Bold.fontSize,
        fontFamily: TypeScale.h2Bold.fontFamily,
        color: Colors.lightYellow,
    },

    description: {
        fontSize: TypeScale.body2.fontSize,
        fontFamily: TypeScale.body2.fontFamily,
    },

    dueDate: {
        fontSize: TypeScale.body2.fontSize,
        fontFamily: TypeScale.body2.fontFamily,
    },

    status: {
        fontSize: TypeScale.body2.fontSize,
        fontFamily: TypeScale.body2.fontFamily,
    },
});