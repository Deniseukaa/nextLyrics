import { FC } from 'react';

interface LyricsTextProps {
	lyrics: string | null;
	name: string;
	title: string;
}

export function formatLyrics(text: string) {
	const index = text.indexOf('\n');
	text = index !== -1 ? text.substring(index + 1) : text;
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

const LyricsText: FC<LyricsTextProps> = ({ lyrics, name, title }) => {
	if (!lyrics)
		return (
			<div className='flex flex-col pt-12 justify-center items-center text-9xl gradient-text'>
				🎶
			</div>
		);
	return (
		<div className='h-screenWithHeaderAndFooter overflow-y-auto py-12 w-full'>
			<h2 className='gradient-text text-center font-bold text-4xl pb-12'>
				{name} - {title}
			</h2>
			<div className='whitespace-pre-line font-bold text-balance text-base'>
				{formatLyrics(lyrics)}
			</div>
		</div>
	);
};

export default LyricsText;
