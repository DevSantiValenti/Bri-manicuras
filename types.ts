export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  category?: string;
  type: 'image' | 'video';
}

export interface Testimonial {
  id: string;
  name: string;
  type: string;
  rating: number;
  text: string;
  image: string;
}
