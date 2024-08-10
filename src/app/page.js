import PostsList from '@/components/PostList';
import { db } from '@/config/firebase';
import { collection, getDocs, query, orderBy, limit, doc, getDoc } from 'firebase/firestore';

export default async function Home() {
	const collectionRef = collection(db, 'posts');
	const q = query(collectionRef, orderBy('title'));
	const postCollectionSnapshot = await getDocs(q);
	const posts = postCollectionSnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));

	return <PostsList postList={posts} />;
}