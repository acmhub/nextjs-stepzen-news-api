import fetchNews from "../../lib/fetchNews";
import NewsList from "../components/NewsList";

type Props = {
	searchParams?: { term: string };
};

export default async function SearchPage({ searchParams }: Props) {
	const news: NewsResponse = await fetchNews(
		"general",
		searchParams?.term,
		true
	);

	return (
		<div>
			<h1 className="header-title px-0 mb-10">
				Search Results for {searchParams?.term}
			</h1>
			<NewsList news={news} />
		</div>
	);
}
