'use client';
import { toast } from '@/components/ui/use-toast';
import { FC, useEffect, useState } from 'react';
import { getLyrics } from '../../../actions';
import Loading from '../loading';

interface LyricsTextProps {
	name: string;
	title: string;
}

interface ILyricsResponse {
	artist: string;
	title: string;
	lyrics: string;
}

export function formatLyrics(text: string) {
	const segments = text.split(/(\[[^\]]+\])/);
	return segments.map((segment, index) => {
		if (segment.startsWith('[') && segment.endsWith(']')) {
			return (
				<p key={index} className='text-xl gradient-text'>
					{segment}
				</p>
			);
		} else {
			return segment;
		}
	});
}

const LyricsText: FC<LyricsTextProps> = ({ name, title }) => {
	const [lyrics, setLyrics] = useState<ILyricsResponse>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const updatedViews = await getLyrics(name, title);
				setLyrics(updatedViews);
				setIsLoading(false);
			} catch (error) {
				let message = 'Unknown Error';
				if (error instanceof Error) message = error.message;
				toast({
					title: message,
				});
			}
		};
		if (title) getData();
	}, [name, title]);
	if (isLoading) return <Loading />;
	if (!lyrics)
		return (
			<div className='flex flex-col py-12 justify-center items-center text-7xl sm:text-9xl gradient-text'>
				🎶
			</div>
		);
	return (
		<div className='h-screenWithHeaderAndFooter overflow-y-auto my-12 w-full'>
			<h2 className='gradient-text text-center font-bold text-4xl pb-12'>
				{lyrics.artist} - {lyrics.title}
			</h2>
			<div className='whitespace-pre-line font-bold text-balance text-base'>
				{formatLyrics(lyrics.lyrics)}
			</div>
		</div>
	);
};

export default LyricsText;
