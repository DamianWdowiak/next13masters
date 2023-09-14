import { type ReactNode } from "react";
import { type Route } from "next";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const PaginationItem = ({ href, children }: { href: Route; children: ReactNode }) => {
	return (
		<ActiveLink
			href={href}
			exact={false}
			className="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
			activeClassName="flex h-10 items-center justify-center border border-gray-300 bg-blue-50 px-4 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
		>
			{children}
		</ActiveLink>
	);
};
