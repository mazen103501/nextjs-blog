**Note:** This app is deployed, so you don't have to run it locally. You can access it [here](https://nextjs-blog-bay-one-10.vercel.app/).

## Overview
This document outlines the architecture of a blogging platform built with Next.js, Firebase, and Chakra UI. The platform allows users to create, read, update, and delete blog posts. It includes user authentication and post management.

## Architecture Components

### Frontend
- **Next.js:** A React framework for server-side rendering and static site generation.
- **Chakra UI:** A component library for building accessible and responsive UIs.

### Backend
- **Firebase Firestore:** A NoSQL database for storing blog posts and user data.
- **Firebase Authentication:** For user authentication and authorization.

## Component Interaction and Data Flow

### User Authentication
- Users sign up or log in using Firebase Authentication.
- Authenticated users can create, update, and delete posts.

### Post Management

#### Create Post
- Users fill out a form in the `AddPostForm` component.
- The form data is sent to the `addPost` function in `src/utils/firebase.js`.
- The post is added to the Firestore database.

#### Read Posts
- The `fetchAllPosts` function in `src/utils/firebase.js` retrieves posts from Firestore.
- Posts are displayed using the `Post` component in `src/components/Post.jsx`.

#### Update Post
- Users can update posts using the same form in the `AddPostForm` component.
- The form data is sent to the `updatePost` function in `src/utils/firebase.js`.

#### Delete Post
- Users can delete posts by calling the `deletePost` function (not shown in the provided code).

## Design Decisions

### Next.js
- Chosen for its server-side rendering capabilities, which improve SEO and performance.
- Provides a seamless developer experience with file-based routing and API routes.

### Firebase
- Firestore is a scalable NoSQL database that integrates well with the rest of the Firebase ecosystem.
- Firebase Authentication simplifies user management and security.

### Chakra UI
- Provides a set of accessible and customizable components, speeding up the development process.


## Conclusion
This system design leverages modern web technologies to build a scalable and maintainable blogging platform. The use of Next.js, Firebase, and Chakra UI ensures a robust and user-friendly application.


**Note:** to run the project locally after you clone the project

1- npm install

2- npm run dev