import LinearGradient from "react-native-linear-gradient";
import { Text } from "react-native";
import { Colors } from "@/constants/Colors";
import { GradientTextProps } from "@/types/gradient";

export default function GradientText({ text }: GradientTextProps) {
    return (
        <LinearGradient
            colors={Colors.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ padding: 15, borderRadius: 20, marginBottom: 10 }}
        >
            <Text style={{ color: '#fff' }}>{text}</Text>
        </LinearGradient>
    );
}