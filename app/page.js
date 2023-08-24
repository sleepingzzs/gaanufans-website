import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
export default function Home() {
	return (
		<div className='flex flex-col items-center mt-5 px-4 cursor-default'>
			<div className='flex flex-col self-center items-start gap-12'>
				<Image
					className='self-center rounded-full shadow-xl h-[220px] w-[220px]'
					width={220}
					height={220}
					src='/icon.ico'
					alt='image could not load'
				></Image>
				<div className='flex flex-col max-w-2xl gap-8' id='about'>
					<h1 className='text-[2em] font-medium underline'>
						# Gaanu Fans
					</h1>
					<p>
						A website for the Gaanu fans from a fellow Gaanu fan!
						Here you can post memes related to Loyola BBSR
						anonymously, i.e, you do not need to create an account
						and adding your @username for credit is optional.
					</p>
				</div>

				<div className='flex flex-col gap-8' id='rules'>
					<h1 className='text-[2em] font-medium underline'>
						# Rules for posting
					</h1>
					<ul className='list-disc list-inside italic '>
						<li> Posts must be related to Loyola BBSR.</li>
						<li> File size must be less than 20MB.</li>
						<li>
							Posts&apos; formats should be in png, jpeg, or jpg
							only.
						</li>
					</ul>
				</div>
				<ul className='flex self-center gap-2 mb-5'>
					<Link href='https://instagram.com/gaanu_fans'>
						<li className='py-2 px-4 rounded-md border-[#FF4C29] border-2 transition-colors duration-300 ease-in-out hover:bg-[#FF4C29]'>
							<BsInstagram></BsInstagram>
						</li>
					</Link>
					<Link href='/explore'>
						<li className='py-1 px-4 rounded-md border-[#FF4C29] border-2 transition-colors duration-300 ease-in-out hover:bg-[#FF4C29]'>
							Done reading? Explore
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}
