"use client";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
export default function Note() {
	const [visible, setVisible] = useState(true);
	const rmcomponent = () => {
		setVisible((a) => !a);
	};
	return (
		visible && (
			<div
				className={
					"overflow-hidden flex flex-row px-2 m-2 bg-white bg-opacity-5 rounded-md text-base font-extralight justify-between "
				}
			>
				<marquee behavior='scrolling' direction='left'>
					*Note: This webiste is only for comedic purposes and does
					not promote any form of hate towards anyone, especially the
					teachers of Loyola BBSR. (For legal reasons this is NOT a
					joke.)
				</marquee>

				<button
					onClick={rmcomponent}
					className='text-base font-bold pl-2'
				>
					<IoMdClose></IoMdClose>
				</button>
			</div>
		)
	);
}
