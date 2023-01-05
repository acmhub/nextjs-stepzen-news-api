import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../components/NewsList";

type Props = {
	params: { category: Category };
};

export default async function CategoryPage({ params: { category } }: Props) {
	const news: NewsResponse = await fetchNews(category);

	return (
		<div>
			<h1 className="header-title px-0 mb-10">{category} News</h1>
			<NewsList news={news} />
		</div>
	);
}

export async function generateStaticParams() {
	return categories.map((category) => ({
		category: category,
	}));
}
