import "../styles/globals.css";
import Header from "./components/Header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />

			<body className="bg-[#eee] dark:bg-[#191919] dark:text-white transition-all duration-500">
				<Header />

				<main className="container">{children}</main>
			</body>
		</html>
	);
}
