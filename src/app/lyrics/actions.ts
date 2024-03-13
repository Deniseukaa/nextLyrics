import { LYRICS_API_URL } from '@/constants/urls';

export const getLyrics = async (name: string, title: string) => {
	const res = await fetch(`${LYRICS_API_URL}${name}/${title}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	} else return res.json();
};
