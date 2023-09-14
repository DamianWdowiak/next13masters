"use client";

import { type ReactNode } from "react";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({
	href,
	className,
	activeClassName,
	exact = true,
	children,
}: {
	href: Route;
	className: string;
	activeClassName: string;
	exact?: boolean;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link href={href} className={isActive ? activeClassName : className}>
			{children}
		</Link>
	);
};
