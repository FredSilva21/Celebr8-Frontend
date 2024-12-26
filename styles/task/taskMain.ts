import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { TypeScale } from "@/constants/TypeScale";

export const TaskMainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: Colors.lightYellow
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.lightYellow
    },

    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightYellow,
        padding: 20,
        width: '100%',
        marginVertical: 10,
        marginHorizontal: 20,
    },

    taskContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: Colors.lightYellow
    },

    text: {
        fontSize: TypeScale.h2.fontSize,
        fontFamily: TypeScale.h2.fontFamily,
    },

    floatingButton: {
        position: 'fixed',
        bottom: 20,
        left:0,
        width: 353,
        height: 46,
        backgroundColor: Colors.yellow,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },

    addTaskText: {
        color: Colors.blue,
        fontSize: TypeScale.uiElements1.fontSize,
        fontFamily: TypeScale.uiElements1.fontFamily,
    }
});