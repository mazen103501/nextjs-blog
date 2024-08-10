import {
	Card,
	CardBody,
	CardHeader,
	Heading,
	Grid,
	Text,
	CardFooter,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Post from './Post'

const PostsList = ({ postList }) => {
	return (
		<Grid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' gap={6}>
			{postList.map((postData) => <Post key={postData.id} {...postData}></Post>)}
		</Grid>
	)
}

export default PostsList
