import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { CampusEvent, Category, EventFormData } from "../types/campus-event";
import { initialEvents } from "../data/events";

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextValue | null>(null);

// toEvent: form verisini CampusEvent'e çevirir
function toEvent(id: string, data: EventFormData): CampusEvent {
  return {
    id,
    title: data.title.trim(),
    category: data.category as Category,
    date: data.date,
    time: data.time,
    location: data.location.trim(),
    description: data.description.trim(),
    capacity: Number(data.capacity),
  };
}

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);

  // Ekle: dizinin sonuna yenisini ekler
  function addEvent(data: EventFormData) {
    setEvents((prev) => [...prev, toEvent(`event-${Date.now()}`, data)]);
  }

  // Güncelle: map ile eşleşeni değiştirir
  function updateEvent(id: string, data: EventFormData) {
    setEvents((prev) => prev.map((e) => (e.id === id ? toEvent(id, data) : e)));
  }

  // Sil: filter ile eşleşmeyenler kalır
  function deleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const value = useContext(EventsContext);
  if (value === null) throw new Error("Provider yok");
  return value;
}