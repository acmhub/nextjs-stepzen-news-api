import React from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
	return (
		<header className="container">
			<div className="relative flex justify-between items-center py-4">
				<Bars3Icon className="h-8 w-8 cursor-pointer" />

				<Link
					href="/"
					prefetch={false}
					className="absolute -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2"
				>
					<h1 className="font-serif text-4xl text-center">
						nextNews
					</h1>
				</Link>

				<div className="flex items-center justify-end space-x-5">
					<DarkModeButton />

					<button className="hidden md:inline bg-primary text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full">
						Subscribe Now
					</button>
				</div>
			</div>

			<NavLinks />
			<SearchBox />
		</header>
	);
}
