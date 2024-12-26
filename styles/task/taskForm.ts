import { StyleSheet } from "react-native";
import {Colors} from "@/constants/Colors";
import { TypeScale } from "@/constants/TypeScale";

export const TaskFormStyles = StyleSheet.create({
    modalOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        backgroundColor: Colors.blue,
        width: '96%',
        borderRadius: 20,
        height: '100%',
    },

    form:{
        padding: 20,
    },

    close: {
        alignSelf: 'flex-start',
        margin: 15,
    },

    label: {
        color: Colors.lightYellow,
        fontSize: TypeScale.body2Bold.fontSize,
        fontFamily: TypeScale.body2Bold.fontFamily,
    },

    input : {
        backgroundColor: Colors.lightYellow,
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
        fontSize: TypeScale.uiElements3.fontSize,
        fontFamily: TypeScale.uiElements3.fontFamily,
    },

    description: {
        backgroundColor: Colors.lightYellow,
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
        fontSize: TypeScale.uiElements3.fontSize,
        fontFamily: TypeScale.uiElements3.fontFamily,
        height: 100,
        textAlignVertical: 'top',
    },

    check:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    swipeButton: {
        backgroundColor: Colors.blue,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
});