import React from "react";
import { View, Text, FlatList } from "react-native";
import TopBar from "@/components/TopBar";
import { EventProps } from "@/types/event";
import useEvents from "@/hooks/Events/useEvents";
import EventCard from "@/components/event/eventCard";

export default function EventPage() {
  const events = useEvents();

  const renderItem = ({ item }: { item: EventProps }) => (
    <EventCard event={item.Event} />
  );

  return (
    <View>
      <TopBar />
      <Text>Events Page</Text>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
