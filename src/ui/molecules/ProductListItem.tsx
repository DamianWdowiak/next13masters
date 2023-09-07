import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemType } from "@/ui/types";

export const ProductListItem = ({ productItem }: { productItem: ProductListItemType }) => {
	return (
		<article className="flex flex-col items-center space-y-4">
			<ProductListItemCoverImage {...productItem.coverImage} />
			<ProductListItemDescription
				name={productItem.name}
				price={productItem.price}
				category={productItem.category}
			/>
		</article>
	);
};
