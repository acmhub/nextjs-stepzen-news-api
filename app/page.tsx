import NewsList from "./components/NewsList";
import fetchNews from "../lib/fetchNews";
import { categories } from "../constants";

export default async function Homepage() {
	const news: NewsResponse = await fetchNews(categories.join(","));

	return (
		<div>
			<NewsList news={news} />
		</div>
	);
}
