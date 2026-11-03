import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <div className="detail-page">
      <div className="poster-box">
        <h2>{event.title}</h2>
        <p>{formatDate(event.date)} · {event.location}</p>
      </div>
      <span className="poster-caption">{event.title} afişi</span>

      <div className="info-box">
        <h3>Etkinlik Künyesi</h3>
        <dl>
          <dt>Tarih</dt>
          <dd>{formatDate(event.date)}, {event.time}</dd>
          <dt>Yer</dt>
          <dd>{event.location}</dd>
          <dt>Kategori</dt>
          <dd>{event.category}</dd>
          <dt>Kontenjan</dt>
          <dd>{event.capacity} kişi</dd>
        </dl>
      </div>

      <div className="desc-box">
        <h3>Açıklama</h3>
        <p>{event.description}</p>
      </div>

      <div className="detail-actions">
        <Link className="buton buton-ikinci" to="/events">← Listeye dön</Link>
        <Link className="buton" to={`/admin/${event.id}/edit`}>Güncelle</Link>
      </div>
    </div>
  );
}

export default EventDetail;