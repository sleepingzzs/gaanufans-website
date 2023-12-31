import Image from "next/image";
import Link from "next/link";

export default function Post({ caption, meme, username, timestamp, id }) {
	if (username === "") username = "@anonymous";
	if (username.startsWith("@")) username = username.replace("@", "");
	return (
		<div className='flex flex-col gap-2 justify-center  cursor-pointer mx-auto max-w-[400px]'>
			<Link href={`/explore/${id}`}>
				<div className='flex flex-col gap-2 p-2 bg-white bg-opacity-5 rounded-md cursor-pointer max-w-[300px]'>
					<ul className='flex flex-row justify-between text-base'>
						<li className='hover:underline'>@{username}</li>
						<li>
							{new Date(timestamp).toLocaleString("en-IN", {
								day: "2-digit",
								year: "2-digit",
								month: "2-digit",
							})}
						</li>
					</ul>

					<Image
						className='rounded-md w-[300px] h-[300px] object-cover'
						width={200}
						height={200}
						src={meme}
						alt='Could not load image'
						priority
					></Image>

					<h1>{caption}</h1>
				</div>
			</Link>
		</div>
	);
}
