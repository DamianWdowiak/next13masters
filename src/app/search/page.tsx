import { getProductsListByName } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] };
}) {
	const query = searchParams.query?.toString() || null;
	const {
		data: productListItems,
		meta: {
			pagination: { total },
		},
	} = await getProductsListByName({
		name: query,
	});

	return (
		<div className="flex w-full flex-col items-center">
			<div className="w-full bg-gray-600 px-36 py-8 text-white">
				<h2>{`Found ${total} item for phrase "${query || ""}"`}</h2>
			</div>
			<ProductList productItems={productListItems} />
		</div>
	);
}
