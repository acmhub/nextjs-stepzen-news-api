"use client";

import { useRouter } from "next/navigation";

type Props = {
	article: Article;
};

export default function ReadMoreButton({ article }: Props) {
	const router = useRouter();

	const handleClick = () => {
		const queryString = Object.entries(article)
			.map(([key, value]) => `${key}=${value}`)
			.join("&");

		const url = `/article/${queryString}`;
		router.push(url);
	};

	return (
		<button className="bg-primary h-10 rounded-b-lg" onClick={handleClick}>
			Read More
		</button>
	);
}
