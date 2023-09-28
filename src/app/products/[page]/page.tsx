import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

const PER_PAGE = 4;

export const generateStaticParams = async () => {
	const {
		meta: {
			pagination: { pageCount },
		},
	} = await getProductsList({
		perPage: PER_PAGE,
	});

	return Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => ({
		page: page.toString(),
	}));
};

export default async function PaginatedProductsPage({
	params: { page },
}: {
	params: { page: string };
}) {
	const {
		data: productListItems,
		meta: {
			pagination: { pageCount },
		},
	} = await getProductsList({
		perPage: PER_PAGE,
		page: Number.parseInt(page),
	});

	return (
		<div className="flex w-full flex-col items-center">
			<div className="w-full bg-gray-600 px-36 py-8 capitalize text-white">
				<h1>All Products</h1>
			</div>
			<ProductList productItems={productListItems} />
			<Pagination basePath="/products" numberOfPages={pageCount} />
		</div>
	);
}
