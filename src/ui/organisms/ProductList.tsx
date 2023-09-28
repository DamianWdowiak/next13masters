import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ productItems }: { productItems: ProductListItemFragment[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{productItems.map((productItem) => {
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
