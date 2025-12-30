
export const submitQuery = async (type: 'travel' | 'ride' | 'spa' | 'meetup', data: any) => {
    try {
        const response = await fetch('/api/submit-query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type, data }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Submission failed');
        }

        return await response.json();
    } catch (error) {
        console.error('API Submission Error:', error);
        throw error; // Re-throw to handle in UI
    }
};

export const getQueries = async (type: string, page = 1, limit = 10) => {
    try {
        const response = await fetch(`/api/get-queries?type=${type}&page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('API Fetch Error:', error);
        throw error;
    }
};
