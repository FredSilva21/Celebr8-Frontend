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
        alignItems: 'center',
        backgroundColor: Colors.blue,
        padding: 20,
        borderRadius: 10,
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },

    closeText: {
        fontSize: TypeScale.body2.fontSize,
        fontFamily: TypeScale.body2.fontFamily,
    },

    titleContainer: {
        marginVertical: 30,
    },

    title: {
        fontSize: TypeScale.h2Bold.fontSize,
        fontFamily: TypeScale.h2Bold.fontFamily,
        color: Colors.yellow,
    },

    inputsContainer: {
        width: '100%',
        marginVertical: 10,
    },

    input: {
        width: '100%',
        borderColor: Colors.lightYellow,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
    },

    description: {
        fontSize: TypeScale.uiElements3.fontSize,
        fontFamily: TypeScale.uiElements3.fontFamily,
        color: Colors.lightYellow,
    },

    label: {
        fontSize: TypeScale.body2Bold.fontSize,
        fontFamily: TypeScale.body2Bold.fontFamily,
        color: Colors.yellow
    },

    dueDate: {
        fontSize: TypeScale.body2.fontSize,
        fontFamily: TypeScale.body2.fontFamily,
        color: Colors.lightYellow
    },

    buttonContainer: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 50,
    },
});