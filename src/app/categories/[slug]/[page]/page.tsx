import { type Metadata } from "next";
import capitalize from "lodash/capitalize";

import { getProductsListByCategorySlug } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

const PER_PAGE = 4;

export function generateMetadata({ params: { slug } }: { params: { slug: string } }): Metadata {
	return {
		title: capitalize(slug),
	};
}

export default async function ProductsByCategoryPage({
	params: { slug, page },
}: {
	params: { slug: string; page: string };
}) {
	const {
		data: productListItems,
		meta: {
			pagination: { pageCount },
		},
	} = await getProductsListByCategorySlug({
		perPage: PER_PAGE,
		page: Number.parseInt(page),
		categorySlug: slug,
	});

	return (
		<div className="flex w-full flex-col items-center">
			<div className="w-full bg-gray-600 px-36 py-8 text-white">
				<h2>{capitalize(slug)}</h2>
			</div>
			<ProductList productItems={productListItems} />
			<Pagination basePath="/products" numberOfPages={pageCount} />
		</div>
	);
}
