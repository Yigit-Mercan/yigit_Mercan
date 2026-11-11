# Kampüs Etkinlikleri · Backend (REST API)

Node.js + Express ile yazılmış, etkinlikleri JSON olarak veren sunucu. Veri şimdilik bellekte tutulur (sunucu yeniden başlayınca POST ile eklenenler kaybolur).

## Çalıştırma

```bash
cd backend
npm install
cp .env.example .env   # Windows: copy .env.example .env
npm run dev
```

Sunucu: http://localhost:3000

## Ortam değişkenleri

| Değişken | Açıklama | Örnek |
|---|---|---|
| `PORT` | Sunucunun dinlediği port | `3000` |

## REST sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | `/health` | Sunucu ayakta mı | 200 | — | Bu sprint |
| GET | `/events` | Listeyi getir (`?category=Atölye` isteğe bağlı) | 200 | — | Bu sprint |
| GET | `/events/:id` | Tek etkinlik | 200 | 404 | Bu sprint |
| POST | `/events` | Yeni etkinlik | 201 | 400 | Bu sprint |
| PATCH | `/events/:id` | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Sil | 204 | 404 | Sprint 9 |

**Status code'lar:** 200 tamam · 201 oluşturuldu · 204 içerik yok · 400 eksik/yanlış veri · 404 bulunamadı

**Bütün hatalar aynı biçimde:**

```json
{ "error": { "message": "Event not found" } }
```

**POST /events zorunlu alanlar:** `title`, `category`, `date`

## Testler

6 istek Postman collection olarak `requests/kampus-api.json` dosyasında.

| # | İstek | Beklenen |
|---|---|---|
| 1 | GET /health | 200 · ok + student |
| 2 | GET /events | 200 · 6 kayıt |
| 3 | GET /events/event-2 | 200 · event-2 |
| 4 | GET /events/yok | 404 · error |
| 5 | POST /events (tam body) | 201 · yeni id |
| 6 | POST /events (sadece title) | 400 · error |
