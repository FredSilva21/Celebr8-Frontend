import { ButtonProps } from "@/types/button";
import { Button } from "@rneui/themed";

export default function ButtonComponent({ title, onPress, style }: ButtonProps) {
    return (
        <Button onPress={onPress}>
            {title}
        </Button>
    );
}