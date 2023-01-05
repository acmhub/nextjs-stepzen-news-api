import { notFound } from "next/navigation";

type Props = {
	searchParams?: Article;
};

export default function ArticlePage({ searchParams }: Props) {
	if (
		(searchParams && Object.entries(searchParams).length === 0) ||
		!searchParams
	) {
		return notFound();
	}

	const article: Article = searchParams;

	return (
		<article>
			<section className="flex flex-col lg:flex-row pb-24 lg:space-x-10">
				{article.image !== "null" && (
					<img
						src={article.image as string}
						alt={article.title}
						className="h-80 w-full object-cover rounded-lg shadow-md"
					/>
				)}

				<div>
					<h1 className="header-title px-0 pb-2">{article.title}</h1>

					<div className="flex divide-x-2 space-x-4">
						<h2 className="font-bold">
							By:{" "}
							{article.author === "null"
								? "Unknown"
								: article.author}
						</h2>
						<h2 className="font-bold pl-4">
							Source: {article.source}
						</h2>
						<p className="pl-4">{article.published_at}</p>
					</div>

					<p className="pt-4">{article.description}</p>
				</div>
			</section>
		</article>
	);
}
