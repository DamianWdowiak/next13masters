"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import debounce from "lodash/debounce";

export const SearchBox = () => {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);

	const performSearch = (query: string) => {
		router.push(`/search?query=${encodeURIComponent(query)}`);
	};

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const query = inputRef.current?.value || "";
		performSearch(query);
	};

	const debouncedSearch = debounce((value: string) => {
		performSearch(value);
	}, 500);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		debouncedSearch(value);
	};

	return (
		<form onSubmit={handleSearch}>
			<input
				ref={inputRef}
				className="h-8 w-64 rounded-md border border-gray-400 px-2"
				type="search"
				placeholder="Search"
				name="search"
				aria-label="Search"
				onChange={handleChange}
			/>
		</form>
	);
};
