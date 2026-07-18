// API client for the Spring Boot backend.
// Types mirror the backend records (com.shyam.portfolio.model.*).

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  company: string;
  repoUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  summary: string;
  contentMd: string;
  tags: string[];
  publishedAt: string; // ISO date
  views: number;
  likes: number;
}

const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8080";

// Revalidate cached responses every 60s (ISR). The free Render tier may cold-start
// (~30s) on the first request after idle, so allow a generous timeout.
async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`API ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await get<Project[]>("/api/projects");
  } catch {
    return [];
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    return await get<Post[]>("/api/posts");
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await get<Post>(`/api/posts/${slug}`);
  } catch {
    return null;
  }
}
