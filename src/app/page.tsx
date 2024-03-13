import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
	return (
		<main className='flex min-h-screenWithHeaderAndFooter flex-col items-center p-24'>
			<h1 className='text-7xl lg:text-9xl font-bold text-center'>
				Find Your Song <span className='gradient-text'>Lyrics</span>
			</h1>
			<p className='text-lg lg:text-2xl text-center font-bold mt-12 text-primary'>
				Effortless Text Search for Songs
			</p>
			<Button className='mt-12 p-7'>
				<Link href='/lyrics'>Explore Lyrics</Link>
			</Button>
		</main>
	);
};

export default Home;
