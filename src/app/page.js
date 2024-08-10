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
	const userDocRef = doc(db, 'users', 'PIjIHCZNNrVAnJHjrnz7VCHGROw2');
	const userDocSnap = await getDoc(userDocRef);
	if (userDocSnap.exists()) {
		console.log('User data', userDocSnap.data());
	} else {
		console.log('no user data ')
	}

	return <PostsList postList={posts} />;
}