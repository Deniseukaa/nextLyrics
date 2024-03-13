'use client';
import { toast } from '@/components/ui/use-toast';
import { FC, useState } from 'react';
import LyricsForm from './_components/form';
import LyricsText from './_components/lyrics';
import { getLyrics } from './actions';

const Lyrics: FC = () => {
	const [lyrics, setLyrics] = useState(null);
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');

	const handleSubmit = async (name: string, title: string) => {
		try {
			const data = await getLyrics(name, title);
			setLyrics(data.lyrics);
			setName(name);
			setTitle(title);
		} catch (error) {
			let message = 'Unknown Error';
			if (error instanceof Error) message = error.message;
			toast({
				title: message,
			});
			setLyrics(null);
		}
	};

	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 min-h-screenWithHeaderAndFooter gap-12'>
			<LyricsForm handleSubmit={handleSubmit} />
			<LyricsText lyrics={lyrics} name={name} title={title} />
		</section>
	);
};

export default Lyrics;
