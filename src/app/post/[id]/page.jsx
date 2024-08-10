import { Box, Heading, Text } from '@chakra-ui/react'
import { fetchPost } from '@/utils/firebase'
import DetailsButtons from '@/components/DetailsButtons';

const PostDetails = async ({ params: { id } }) => {

	let post = await fetchPost(id);
	const createdDate = post?.createdDate?.seconds
		? new Date(post.createdDate.seconds * 1000).toLocaleDateString()
		: 'Unknown date';

	return (
		<div>
			{!post && <Text>Post not found</Text>}
			{post &&
				<>
					<Heading mb={3} textAlign='center'>{post.title}</Heading>
					<Text>Created By: {post.email}</Text>
					<Text>Created Date: {createdDate}</Text>
					<Text mb={10} color='blue.600'>
						{post?.tags?.map(tag => `#${tag} `)}
					</Text>

					<Box textAlign='center' mb={8}>
						<Text>{post.content}</Text>
					</Box>
				</>
			}
			{(post && id) &&
				<DetailsButtons userId={post.userId} postId={id}></DetailsButtons>
			}

		</div>
	)
}

export default PostDetails
