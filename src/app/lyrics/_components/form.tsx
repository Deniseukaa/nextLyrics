'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FC, FormEvent, useState } from 'react';

interface FormProps {
	handleSubmit: (name: string, title: string) => Promise<void>;
}

const LyricsForm: FC<FormProps> = ({ handleSubmit }) => {
	const [formData, setFormData] = useState<{ name: string; title: string }>({
		name: '',
		title: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	function onSubmit(e: FormEvent) {
		e.preventDefault();
		handleSubmit(formData.name, formData.title);
		setFormData({
			name: '',
			title: '',
		});
	}

	return (
		<div className='flex flex-col pt-12 gap-12 justify-normal lg:justify-center'>
			<h2 className='text-2xl font-bold text-center'>
				ENTER YOUR ARTIST <span className='gradient-text'>NAME</span> AND SONG{' '}
				<span className='gradient-text'>TITLE</span>
			</h2>
			<form onSubmit={onSubmit} className='flex flex-col w-full gap-12'>
				<div>
					<Label htmlFor='name'>Name:</Label>
					<Input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<Label htmlFor='title'>Title:</Label>
					<Input
						type='text'
						id='title'
						name='title'
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<Button className='w-full' type='submit'>
					Find Lyrics
				</Button>
			</form>
		</div>
	);
};

export default LyricsForm;
