"use client";

import { useForm } from "react-hook-form";
import { db, storage } from "@/utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

export default function Submit() {
	const route = useRouter();
	const { handleSubmit, register, formState } = useForm();
	const submitForm = async (values) => {
		console.log(values);
		route.push("/explore");

		const memeRef = ref(storage, `memes/${values.meme[0].name + v4()}`);

		//uploading
		const uploaded = await uploadBytes(memeRef, values.meme[0]);
		const downloadUrl = await getDownloadURL(uploaded.ref);

		const colref = collection(db, "posts");
		await addDoc(colref, {
			timestamp: Date.now(),
			username: values.username,
			caption: values.caption,
			meme: downloadUrl,
		});
	};
	const { errors } = formState;
	function RandomNames() {
		const random = Math.floor(Math.random() * 9);
		const random2 = Math.floor(Math.random() * (99 - 10) + 10);
		const arr = [
			"goofyboi" + random2,
			"monkbutler" + random2,
			"yumgarlic" + random2,
			"eloncena" + random2,
			"poopysharts" + random2,
			"diaperman" + random2,
			"giggitygoo" + random2,
			"younghobo" + random2,
			"brokepotato" + random2,
			"giganugget" + random2,
		];
		let ph = arr[random];
		return ph;
	}
	let ph = RandomNames();

	return (
		<form
			onSubmit={handleSubmit(submitForm)}
			className='flex flex-col items-center mt-10 cursor-default'
			noValidate
		>
			<div className='flex flex-col gap-10'>
				<header className='text-[2em]'># Post your meme!</header>
				<div className='flex flex-col gap-2'>
					<label htmlFor='username' className='text-base italic'>
						*Your anonymous username (optional)
					</label>
					<input
						{...register("username", { required: false })}
						type='text'
						id='username'
						placeholder={ph}
						autoComplete='off'
						className='outline-none bg-white bg-opacity-5 p-1 rounded-md'
					/>
					<label htmlFor='caption' className='text-base italic'>
						*Post&apos;s caption
					</label>
					<input
						{...register("caption", {
							required: {
								value: true,
								message: "*caption is required",
							},
							validate: (field) => {
								return (
									field.length >= 8 ||
									"*caption must have atleast 8 characters"
								);
							},
						})}
						type='text'
						id='caption'
						placeholder='caption'
						autoComplete='off'
						className='outline-none bg-white bg-opacity-5 p-1 rounded-md'
					/>
					<label htmlFor='meme' className='text-base italic'>
						*Your meme
					</label>
					<input
						{...register("meme", {
							required: {
								value: true,
								message: "*you must upload an image or video",
							},
							validate: (field) => {
								if (
									!(
										field[0].name.endsWith("jpg") ||
										field[0].name.endsWith("jpeg") ||
										field[0].name.endsWith("png") ||
										field[0].name.endsWith("mp4")
									)
								) {
									return "*file must be in jpg, jpeg, png, or mp4 formats";
								} else if (field[0].size >= 15728640) {
									return "*file size must be less than or equal to 15MB";
								}
							},
						})}
						type='file'
						id='meme'
						className='bg-white cursor-pointer bg-opacity-5 rounded-md'
					/>
				</div>
				<button
					type='submit'
					className='p-1 rounded-md border-[#FF4C29] border-2 transition-colors duration-300 ease-in-out hover:bg-[#FF4C29]'
				>
					Submit
				</button>
				<ul className='text-red-500 italic text-base'>
					<li>{errors.caption?.message}</li>
					<li>{errors.meme?.message}</li>
				</ul>
			</div>
		</form>
	);
}
