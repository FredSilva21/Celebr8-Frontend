import { StyleSheet } from "react-native"
import { TypeScale } from "@/constants/TypeScale";
import { Colors } from "@/constants/Colors";

export const AuthStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: Colors.lightYellow,
    },

    titleContainer: {
        justifyContent: 'flex-start',
    },

    title: {
        fontFamily: TypeScale.h1.fontFamily,
        fontSize: TypeScale.h1.fontSize,
        color: Colors.blue,
    },

    description: {
        fontFamily: TypeScale.body1.fontFamily,
        fontSize: TypeScale.body1.fontSize,
        color: Colors.greenBlue,
    },

    input: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.blue,
        padding: 10,   
        marginVertical: 10,
    },

    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    button: {
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        width: '100%',
    },

    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.grey,
    },

    orText: {
        marginHorizontal: 10,
        color: Colors.greenBlue,
        fontFamily: TypeScale.uiElements3.fontFamily,
        fontSize: TypeScale.uiElements3.fontSize,
    },

    changeContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flex: 1,
    },
    
    gradientText: {
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});