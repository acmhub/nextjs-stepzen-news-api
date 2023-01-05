import NewsList from "./components/NewsList";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

export default async function Homepage() {
	// const news: NewsResponse = await fetchNews(categories.join(","));

	const news = {
		pagination: { count: 25, limit: 25, offset: 0, total: 10000 },
		data: [
			{
				author: "Anita Bhagwandas",
				category: "general",
				image: "https://static.independent.co.uk/2021/03/25/16/Lash%20serums.jpg?width=1200&auto=webp",
				description:
					"Enjoy healthier and glossier eyelashes with these formulas",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:06:20Z",
				source: "Independent",
				title: "10 best eyelash serums that add strength and volume",
				url: "https://www.independent.co.uk/extras/indybest/fashion-beauty/make-up/best-eyelash-serum-growth-uk-b1822475.html",
			},
			{
				author: "Linda Konde",
				category: "general",
				image: "https://static.independent.co.uk/2022/05/30/12/Sodermalm_view_from_the_sea_Photo_Jeppe%20Wikstrom.jpg?width=1200&auto=webp",
				description:
					"Across the river from the old town, this hip district is home to bijou, trending restaurants, picnic-friendly parks and creative locals whose street style you’ll want to steal, says Lynda Konde",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:06:17Z",
				source: "Independent",
				title: "How to spend a day in Sodermalm, Stockholm’s coolest neighbourhood",
				url: "https://www.independent.co.uk/travel/sound-and-vision/48-hours-in/sodermalm-stockholm-city-guide-best-neighbourhood-b2090324.html",
			},
			{
				author: null,
				category: "general",
				image: "https://i.dailymail.co.uk/1s/2023/01/05/10/66223007-0-image-m-22_1672913665426.jpg",
				description:
					"Police have tracked down sex offender Shaun Aver, 36, after a mugshot showing him wearing a Greggs bakery jumper went viral, with the force arresting him in Merseyside.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:05:35Z",
				source: "Mail",
				title: "Police track down sex offender after mugshot showing him wearing a Greggs bakery jumper went viral ",
				url: "https://www.dailymail.co.uk/news/article-11601999/Police-track-sex-offender-mugshot-showing-wearing-Greggs-bakery-jumper-went-viral.html?ns_mchannel=rss&ns_campaign=1490&ito=1490",
			},
			{
				author: "Alisha Rahaman Sarkar",
				category: "general",
				image: "https://static.independent.co.uk/2023/01/05/07/10389709.jpg?width=1200&auto=webp",
				description:
					"McCarthy has failed to secure a majority even after six rounds of voting",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:03:03Z",
				source: "Independent",
				title: "What happens if Republicans fail to elect Kevin McCarthy as speaker? Here’s what the constitution says",
				url: "https://www.independent.co.uk/news/world/americas/us-politics/kevin-mccarthy-congress-speaker-vote-constitution-b2256399.html",
			},
			{
				author: "Zoe Phillimore",
				category: "general",
				image: "https://static.independent.co.uk/2022/01/28/09/eve%20mattress%20topper%20copy.jpg?width=1200&auto=webp",
				description:
					"The brand’s tech-filled layer claims to regulate temperature, wick away sweat and be good for allergies",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:01:35Z",
				source: "Independent",
				title: "Eve mattress topper review: Could it breathe new life into our tired sleep setup?",
				url: "https://www.independent.co.uk/extras/indybest/house-garden/mattresses/eve-mattress-topper-review-b2001750.html",
			},
			{
				author: "Jacob Stolworthy",
				category: "general",
				image: "https://static.independent.co.uk/2022/11/06/14/newFile-2.jpg?width=1200&auto=webp",
				description:
					"There are thousands of Netflix titles tucked away in secret which you can unlock with these codes",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:00:31Z",
				source: "Independent",
				title: "Netflix codes: How to access hidden movies and TV shows on streaming service",
				url: "https://www.independent.co.uk/arts-entertainment/films/news/netflix-secret-codes-uk-2023-b2255760.html",
			},
			{
				author: "Sophie Morris",
				category: "general",
				image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/20/17/san-francisco-tram.jpg?width=1200&auto=webp",
				description: "How to make the most of a visit",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:57:44Z",
				source: "Independent",
				title: "San Francisco city guide: Where to eat, drink, shop and stay in California’s counter-cultural heartland",
				url: "https://www.independent.co.uk/travel/48-hours-in/san-francisco-best-things-to-do-fun-city-guide-us-california-restaurants-bars-hotels-a8643421.html",
			},
			{
				author: "Robert Dex",
				category: "general",
				image: "https://static.standard.co.uk/2023/01/05/10/vlcsnap-2023-01-05-09h08m33s597.jpg?width=1200&auto=webp",
				description:
					"‘There’s a lot that can happen between now and then,’ Harry tells Tom Bradby in new ITV interview clip",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:57:34Z",
				source: "London Evening Standard",
				title: "Prince Harry on whether he’ll attend father’s coronation: ‘The ball’s in their court’",
				url: "https://www.standard.co.uk/news/uk/prince-harry-itv-interview-tom-bradby-sunday-memoir-spare-king-charles-coronation-william-b1050959.html",
			},
			{
				author: "Jacob Stolworthy",
				category: "general",
				image: "https://static.independent.co.uk/2022/12/31/16/Netflix-Christian-Bale.jpg?width=1200&auto=webp",
				description:
					"Full list of everything being added in the next four weeks",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:56:56Z",
				source: "Independent",
				title: "Netflix in January 2023: Every new movie and TV series landing this month",
				url: "https://www.independent.co.uk/arts-entertainment/tv/news/coming-to-netflix-january-2023-b2256529.html",
			},
			{
				author: "Adam Forrest",
				category: "general",
				image: "https://static.independent.co.uk/2023/01/05/10/newFile-4.jpg?width=1200&auto=webp",
				description:
					"Labour leader vows to turn Vote Leave message ‘from slogan into solution’",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:55:42Z",
				source: "Independent",
				title: "Keir Starmer promises ‘take back control’ bill as Labour embraces Brexit slogan",
				url: "https://www.independent.co.uk/news/uk/politics/starmer-labour-brexit-take-back-control-b2256528.html",
			},
			{
				author: "Tony Mogan",
				category: "general",
				image: null,
				description:
					"The Blues still hope to sign the Argentina international.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:06:45Z",
				source: "Metro",
				title: "‘It’s a huge risk!’ – William Gallas warns Chelsea are making a mistake paying big money for Enzo Fernandez",
				url: "https://metro.co.uk/2023/01/05/william-gallas-warns-chelsea-are-making-a-mistake-paying-huge-money-for-enzo-fernandez-18044898/",
			},
			{
				author: "Lucy Hedges",
				category: "general",
				image: null,
				description: "Pink? Purple? Stripes? The choice is yours...",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:06:10Z",
				source: "Metro",
				title: "BMW unveils the world’s first colour-changing car – and it’s very cool",
				url: "https://metro.co.uk/2023/01/05/bmw-i-vision-dee-is-the-worlds-first-colour-changing-car-18043807/",
			},
			{
				author: "Josh Milton",
				category: "general",
				image: null,
				description:
					"Brits face 20 years in US jail after ‘booze-fuelled racist abuse on flight’",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:05:23Z",
				source: "Metro",
				title: "Brits face 20 years in US jail after ‘booze-fuelled racist abuse on flight’",
				url: "https://metro.co.uk/2023/01/05/brits-face-20-years-in-us-jail-after-booze-fuelled-abuse-on-flight-18043457/",
			},
			{
				author: "Metro Sport Reporter",
				category: "general",
				image: null,
				description: "'A lot can still happen.'",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:04:49Z",
				source: "Metro",
				title: "Rivaldo names three teams that can win the Premier League as Arsenal lead title race",
				url: "https://metro.co.uk/2023/01/05/premier-league-rivaldo-names-three-title-contenders-arsenal-lead-race-18044769/",
			},
			{
				author: "Josh Milton",
				category: "general",
				image: null,
				description:
					"Some ski slopes have closed as there's not enough snow.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:01:33Z",
				source: "Metro",
				title: "Satellite images show huge drop in snow at Europe’s ski resorts after record heat",
				url: "https://metro.co.uk/2023/01/05/images-show-huge-drop-in-snow-at-europes-ski-resorts-after-record-heat-18043956/",
			},
			{
				author: "Aidan Radnedge",
				category: "general",
				image: null,
				description:
					"Rachael Moore ‘will be greatly missed by all those whose lives she touched'.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:00:46Z",
				source: "Metro",
				title: "Carer, 22, died on Christmas Eve after being hit by police car on emergency call",
				url: "https://metro.co.uk/2023/01/05/carer-22-died-on-christmas-eve-after-police-car-hit-her-in-liverpool-18043835/",
			},
			{
				author: "Business Matters",
				category: "business",
				image: null,
				description:
					"The British government has been given the go ahead to keep concealing the names of companies which received in total more than £47bn in state-backed Covid loans, after a tribunal ruled in its favour.Read more: Names of UK Covid business loan borrowers to stay secret, tribunal rules",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:00:44Z",
				source: "Business Matters | The Uk's Leading Sme Business Magazine",
				title: "Names of UK Covid business loan borrowers to stay secret, tribunal rules",
				url: "https://bmmagazine.co.uk/news/names-of-uk-covid-business-loan-borrowers-to-stay-secret-tribunal-rules/",
			},
			{
				author: "aisha-nozari",
				category: "general",
				image: null,
				description: "Such a special photo.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:00:32Z",
				source: "Metro",
				title: "Liam Neeson seen with late wife Natasha Richardson in bittersweet photo shared by her sister Joely Richardson",
				url: "https://metro.co.uk/2023/01/05/liam-neeson-seen-with-late-wife-natasha-richardson-in-bittersweet-photo-18044142/",
			},
			{
				author: "Jeff Parsons",
				category: "general",
				image: null,
				description:
					"Mouthguard-style device cleans your teeth in 10 seconds",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:00:28Z",
				source: "Metro",
				title: "Mouthguard-style device cleans your teeth in 10 seconds",
				url: "https://metro.co.uk/2023/01/05/mouthguard-style-device-cleans-your-teeth-in-10-seconds-18044276/",
			},
			{
				author: "Tanyel Mustafa",
				category: "general",
				image: null,
				description: "It's a big win for the cruelty-free community.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T11:00:15Z",
				source: "Metro",
				title: "Beauty products sold in China now don’t have to be animal tested",
				url: "https://metro.co.uk/2023/01/05/beauty-products-sold-in-china-now-dont-have-to-be-animal-tested-18044230/",
			},
			{
				author: "Sunita Thind",
				category: "general",
				image: null,
				description:
					"I’ll always remember the photographer who referred to me as his ‘little Indian takeaway’.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:58:44Z",
				source: "Metro",
				title: "As a young model, I put up with racism and sexism. Now, I refuse",
				url: "https://metro.co.uk/2023/01/05/as-a-young-model-i-put-up-with-racism-and-sexism-now-i-refuse-17964213/",
			},
			{
				author: "Maisie Spackman",
				category: "general",
				image: null,
				description:
					"Ki Griffin stars in new immersive short film Kindred.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:58:24Z",
				source: "Metro",
				title: "Ki Griffin on future after Hollyoaks: ‘It’s important to treat an audience with dignity’",
				url: "https://metro.co.uk/2023/01/05/ki-griffin-on-seeking-dignity-for-audience-after-hollyoaks-18044100/",
			},
			{
				author: "Sean Kearns",
				category: "general",
				image: null,
				description: "Huge boost.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:55:53Z",
				source: "Metro",
				title: "Antonio Conte names four Tottenham players that could return against Arsenal",
				url: "https://metro.co.uk/2023/01/05/antonio-conte-names-four-tottenham-players-that-could-return-for-arsenal-clash-18044563/",
			},
			{
				author: "Rachael O&#039;Connor",
				category: "general",
				image: null,
				description:
					"David previously gushed about his 'special' relationship with his stepkids.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:54:38Z",
				source: "Metro",
				title: "Doting stepdad David Harbour treats Lily Allen’s daughter Ethel, 11, to day out at basketball game",
				url: "https://metro.co.uk/2023/01/05/doting-stepdad-david-harbour-treats-lily-allens-daughter-to-day-out-18043338/",
			},
			{
				author: "Meghna Amin",
				category: "general",
				image: null,
				description:
					"Prince Harry has claimed his brother Prince William ‘knocked him to the floor’ during a physical altercation.",
				country: "gb",
				language: "en",
				published_at: "2023-01-05T10:53:46Z",
				source: "Metro",
				title: "Vanessa Feltz shrugs off Prince Harry and Prince William’s altercation: ‘It’s like everybody’s Christmas’",
				url: "https://metro.co.uk/2023/01/05/vanessa-feltz-shrugs-off-prince-harry-and-prince-williams-altercation-18044670/",
			},
		],
	};

	return (
		<div>
			<NewsList />
		</div>
	);
}
