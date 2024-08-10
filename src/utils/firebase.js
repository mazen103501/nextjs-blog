'use server'
import { db } from '@/config/firebase'
import {
	deleteDoc,
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
	getDoc,
	query,
	orderBy,
	getDocs,
} from 'firebase/firestore'
import { redirect } from 'next/navigation'

const fetchAllPosts = async () => {
	const collectionRef = collection(db, 'posts');
	const q = query(collectionRef, orderBy('title'));
	const postCollectionSnapshot = await getDocs(q);
	const posts = postCollectionSnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));
	return posts;
}

const addPost = async formData => {
	const collectionRef = collection(db, 'posts');

	const docRef = await addDoc(collectionRef, {
		title: formData.get('title'),
		content: formData.get('content'),
		tags: formData.get('tags').split(' ').map(tag => tag.trim()),
		userId: formData.get('userId'),
		email: formData.get('email'),
		createdDate: serverTimestamp()
	});

	redirect(`/post/${docRef.id}`);
};

const fetchPost = async (id) => {
	let post = null;

	const docRef = doc(db, 'posts', id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		post = { id: docSnap.id, ...docSnap.data() };
	}

	if (!post) return null;

	return post;
};

const updatePost = async (postId, formData) => {
	const docRef = doc(db, 'posts', postId)

	await updateDoc(docRef, {
		title: formData.get('title'),
		content: formData.get('content'),
		tags: formData
			.get('tags')
			.split(',')
			.map(tag => tag.trim()),
	})

	redirect(`/post/${postId}`)
};

const deletePost = async postId => {
	const docRef = doc(db, 'posts', postId)
	await deleteDoc(docRef)
	redirect('/')
};

export { fetchAllPosts, addPost, fetchPost, updatePost, deletePost }
