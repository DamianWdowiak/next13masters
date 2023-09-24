import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductListItemType } from "@/ui/types";

export const ProductList = ({ productItems }: { productItems: ProductListItemType[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{productItems.map((productItem) => {
				return (
					<li key={productItem.id}>
						<ProductListItem productItem={productItem} />
					</li>
				);
			})}
		</ul>
	);
};
