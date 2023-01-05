import React from "react";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

export default function Header() {
	return (
		<div>
			<NavLinks />
			<SearchBox />
		</div>
	);
}
