import { type Route } from "next";

import { NavbarItem } from "@/ui/molecules/NavbarItem";

export const Navbar = () => {
	const links = [
		{
			href: "/",
			exact: true,
			name: "Home",
		},
		{
			href: "/products",
			exact: false,
			name: "All",
		},
	];

	return (
		<nav className="flex h-16 w-full items-center justify-between bg-gray-100 px-36">
			<ul className="flex gap-10">
				{links.map((link) => (
					<li key={link.href}>
						<NavbarItem href={link.href as Route} exact={link.exact}>
							{link.name}
						</NavbarItem>
					</li>
				))}
			</ul>
		</nav>
	);
};
