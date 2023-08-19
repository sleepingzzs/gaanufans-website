import "./globals.css";
import { Patrick_Hand } from "next/font/google";
import Nav from "@/components/Navbar";
import Note from "@/components/Note";
const patrick = Patrick_Hand({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "@gaanu_fans",
	description: "Official site of @gaanu_fans on Instagram.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={
					patrick.className + " bg-[#2c394b] text-white text-xl"
				}
			>
				<Nav />
				<Note />
				<main className='max-w-5xl mx-auto tab:mx-2'>{children}</main>
			</body>
		</html>
	);
}
