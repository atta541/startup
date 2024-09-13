export async function fetchProjects() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const url = new URL('/api/project', API_URL);
  
    try {
      const res = await fetch(url.toString(), { next: { revalidate: 60 } });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }