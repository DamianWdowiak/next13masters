import { type ReactNode } from "react";
import { type Route } from "next";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const NavbarItem = ({
	href,
	exact,
	children,
}: {
	href: Route;
	exact: boolean;
	children: ReactNode;
}) => {
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
