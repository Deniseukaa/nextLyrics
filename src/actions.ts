'use server';
import { Client } from 'genius-lyrics';

export const getLyrics = async (name: string, title: string) => {
	const client = new Client();
	const songs = await client.songs.search(`${name} ${title}`);
	if (!songs) {
		throw new Error('Lyrics not found');
	} else
		return {
			lyrics: await songs[0]?.lyrics(),
			title: songs[0]?.title,
			artist: songs[0]?.artist.name,
		};
};
