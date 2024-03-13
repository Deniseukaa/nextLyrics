import { FC } from 'react';
import Container from './container';
import ThemeToggler from './theme-toggler';

const Header: FC = () => {
	return (
		<header className='h-12 border-b-2'>
			<Container>
				<div className='flex w-full h-12 items-center justify-end'>
					<ThemeToggler />
				</div>
			</Container>
		</header>
	);
};

export default Header;
