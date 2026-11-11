# Kampüs Etkinlikleri

Aynı repoda iki uygulama:

| Klasör | Ne | Adres |
|---|---|---|
| `frontend/` | React + Vite arayüzü (Bu sprintte değişmedi) | http://localhost:5173 |
| `backend/` | Node + Express REST API (Sprint 7) | http://localhost:3000/events · http://localhost:3000/health |

---

## Backend · Express ile REST API (`backend/`)

Detaylı döküman: [backend/README.md](backend/README.md)

### Çalıştırma

```bash
cd backend
npm install
cp .env.example .env   # Windows: copy .env.example .env
npm run dev
```

### Ortam Değişkenleri (`.env`)

| Değişken | Açıklama | Örnek |
|---|---|---|
| `PORT` | Sunucunun dinlediği port | `3000` |

### REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | `/health` | Sunucu ayakta mı (`student: "2416501053"`) | 200 | — | Bu sprint |
| GET | `/events` | Listeyi getir (`?category=Atölye` isteğe bağlı) | 200 | — | Bu sprint |
| GET | `/events/:id` | Tek etkinlik | 200 | 404 | Bu sprint |
| POST | `/events` | Yeni etkinlik | 201 | 400 | Bu sprint |
| PATCH | `/events/:id` | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Sil | 204 | 404 | Sprint 9 |

**Status code'lar:** `200` tamam · `201` oluşturuldu · `204` içerik yok · `400` eksik/yanlış veri · `404` bulunamadı

**Bütün hatalar aynı biçimde:**

```json
{ "error": { "message": "Event not found" } }
```

### Postman ile 6 İstek ([backend/requests/kampus-api.json](backend/requests/kampus-api.json))

| # | İstek | Test Adresi / Gövde | Beklenen |
|---|---|---|---|
| 1 | `GET /health` | http://localhost:3000/health | `200 OK` · `ok + student` |
| 2 | `GET /events` | http://localhost:3000/events | `200 OK` · `6 kayıt` |
| 3 | `GET /events/event-2` | http://localhost:3000/events/event-2 | `200 OK` · `event-2` |
| 4 | `GET /events/yok` | http://localhost:3000/events/yok | `404 Not Found` · `error` |
| 5 | `POST /events` (tam body) | `http://localhost:3000/events` (`title`, `category`, `date`) | `201 Created` · `yeni id` |
| 6 | `POST /events` (sadece title) | `http://localhost:3000/events` (`{"title": "Sadece başlık"}`) | `400 Bad Request` · `error` |

---

## Frontend (`frontend/`)

```bash
cd frontend
npm install
npm run dev
```

Detaylar ve route listesi: [frontend/README.md](frontend/README.md)
