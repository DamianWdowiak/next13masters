import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductListItemType } from "@/ui/types";

export const ProductList = ({ productItems }: { productItems: ProductListItemType[] }) => {
	return (
		<ul data-testid="products-list" className="flex gap-6">
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
