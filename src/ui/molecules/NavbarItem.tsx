import { type ReactNode } from "react";
import { type Route } from "next";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

type NavbarItemProps = {
	href: Route;
	exact: boolean;
	children: ReactNode;
};

export const NavbarItem = ({ href, exact, children }: NavbarItemProps) => {
	const commonClasses =
		"border-b-2 pb-5 text-center text-lg font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700";

	return (
		<ActiveLink
			href={href}
			className={commonClasses + " border-transparent"}
			activeClassName={commonClasses + " border-blue-500"}
			exact={exact}
		>
			{children}
		</ActiveLink>
	);
};
