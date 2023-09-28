import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import { Navbar } from "@/ui/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next 13 Masters",
	description: "Next.js 13 Masters Course",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex min-h-screen flex-grow flex-col`}>
				<header>
					<Navbar />
				</header>
				<main className="flex flex-grow flex-col">{children}</main>
				<footer className="bg-gray-100 py-6">
					<p className="text-center text-sm text-gray-500">
						© {new Date().getFullYear()} Damian Wdowiak
					</p>
				</footer>
			</body>
		</html>
	);
}
