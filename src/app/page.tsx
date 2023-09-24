import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const PER_PAGE = 4;

export default async function Home() {
	const productListItems = await getProductsList({ per_page: PER_PAGE });

	return (
		<section className="flex min-h-screen flex-col items-center">
			<h1 className="text-center text-4xl font-bold text-gray-800">Home Page</h1>
			<ProductList productItems={productListItems} />
		</section>
	);
}
