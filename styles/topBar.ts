import { StyleSheet } from "react-native"
import { TypeScale } from "@/constants/TypeScale";
import { Colors } from "@/constants/Colors";

export const topBarStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.blue,
        padding: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title1: {
        fontFamily: TypeScale.body3.fontFamily,
        fontSize: TypeScale.body3.fontSize,
        color: Colors.white,
    },
    title2: {
        fontFamily: TypeScale.body3.fontFamily,
        fontSize: TypeScale.body3.fontSize,
        color: Colors.yellow,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
});