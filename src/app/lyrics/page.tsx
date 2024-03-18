'use client';
import { toast } from '@/components/ui/use-toast';
import { FC, useState } from 'react';
import LyricsForm from './_components/form';
import LyricsText from './_components/lyrics';

const Lyrics: FC = () => {
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');

	const handleSubmit = async (name: string, title: string) => {
		try {
			if (!title) throw new Error('Title is empty');
			setName(name);
			setTitle(title);
		} catch (error) {
			let message = 'Unknown Error';
			if (error instanceof Error) message = error.message;
			toast({
				title: message,
			});
		}
	};

	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 min-h-screenWithHeaderAndFooter lg:gap-12'>
			<LyricsForm handleSubmit={handleSubmit} />
			<LyricsText name={name} title={title} />
		</section>
	);
};

export default Lyrics;
