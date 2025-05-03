import { json, type RequestEvent } from '@sveltejs/kit';

const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2';
const API_KEY = process.env.VITE_NYT_API_KEY;

export async function GET({ url }: RequestEvent) {
	const endpoint = url.searchParams.get('endpoint') ?? 'viewed';
	const days = url.searchParams.get('days') ?? '1';

	const fullUrl = `${BASE_URL}/${endpoint}/${days}.json?api-key=${API_KEY}`;

	try {
		const res = await fetch(fullUrl);
		const data = await res.json();
		return json(data.results);
	} catch (error) {
		return json({ error: 'Failed to fetch data' }, { status: 500 });
	}
}
