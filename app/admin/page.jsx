"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Admin() {
	const [session, setSession] = useState(false);
	const login = (value) => {
		if (value.pass === process.env.NEXT_PUBLIC_ADMIN) setSession((a) => !a);
	};
	const { handleSubmit, register } = useForm();

	return (
		<div className='flex flex-col'>
			{!session && (
				<form
					className='flex flex-row gap-2 self-center mt-5'
					onSubmit={handleSubmit(login)}
				>
					<input
						className='bg-white bg-opacity-5 outline-none rounded-md px-2'
						type='password'
						{...register("pass")}
						placeholder='password'
					/>
					<button
						type='submit'
						className='px-4 rounded-md border-[#FF4C29] border-2 transition-colors duration-300 ease-in-out hover:bg-[#FF4C29]'
					>
						login
					</button>
				</form>
			)}
			{session && <div>hello</div>}
		</div>
	);
}
