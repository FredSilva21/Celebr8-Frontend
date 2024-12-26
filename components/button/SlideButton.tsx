import SwipeButton from 'rn-swipe-button';
import { SlideButtonProps } from '@/types/button';

export default function SlideButtonComponent({ title, handleSubmit, style }: SlideButtonProps) {
    return (
        <SwipeButton
            title={title}
            onSwipeSuccess={handleSubmit}
            width={330}
            height={46}
            backgroundColor="#FFD966"
            textColor="#ffffff"
            thumbColor="#ffffff"
            iconColor="#FFD966"
            iconSize={30}
        />
    );
}