import { FC } from 'react';
import Container from './container';

const Footer: FC = () => {
	return (
		<footer className='h-12 border-t-2'>
			<Container>
				<div className='flex w-full h-12 items-center justify-center'>
					<p className='text-lg'>
						Developed by:{' '}
						<span className='font-bold gradient-text'>Vlad Kudenchuk</span>
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
