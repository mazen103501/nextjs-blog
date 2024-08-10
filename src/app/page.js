import PostsList from '@/components/PostList';
import { fetchAllPosts } from '@/utils/firebase';

export default async function Home() {
	const posts = await fetchAllPosts()

	return <PostsList postList={posts} />;
}