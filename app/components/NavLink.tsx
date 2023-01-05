import Link from "next/link";
import React from "react";

interface Props {
	category: string;
	isActive: boolean;
}

export default function NavLink({ category, isActive }: Props) {
	return (
		<Link
			href={`/news/${category}`}
			className={`nav-link ${
				isActive &&
				"underline decoration-primary underline-offset-4 font-bold text-lg"
			}`}
		>
			{category}
		</Link>
	);
}
