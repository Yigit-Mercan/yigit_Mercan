import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="event-card">
      <h3 className="card-title">{event.title}</h3>
      <p className="card-category">{event.category}</p>
      <p><strong>Tarih:</strong> {formatDate(event.date)}, {event.time}</p>
      <p><strong>Yer:</strong> {event.location}</p>
      <p><strong>Kontenjan:</strong> {event.capacity} kişi</p>
      <p className="card-desc">{event.description}</p>
      <Link className="card-link" to={`/events/${event.id}`}>
        Detayları gör
      </Link>
    </article>
  );
}

export default EventCard;