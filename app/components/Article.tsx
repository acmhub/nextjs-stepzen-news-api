import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
	article: Article;
};

export default function Article({ article }: Props) {
	return (
		<article className="bg-slate-100 dark:bg-neutral-700 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg duration-200 ease-out">
			{/**
			 * Not using next/image because it needs the source domain to be whitelisted
			 * In this API the image source domain is not predefined
			 */}
			{article.image && (
				<img
					src={article.image}
					alt={article.title}
					className="h-56 w-full object-cover rounded-t-lg shadow-md"
				/>
			)}

			<div className="flex-1 flex flex-col">
				<div className="flex-1 flex flex-col p-5">
					<h2 className="font-serif font-bold">{article.title}</h2>
					<section className="mt-2 flex-1">
						<p className="text-xs line-clamp-4">
							{article.description}
						</p>
					</section>

					<footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
						<p>{article.source} -</p>
						<p>
							<LiveTimestamp time={article.published_at} />
						</p>
					</footer>
				</div>

				<ReadMoreButton article={article} />
			</div>
		</article>
	);
}
