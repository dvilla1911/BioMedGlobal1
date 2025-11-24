export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  category: string;
  image: string;
}

export interface SectionProps {
  id: string;
}