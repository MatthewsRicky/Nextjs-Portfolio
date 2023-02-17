import { Inter } from "@next/font/google";
import Navbar from "public/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Navbar />
			<div id='herobg'></div>
		</div>
	);
}
