export type Category = "Seminer" | "Atölye" | "Söyleşi" | "Konferans";

export interface CampusEvent {
  id: string;
  title: string;
  category: Category;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
}

// Form verisi: CampusEvent gibi ama id yok, capacity metin, category boş olabilir
export interface EventFormData {
  title: string;
  category: Category | "";
  date: string;
  time: string;
  location: string;
  capacity: string;
  description: string;
}

// Her alana en fazla bir hata mesajı
export type EventFormErrors = Partial<Record<keyof EventFormData, string>>;