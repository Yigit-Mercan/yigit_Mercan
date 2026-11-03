import type { CampusEvent, Category } from "../types/campus-event";

export function searchEvents(events: CampusEvent[], text: string): CampusEvent[] {
  const q = text.trim().toLocaleLowerCase("tr-TR");
  return events.filter((e) => e.title.toLocaleLowerCase("tr-TR").includes(q));
}

export function filterByCategory(
  events: CampusEvent[],
  category: Category | ""
): CampusEvent[] {
  if (category === "") return events;
  return events.filter((e) => e.category === category);
}

export function findEventById(
  events: CampusEvent[],
  id: string
): CampusEvent | undefined {
  return events.find((e) => e.id === id);
}