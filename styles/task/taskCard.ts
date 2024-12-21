import { StyleSheet } from "react-native";
import { TypeScale } from "@/constants/TypeScale";
import { Colors } from "@/constants/Colors";

export const TaskCardStyles = StyleSheet.create({
    cardContainer:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:Colors.greenBlue
    },
    textContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:Colors.greenBlue
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