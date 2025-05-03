import { json, type RequestEvent } from '@sveltejs/kit';
import { NYT_API_KEY } from '$env/static/private';

const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2';

export async function GET({ url }: RequestEvent) {
	const endpoint = url.searchParams.get('endpoint') ?? 'viewed';
	const days = url.searchParams.get('days') ?? '1';

	const fullUrl = `${BASE_URL}/${endpoint}/${days}.json?api-key=${NYT_API_KEY}`;

	try {
		const res = await fetch(fullUrl);
		if (!res.ok) {
			const errorText = await res.text();
			console.error('NYT API error:', res.status, errorText);
			return json({ error: 'API request failed' }, { status: res.status });
		}

		const data = await res.json();
		return json(data.results);
	} catch (err) {
		console.error('Fetch error:', err);
		return json({ error: 'Failed to fetch data' }, { status: 500 });
	}
}
