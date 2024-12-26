export interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: object;
    disabled?: boolean;
}

export interface SlideButtonProps {
    title: string;
    handleSubmit: () => void;
    style?: object;
}