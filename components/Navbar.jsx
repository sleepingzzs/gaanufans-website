"use client";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className='flex flex-col'>
			<nav className='bg-[#082032] text-white rounded-xl m-2 shadow-xl px-4'>
				<div className='flex flex-row justify-between max-w-5xl mx-auto py-2'>
					<ul className='flex flex-row'>
						<Link href='/'>
							<li>
								<Logo className='h-[50px] w-[175px] cursor-pointer' />
							</li>
						</Link>
					</ul>

					<div className='flex flex-row items-center'>
						<ul className='flex flex-row gap-10 text-[24px] items-center phone:hidden'>
							<Link href='/'>
								<li className='cursor-pointer'>About</li>
							</Link>
							<Link href='/explore'>
								<li className='cursor-pointer'>Explore</li>
							</Link>
							<Link href='/submit'>
								<li className='cursor-pointer'>Submit</li>
							</Link>
						</ul>
						<button
							onClick={() => {
								setShowMenu((a) => !a);
							}}
							className='hidden phone:block'
						>
							{!showMenu && <FaBars></FaBars>}
							{showMenu && (
								<IoMdClose className='text-[30px]'></IoMdClose>
							)}
						</button>
					</div>
				</div>
			</nav>
			{showMenu && (
				<div className='flex justify-center bg-white bg-opacity-5 rounded-md mx-2 border-none z-10 md:hidden text-2xl'>
					<div className='flex flex-col gap-2 my-2'>
						<Link href='/'>
							<button
								onClick={() => {
									setShowMenu((a) => !a);
								}}
							>
								About
							</button>
						</Link>
						<Link href='/explore'>
							<button
								onClick={() => {
									setShowMenu((a) => !a);
								}}
							>
								Explore
							</button>
						</Link>
						<Link href='/submit'>
							<button
								onClick={() => {
									setShowMenu((a) => !a);
								}}
							>
								Submit
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
