import { getProductsCount, getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

const PER_PAGE = 8;

export const generateStaticParams = async () => {
	const numberOfProducts = await getProductsCount();
	const numberOfPages = Math.ceil(numberOfProducts / PER_PAGE);

	return Array.from({ length: numberOfPages }, (_, i) => i + 1).map((page) => ({
		page: page.toString(),
	}));
};

export default async function PaginatedProductsPage({
	params: { page },
}: {
	params: { page: number };
}) {
	const pageOffset = (page - 1) * PER_PAGE;
	const productListItems = await getProductsList({ per_page: PER_PAGE, offset: pageOffset });
	const numberOfProducts = await getProductsCount();
	const numberOfPages = Math.ceil(numberOfProducts / PER_PAGE);

	return (
		<div className="flex flex-col items-center">
			<ProductList productItems={productListItems} />
			<Pagination basePath="/products" numberOfPages={numberOfPages} />
		</div>
	);
}
