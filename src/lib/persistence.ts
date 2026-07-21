export async function fetchSiteData(key: string) {
  try {
    const response = await fetch(`/api/site-data/${key}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Failed to fetch site data');
    }
    return await response.json();
  } catch (error) {
    console.error('Persistence Fetch Error:', error);
    return null;
  }
}

export async function saveSiteData(key: string, content: any) {
  try {
    const response = await fetch('/api/site-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, content }),
    });
    if (!response.ok) {
      throw new Error('Failed to save site data');
    }
    return await response.json();
  } catch (error) {
    console.error('Persistence Save Error:', error);
    throw error;
  }
}
