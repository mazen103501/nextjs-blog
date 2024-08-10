'use client'
import { useAuth } from '@/hooks/useAuth';
import {
	addPost,
	updatePost,
} from '@/utils/firebase'
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AddPostForm = ({
	isForUpdate,
	id = '',
	title = '',
	content = '',
	tags = [],
}) => {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push('/signin');
		}
	}, [user, router]);

	return (
		<VStack
			as='form'
			mx='auto'
			maxWidth={400}
			action={isForUpdate ? updatePost.bind(null, id) : addPost}
		>
			<FormControl>
				<FormLabel>Title</FormLabel>
				<Input
					defaultValue={title}
					type='text'
					placeholder='Title'
					name='title'
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Content</FormLabel>
				<Textarea
					defaultValue={content}
					placeholder="What's on your mind?"
					name='content'
					rows={5}
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Tags</FormLabel>
				<Input
					defaultValue={tags.join(', ')}
					type='text'
					placeholder='test1, test2 (Comma separated)'
					name='tags'
				/>
			</FormControl>
			<FormControl hidden>
				<Input
					type='text'
					name='email'
					value={user?.email}
					readOnly
				/>
			</FormControl>
			<FormControl hidden>
				<Input
					type='text'
					name='userId'
					value={user?.uid}
					readOnly
				/>
			</FormControl>
			<Button type='submit' w='100%'>
				Submit
			</Button>
		</VStack>
	)
}

export default AddPostForm
