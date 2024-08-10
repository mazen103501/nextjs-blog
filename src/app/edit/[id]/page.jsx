import AddPostForm from '@/components/AddPostForm'
import { fetchPost } from '@/utils/firebase';
import React from 'react'

async function EditPost({ params: { id } }) {
  let post = await fetchPost(id);
  return (
    <>
      <AddPostForm isForUpdate {...post} />

    </>

  )
}

export default EditPost