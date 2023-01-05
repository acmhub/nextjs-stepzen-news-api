import "../styles/globals.css";
import Header from "./components/Header";
import Providers from "./Providers";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />

			<Providers>
				<body className="bg-[#eee] text-black dark:bg-[#191919] dark:text-white transition-all duration-500">
					<Header />

					<main className="container">{children}</main>
				</body>
			</Providers>
		</html>
	);
}
