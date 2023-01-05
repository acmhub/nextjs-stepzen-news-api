"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBox() {
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!searchValue) return;

		router.push(`/search?term=${searchValue}`);
	};

	return (
		<form
			className="container flex items-center justify-between text-primary mb-10"
			onSubmit={handleSearch}
		>
			<input
				type="text"
				className="h-14 flex-1 placeholder-gray-500 outline-none bg-transparent"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder="Search"
			/>

			<button
				type="submit"
				disabled={!searchValue}
				className="disabled:opacity-50"
			>
				<MagnifyingGlassIcon className="h-8 w-8" />
			</button>
		</form>
	);
}
