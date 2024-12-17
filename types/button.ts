export interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: object;
    disabled?: boolean;
}