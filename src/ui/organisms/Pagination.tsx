import { type Route } from "next";
import { PaginationItem } from "@/ui/molecules/PaginationItem";

export const Pagination = ({
	numberOfPages,
	basePath,
}: {
	numberOfPages: number;
	basePath: string;
}) => {
	return (
		<nav>
			<ul className="inline-flex h-10 -space-x-px text-base" aria-label="pagination">
				{Array.from({ length: numberOfPages }, (_, i) => i + 1).map((page) => {
					return (
						<li key={page}>
							<PaginationItem href={`${basePath}/${page}` as Route}>{page}</PaginationItem>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
