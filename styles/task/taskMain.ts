import { FlatList, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { TypeScale } from "@/constants/TypeScale";

export const TaskMainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
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

    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: Colors.lightYellow
    },

    text: {
        fontSize: TypeScale.body1.fontSize,
        fontFamily: TypeScale.body1.fontFamily,
    },

    cardContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: Colors.lightYellow
    },
    FlatList: {
        flex: 3,
    },
});
