export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  fullDescription?: string[];
  gallery?: string[];
  skills?: string[];
  role?: string;
}