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
        fontSize: TypeScale.body2Bold.fontSize,
        fontFamily: TypeScale.body2Bold.fontFamily,
        color: Colors.yellow,
    },
    dueDate: {
        fontSize: TypeScale.body3.fontSize,
        fontFamily: TypeScale.body3.fontFamily,
        color: Colors.lightYellow,
    },
    status: {
        fontSize: TypeScale.body3.fontSize,
        fontFamily: TypeScale.body3.fontFamily,
    },
});