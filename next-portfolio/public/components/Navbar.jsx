import React from "react";
import Image from "next/image";
import Kenya from "../assets/kenya.jpg";
import Logonav from "../assets/Asset 1.svg";

function Navbar() {
	return (
		<div className='fixed w-full h-20 shadow-xl z[100]'>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Image
					className='p-4'
					src={Kenya}
					alt='logo'
					width={140}
					height={140}
				/>
			</div>
		</div>
	);
}

export default Navbar;
