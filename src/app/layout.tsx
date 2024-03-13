import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next Lyrics',
	description: 'Next Lyrics',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='./favicon.ico' sizes='any' />
			</head>
			<body className={inter.className}>
				{' '}
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<Container>{children}</Container>
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
