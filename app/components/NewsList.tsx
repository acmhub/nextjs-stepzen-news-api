import Article from "./Article";

type Props = {
	news: NewsResponse;
};

export default function NewsList({ news }: Props) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
			{news.data.map((article) => (
				<Article article={article} key={article.title} />
			))}
		</div>
	);
}
