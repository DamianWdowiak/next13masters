import { getProductsListByCategorySlug } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

const PER_PAGE = 4;
const PAGE = 1;

export const RelatedProducts = async ({ categorySlug }: { categorySlug: string }) => {
	const { data: productListItems } = await getProductsListByCategorySlug({
		perPage: PER_PAGE,
		page: PAGE,
		categorySlug: categorySlug,
	});

	return (
		<ul
			data-testid="related-products"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{productListItems.map((productItem) => {
				if (!productItem.attributes) {
					return null;
				}

				return (
					<li key={productItem.attributes.slug}>
						<ProductListItem productItem={productItem} />
					</li>
				);
			})}
		</ul>
	);
};
