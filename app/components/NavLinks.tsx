"use client";

import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { categories } from "../../constants";

export default function NavLinks() {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname?.split("/").pop() === path;
	};

	return (
		<nav className="container grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 py-5 border-b border-primary">
			{categories.map((category) => (
				<NavLink
					category={category}
					isActive={isActive(category)}
					key={category}
				/>
			))}
		</nav>
	);
}
