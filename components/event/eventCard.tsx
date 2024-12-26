import React from 'react';
import { View, Text } from 'react-native';
import { EventFields } from '@/types/event';
import { eventCardStyles } from '@/styles/event/eventCard';
import { Link } from 'expo-router';

export default function EventCard({ event }: { event: EventFields }) {
    return (
        <Link href={`/event/${event.id}`}>
            <View style={eventCardStyles.container}>
                <Text style={eventCardStyles.text}>Name:{event.name}</Text>
                <Text>Date:{event.date}</Text>
                <Text>Location:{event.location}</Text>
                <Text>Guests Limit:{event.guests_limit}</Text>
                <Text>Costs Limit:{event.costs_limit}€</Text>
                <Text>Category{event.category_id}</Text>
            </View>
        </Link>
    );
}