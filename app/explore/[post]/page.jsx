"use client";
import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Post({ params }) {
	const [post, setPost] = useState([]);
	const getPosts = async () => {
		setPost((await getDoc(doc(db, "posts", params.post))).data());
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className='flex flex-col gap-2 p-2 bg-white bg-opacity-5 rounded-md cursor-pointer mx-auto max-w-md h-[100] my-5'>
			<ul className='flex flex-row justify-between text-base'>
				<li className='hover:underline'>@{post.username}</li>
				<li>
					{new Date(post.timestamp).toLocaleString("en-IN", {
						day: "2-digit",
						year: "2-digit",
						month: "2-digit",
					})}
				</li>
			</ul>

			<Image
				className='rounded-md'
				width={1000}
				height={1000}
				src={"" || post.meme}
				alt='Could not load image'
			></Image>

			<h1>{post.caption}</h1>
		</div>
	);
}
