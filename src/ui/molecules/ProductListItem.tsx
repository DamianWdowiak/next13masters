import Link from "next/link";

import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	productItem: ProductListItemFragment;
};

export const ProductListItem = ({ productItem }: ProductListItemProps) => {
	if (!productItem.attributes) {
		return null;
	}

	const coverImage = productItem.attributes.images.data[0]?.attributes;
	const coverImageSrc = `${process.env.IMAGE_URL}${coverImage?.url}`;
	const categories = productItem.attributes.categories || null;
	const category = categories ? categories.data[0].attributes?.name || "" : "";

	return (
		<Link href={`/product/${productItem.id}`}>
			<article className="flex flex-col items-center space-y-4">
				{coverImage && (
					<ProductListItemCoverImage src={coverImageSrc} alt={coverImage.alternativeText} />
				)}
				<ProductListItemDescription
					name={productItem.attributes.name}
					price={productItem.attributes.price}
					category={category}
				/>
			</article>
		</Link>
	);
};
